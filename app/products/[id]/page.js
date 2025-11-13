export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return (
      <div className="text-center text-red-500 mt-20">Product not found.</div>
    );
  }

  const product = await res.json();

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-lg mt-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <p className="text-2xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>

          <button className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
