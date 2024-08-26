import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { category: string } }) {
  const { category } = params;

  try {
    // Fetch products based on the category
    const products = await prisma.product.findMany({
      where: {
        category: category.toUpperCase(),  // Assuming category enum values are in uppercase
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
