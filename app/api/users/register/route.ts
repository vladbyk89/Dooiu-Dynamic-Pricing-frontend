import connect from '@/config/dbConfig';
import User from '@/model/User';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const user = await User.findOne({ email: body.email });

        if (user) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        //hash password
        // const salt = await bcryptjs.genSalt(10);
        // const hashPassword = await bcryptjs.hash(password, salt);

        //Create and save new user to DB
        const newUser = await User.create(body);

        //send email
        // await sendEmail({ email, emailType: "VERIFY", userId: newUser._id });

        return NextResponse.json({
            message: 'User created succefully',
            success: true,
            newUser,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
