import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const { location, category, continent, rating } = await req.json();

		const url = process.env.DYNAMIC_PRICING_URL || '';

		const { data } = await axios.post(url, {
			location,
			category,
			continent,
			rating,
		});

		if (!data) {
			return NextResponse.json(
				{ error: 'Invalide details' },
				{ status: 400 }
			);
		}

		return NextResponse.json({ suggestion: data.price_prediction });
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
