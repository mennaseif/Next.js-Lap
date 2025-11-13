"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditTitle(product.title);
    setEditPrice(product.price);
  };

  const handleSave = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, title: editTitle, price: editPrice } : p
      )
    );
    setEditId(null);
  };

  const filteredProducts = products.filter((p) => {
    const matchesTitle = p.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesPrice =
      searchPrice === "" || p.price <= parseFloat(searchPrice);
    return matchesTitle && matchesPrice;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Products
      </h1>

      {/* Search inputs */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Max price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
          className="border p-2 rounded w-40"
        />
      </div>

      {/* Product cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            {editId === p.id ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  className="border p-2 rounded"
                />
                <button
                  onClick={() => handleSave(p.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-contain mb-3"
                />
                <h2 className="font-semibold text-lg text-gray-800 mb-2">
                  {p.title}
                </h2>
                <p className="text-gray-500 mb-2">${p.price}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
