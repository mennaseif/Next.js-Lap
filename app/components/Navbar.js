"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md flex justify-between items-center">
      <h1 className="font-bold text-2xl">
        <Link href="/" className="hover:text-gray-200 transition">
          Shop App
        </Link>
      </h1>
      <div className="flex space-x-6 text-lg items-center">
        <Link href="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-200 transition">
          Products
        </Link>
        <Link href="/login" className="hover:text-gray-200 transition">
          Login
        </Link>
        <div className="flex space-x-3 border-l border-white pl-4">
          <Link href="/en" className="hover:text-gray-200">
            EN
          </Link>
          <Link href="/ar" className="hover:text-gray-200">
            AR
          </Link>
        </div>
      </div>
    </nav>
  );
}
