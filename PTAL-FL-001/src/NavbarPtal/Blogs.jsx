import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import the blog data
import blogsProducts from "../blogsProducts.json";

const ARTICLES_PER_PAGE = 12;

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Use the imported blogsProducts data
  const articles = blogsProducts;

  const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(
    startIdx,
    startIdx + ARTICLES_PER_PAGE
  );
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return (
    <div className="bg-[#fdf8ef] px-6 py-16">
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      <h1
        className="text-4xl md:text-5xl text-center mb-12"
        style={{ fontFamily: "'Fondamento', cursive" }}
      >
        News
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {currentArticles.map((article) => (
          <div key={article.id} className="group">
            <div
              onClick={() => navigate(article.link)}
              className="cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-md group-hover:opacity-90 transition"
              />
              <p className="mt-4 text-sm text-gray-600 pointer-events-none">
                {article.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold group-hover:text-[#B01C1A] transition">
                {article.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-4 text-lg">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-[#B01C1A] hover:underline"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 ${
              currentPage === i + 1
                ? "text-white bg-[#B01C1A] rounded"
                : "text-[#B01C1A] hover:underline"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-[#B01C1A] hover:underline"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
