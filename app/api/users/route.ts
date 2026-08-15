import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/users - Read all users from PostgreSQL
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        count: users.length,
        data: users,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching users from PostgreSQL:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch users from database',
        details: error?.message || 'Unknown database error',
      },
      { status: 500 }
    );
  }
}

// POST /api/users - Write a new user to PostgreSQL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, phone, role } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        {
          success: false,
          error: 'A valid email address is required',
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: 'A user with this email already exists',
        },
        { status: 409 }
      );
    }

    // Create user in PostgreSQL
    const newUser = await prisma.user.create({
      data: {
        email,
        name: name || null,
        phone: phone || null,
        role: role === 'ADMIN' ? 'ADMIN' : 'CUSTOMER',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating user in PostgreSQL:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create user record',
        details: error?.message || 'Unknown database error',
      },
      { status: 500 }
    );
  }
}
