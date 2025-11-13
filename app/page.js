import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-blue-700 drop-shadow-lg">
          Welcome to <span className="text-blue-600">Shop App</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Browse our collection
          and find what you love!
        </p>

        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-transform transform hover:scale-105 shadow-xl"
        >
          Start Shopping
        </Link>
      </div>

      {/* Highlights / Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Wide Selection
          </h3>
          <p className="text-gray-600">
            Thousands of products from top brands, all in one place.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Best Prices</h3>
          <p className="text-gray-600">
            Competitive pricing so you always get the best deal.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Quick and reliable shipping to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}
