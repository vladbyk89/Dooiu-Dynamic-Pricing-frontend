import connect from '@/config/dbConfig';
import User from '@/model/User';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(req: NextRequest) {
    try {
        const users = await User.find({});

        return NextResponse.json({ users });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
