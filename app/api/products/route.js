import Product from "../../../models/Products";
import { connectDB } from "../../../lib/mongodb";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newProduct = await Product.create(data);
  return Response.json(newProduct, { status: 201 });
}
