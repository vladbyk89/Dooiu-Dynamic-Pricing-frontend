import connect from '@/config/dbConfig';
import User from '@/model/User';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
    try {
        await connect();

        const data = await req.json();

        const filter = { email: data.email };
        const update = { staticPrice: data.staticPrice };

        const updatedUser = await User.findOneAndUpdate(filter, update, {
            new: true,
        });

        return NextResponse.json({ updatedUser });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
