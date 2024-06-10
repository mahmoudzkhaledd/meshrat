import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from 'bcryptjs';
export async function POST(request: NextRequest) {
    const pass = request.nextUrl.searchParams.get('password');
    if (pass != process.env.CREATE_ADMIN_PASS) {
        return NextResponse.json({
            message: "Unauthorizedddd",
        }, { status: 400 });
    }
    try {
        const pass = 'usama@123';
        const hashedPass = await bcrypt.hash(pass, 10);

        const admin = await prisma.admin.create({
            data: {
                name: "Usama El-Naggar",
                email: "info@meshrat.com",
                username: "usama222",
                phone: "01064188541",
                password: hashedPass,
                jobTitle: "Website Ownner",
            }
        });
        return Response.json({ admin });
    } catch (ex) {
        return Response.json({ ex });
    }
}