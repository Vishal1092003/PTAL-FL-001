
// export default function Search() {
//   return <div>Search Component</div>;
// }


import React, { useState, useEffect } from "react";
import products from "../products.json";
import { useCart } from "../contexts/CartContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState(new Set());

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = products
      .filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);

    setResults(filtered);
  }, [query]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts(prev => new Set([...prev, product.id]));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a product..."
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {results.map((product) => (
          <div
            key={product.id}
            className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-2 pb-12">
              <div className="text-[#8b0000] text-sm flex items-center gap-2">
                <div className="flex">
                  {Array(Math.floor(product.rating)).fill(0).map((_, idx) => (
                    <span key={idx} className="hover:scale-110 transition">★</span>
                  ))}
                  {Array(5 - Math.floor(product.rating)).fill(0).map((_, idx) => (
                    <span key={idx} className="hover:scale-110 transition">☆</span>
                  ))}
                </div>
                <span>{product.reviews} reviews</span>
              </div>

              <h2 className="font-bold uppercase text-base leading-snug hover:underline">
                {product.name}
              </h2>

              <p className="text-sm font-medium text-black">
                FROM ₹{product.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedProducts.has(product.id)}
              className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300 ${
                addedProducts.has(product.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#8b0000] hover:bg-red-800 active:scale-95"
              } text-white`}
            >
              {addedProducts.has(product.id) ? "ADDED TO CART" : "ADD TO CART"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
