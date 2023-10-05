'use client';

// ** React
import React, { useState } from 'react';

// ** Redux
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';
import { updateDynamicPricing } from '@/lib/redux/slices/userSlice/thunks';

// ** Styles
import '../../styles/profile/setDynamicStyle.scss';

// ** NextJs
import { useRouter } from 'next/navigation';
import Loader from '@/app/components/Loader';
import axios from 'axios';

export default function ActivateDynamicPricing() {
	// Hooks
	const dispath = useAppDispatch();
	const router = useRouter();
	const user = useAppSelector(selectUser);

	// UseState
	const [minPrice, setMinPrice] = useState(0);
	const [confirmPage, setConfirmPage] = useState(false);
	const [dynamicPrice, setDynamicPrice] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [dynamicPricingError, setDynamicPricingError] = useState('');

	const confirmDynamicPrice = async () => {
		setIsLoading(true);

		//
		const priceToShowUser =
			minPrice >= dynamicPrice * 30 ? minPrice : dynamicPrice * 30;

		await dispath(
			updateDynamicPricing({
				email: user.email,
				dynamicPricing: {
					minPrice,
					isActive: true,
					dynamicPrice: dynamicPrice * 30,
				},
			})
		);

		router.back();
	};

	const handleContinue = async () => {
		const { data } = await axios.post('/api/dynamic-pricing/getPrice', {
			location: user.location.country.toLowerCase(),
			category: user.serviceCategory,
			continent: user.location.continent,
			rating: user.rating,
		});

		const recomendedPrice = data.suggestion;

		if (!recomendedPrice)
			return setDynamicPricingError(
				'Server might be slow in responding. Please try again.'
			);
		else {
			setDynamicPrice(recomendedPrice);
			setConfirmPage(true);
		}
	};
	return (
		<main className='setDynamicPricePage'>
			{!confirmPage && (
				<div className='setMinPriceWindow'>
					<div>
						<h2>Set Dynamic</h2>
						<h2>Pricing Rules</h2>
					</div>
					<p className='text'>
						What is the least amount you are willing to earn for 30
						min call?
					</p>

					<div className='setMinPriceBox'>
						<label htmlFor='minPriceInput'>
							<b>$</b>
							<input
								type='text'
								placeholder='00.00'
								value={minPrice == 0 ? '' : minPrice}
								onChange={(e) => {
									const result = e.target.value.replace(
										/[^0-9]/gi,
										''
									);

									setMinPrice(Number(result));
								}}
							/>
						</label>
						<button
							disabled={minPrice === 0}
							style={{
								borderWidth: 0,
								backgroundColor:
									minPrice === 0 ? '#00000040' : 'black',
								cursor:
									minPrice === 0 ? 'not-allowed' : 'pointer',
								color: 'white',
							}}
							onClick={handleContinue}
						>
							Continue
						</button>
						<button
							onClick={() => router.back()}
							style={{ cursor: 'pointer' }}
						>
							Cancel
						</button>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: 40,
							color: 'rgb(255, 74, 74)',
							fontWeight: '500',
							textAlign: 'center',
						}}
					>
						{dynamicPricingError}
					</div>
				</div>
			)}
			{confirmPage &&
				(isLoading ? (
					<Loader />
				) : (
					<div className='setMinPriceBox'>
						<h4 style={{ textAlign: 'center', fontSize: '1.3rem' }}>
							Dooiu's technology recommends you charging
						</h4>
						<h2 style={{ textAlign: 'center', color: '#00c18a' }}>
							${dynamicPrice * 30} USD for a 30 minutes call
						</h2>
						<button onClick={confirmDynamicPrice}>Confirm</button>
						<button
							onClick={() =>
								router.replace('/profile/change-pricing')
							}
						>
							No thank you, I'll choose my own price
						</button>
					</div>
				))}
		</main>
	);
}
