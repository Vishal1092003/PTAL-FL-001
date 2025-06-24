
//new
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";

import { useTranslation } from "react-i18next";
import productData from "../../products.json";

const videos = [
  {
    id: 1,
    title: "Coppered Moscow Mule Mugs (Set of 2) Gift Boxed",
    videoUrl: "/personalisedGifting/videos/video1.mp4",
    thumbnail: "https://example.com/video-thumb1.jpg",
  },
  {
    id: 2,
    title: "Brass Box in Gift Box",
    videoUrl: "/personalisedGifting/videos/video2.mp4",
    thumbnail: "https://example.com/video-thumb2.jpg",
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { t } = useTranslation();

  const handleAddToCart = () => {
    setIsAdded(true);
    // Pass only the product ID instead of the full product object
    onAddToCart(product.id);
    
    // Reset the "Added" state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
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
    <div className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
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
          <span>{product.reviews} {t('gifting.reviews')}</span>
        </div>

        {/* Name - Now translated */}
        <h2 className="font-bold uppercase text-base leading-snug hover:underline">
          {translatedProduct.name}
        </h2>

        {/* Price - Now translated with currency symbol */}
        <p className="text-sm font-medium text-black">
          {t('gifting.from_price', { 
            price: translatedProduct.price.toLocaleString(),
            currency: t('common.currency_symbol')
          })}
        </p>
      </div>

      {/* Add to cart button fixed to bottom 5px */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300
          ${isAdded 
            ? 'bg-green-600 cursor-not-allowed' 
            : 'bg-[#8b0000] hover:bg-red-800 active:scale-95'
          } text-white`}
      >
        {isAdded ? t('gifting.added_to_cart') : t('gifting.add_to_cart')}
      </button>
    </div>
  );
};

export default function Gifting() {
  const [products, setProducts] = useState([]);
  const [translatedVideos, setTranslatedVideos] = useState([]);
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Filter products with class "gifting" from products.json
    const giftingProducts = productData.filter(
      (item) => item.class.toLowerCase() === "gifting"
    );
    setProducts(giftingProducts);
  }, []);

  useEffect(() => {
    // Translate video titles when language changes
    const translatedVideoData = videos.map(video => ({
      ...video,
      title: t(`gifting.videos.video_${video.id}_title`, { defaultValue: video.title })
    }));
    setTranslatedVideos(translatedVideoData);
  }, [t, i18n.language]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div className={`bg-[#f9f6f1] min-h-screen py-10 px-4 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-5xl font-serif text-center text-[#a42c2a] mb-8">
        {t('gifting.page_title')}
      </h2>
      
      {/* Top 2 Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
        {translatedVideos.map((video) => (
          <div key={video.id} className="relative rounded-lg overflow-hidden shadow-md flex flex-col items-center w-72 h-96 mx-auto">
            <video
              src={video.videoUrl}
              controls
              poster={video.thumbnail}
              className="w-full mx-auto h-96 object-cover"
              autoPlay
              muted
              loop
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2">
              {video.title}
            </div>
          </div>
        ))}
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}
