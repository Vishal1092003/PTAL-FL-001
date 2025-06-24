
import React, { useState, useEffect } from "react";
import productData from "../products.json";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Product Card
const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart(product.id);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Get translated product details
  const getTranslatedProduct = (product) => {
    return {
      name: t(`products.${product.id}.name`, { defaultValue: product.name }),
      price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() }))
    };
  };

  const translatedProduct = getTranslatedProduct(product);

  return (
    <div 
      className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative cursor-pointer"
      onClick={handleProductClick}
    >
      <img
        src={product.image}
        alt={translatedProduct.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 pb-12">
        {/* Rating */}
        <div className="text-[#8b0000] text-sm flex items-center gap-2">
          <div className="flex">
            {Array(product.rating).fill(0).map((_, idx) => (
              <span key={idx} className="hover:scale-110 transition">★</span>
            ))}
            {Array(5 - product.rating).fill(0).map((_, idx) => (
              <span key={idx} className="hover:scale-110 transition">☆</span>
            ))}
          </div>
          <span>{product.reviews} {t('product_grid.reviews')}</span>
        </div>

        {/* Name */}
        <h2 className="font-bold uppercase text-base leading-snug hover:underline">
          {translatedProduct.name}
        </h2>

        {/* Price */}
        <p className="text-sm font-medium text-black">
          {t('product_grid.from_price', { 
            price: translatedProduct.price.toLocaleString(),
            currency: t('common.currency_symbol')
          })}
        </p>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300
          ${isAdded 
            ? 'bg-green-600 cursor-not-allowed' 
            : 'bg-[#8b0000] hover:bg-red-800 active:scale-95'
          } text-white`}
      >
        {isAdded ? t('product_grid.added_to_cart') : t('product_grid.add_to_cart')}
      </button>
    </div>
  );
};

// Main Grid Component
export default function BrassProductGrid() {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const sortOptions = [
    { key: "Featured", label: t('product_grid.sort_options.featured') },
    { key: "Alphabetically, A-Z", label: t('product_grid.sort_options.alphabetically_a_z') },
    { key: "Alphabetically, Z-A", label: t('product_grid.sort_options.alphabetically_z_a') },
    { key: "Price, low to high", label: t('product_grid.sort_options.price_low_to_high') },
    { key: "Price, high to low", label: t('product_grid.sort_options.price_high_to_low') },
  ];

  useEffect(() => {
    // Debug: Log all products and their classes
    console.log("All products:", productData);
    console.log("Product classes:", productData.map(item => ({ id: item.id, class: item.class })));

    // Filter brass products with multiple possible class names
    const brassProducts = productData.filter((item) => {
      const className = item.class ? item.class.toLowerCase() : '';
      console.log(`Product ${item.id} has class: "${className}"`);
      return className === "brass" || className === "brass products" || className.includes("brass");
    });

    console.log("Filtered brass products:", brassProducts);
    setProducts(brassProducts);
  }, []);

  // Helper function to get translated product details for sorting
  const getTranslatedProductForSorting = (product) => {
    return {
      ...product,
      translatedName: t(`products.${product.id}.name`, { defaultValue: product.name }),
      translatedPrice: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() }))
    };
  };

  const sortedProducts = [...products].sort((a, b) => {
    const productA = getTranslatedProductForSorting(a);
    const productB = getTranslatedProductForSorting(b);

    switch (sortType) {
      case "Alphabetically, A-Z":
        return productA.translatedName.localeCompare(productB.translatedName);
      case "Alphabetically, Z-A":
        return productB.translatedName.localeCompare(productA.translatedName);
      case "Price, low to high":
        return productA.translatedPrice - productB.translatedPrice;
      case "Price, high to low":
        return productB.translatedPrice - productA.translatedPrice;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIdx, startIdx + productsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [i18n.language]);


  return (
    <section className={`bg-[#f9f4ec] py-12 px-6 md:px-12 transition-all duration-300 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">
          {products.length} {t('product_grid.products')}
        </h2>
        <select
          value={sortType}
          onChange={(e) => {
            setSortType(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all"
        >
          <option disabled>{t('product_grid.sort')}</option>
          {sortOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center space-x-2 text-sm font-medium text-gray-700">
          {currentPage > 1 && (
            <button
              onClick={goToPrevious}
              className="px-3 py-2 bg-[#8b0000] text-white font-bold rounded hover:bg-red-800 transition-all duration-300"
            >
              {i18n.language === 'ar' ? '›' : '‹'}
            </button>
          )}
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 rounded transition-all duration-200 ${
                currentPage === page
                  ? "text-[#8b0000] font-bold underline"
                  : "hover:text-[#8b0000]"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={goToNext}
              className="px-3 py-2 bg-[#8b0000] text-white font-bold rounded hover:bg-red-800 transition-all duration-300"
            >
              {i18n.language === 'ar' ? '‹' : '›'}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
