

import { Facebook, Twitter } from "lucide-react";
const images = {
  main1: "/storyOfArtistImages/image1.webp", // Artisan working
  main2: "/storyOfArtistImages/image2.webp", // Traditional utensils
  main3: "/storyOfArtistImages/image3.webp", // Artisan at work
  main4: "/storyOfArtistImages/image4.webp",
  main5: "/storyOfArtistImages/image5.webp",
};
import { useTranslation } from "react-i18next";
// Social icons as SVG
const FacebookIcon = () => (
  <svg
    className="w-6 h-6 inline-block align-middle"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.631.771-1.631 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    className="w-6 h-6 inline-block align-middle"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .387.045.764.127 1.124C7.728 8.819 4.1 6.884 1.671 3.882c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89A4.936 4.936 0 0 1 2 17.292c1.384.888 3.033 1.408 4.812 1.408 5.774 0 8.936-4.785 8.936-8.936 0-.136-.004-.272-.01-.406A6.384 6.384 0 0 0 24 4.557z" />
  </svg>
);
const PinterestIcon = () => (
  <svg
    className="w-6 h-6 inline-block align-middle"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.004 0C5.371 0 0 5.373 0 12.007c0 5.021 3.163 9.295 7.633 11.019-.105-.937-.2-2.377.042-3.401.219-.933 1.412-5.949 1.412-5.949s-.36-.721-.36-1.786c0-1.674.97-2.922 2.176-2.922 1.027 0 1.524.771 1.524 1.697 0 1.035-.659 2.582-.998 4.022-.285 1.206.606 2.192 1.797 2.192 2.156 0 3.813-2.273 3.813-5.553 0-2.902-2.086-4.933-5.066-4.933-3.457 0-5.492 2.594-5.492 5.273 0 1.035.398 2.146.896 2.747.099.12.113.225.083.346-.09.377-.292 1.206-.332 1.373-.05.205-.162.249-.375.151-1.398-.646-2.272-2.672-2.272-4.299 0-3.507 2.551-6.735 7.358-6.735 3.862 0 6.866 2.753 6.866 6.425 0 3.841-2.424 6.932-5.795 6.932-1.133 0-2.198-.588-2.561-1.262l-.697 2.654c-.2.765-.593 1.724-.881 2.31.662.204 1.361.315 2.092.315 6.633 0 12.004-5.373 12.004-12.007C24.008 5.373 18.637 0 12.004 0" />
  </svg>
);

export default function ThSeThatheraArticle() {
  const { t, i18n } = useTranslation();
  return (
    <div className="max-w-full mx-auto bg-white text-gray-900 p-6 md:p-10 rounded-lg shadow font-serif leading-relaxed">
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      <h1
        className="text-3xl md:text-4xl mb-6 text-center"
        style={{ fontFamily: "'Fondamento', cursive" }}
      >
        {t('storyArtisians.heading')}
      </h1>
      <p className="mb-4">
        {t('storyArtisians.p1')}
      </p>
      <p className="mb-4">
       {t('storyArtisians.p2')}
      </p>
      <figure className="my-8">
        <img
          src={images.main1}
          alt="Thathera artisan working"
          className="w-full md:w-3/4 lg:w-2/4 mx-auto h-auto md:h-72 object-cover rounded-lg shadow"
        />
      </figure>
      <p className="mb-4">
        {t('storyArtisians.p3')}
      </p>
      <p className="mb-4">
       {t('storyArtisians.p4')}
      </p>
      <figure className="my-8">
        <img
          src={images.main2}
          alt="Traditional utensils"
          className="w-full md:w-3/4 lg:w-2/4 mx-auto h-auto md:h-72 object-cover rounded-lg shadow"
        />
      </figure>
      <p className="mb-4">
        {t('storyArtisians.p5')}
      </p>
      <div className="my-8 aspect-video rounded-lg overflow-hidden shadow">
        <iframe
          title="Story of Thatheras"
          src="https://www.youtube.com/embed/Jh8pLcHOJGY?start=12"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mb-4">
        {t('storyArtisians.p6')}
      </p>
      <p className="mb-4">
        {t('storyArtisians.p7')}
      </p>
      <figure className="my-8">
        <img
          src={images.main3}
          alt="Artisan portrait"
          className="w-full md:w-1/2 lg:w-1/4 mx-auto h-auto object-cover rounded-lg shadow"
        />
      </figure>
      <p className="mb-4">
        {t('storyArtisians.p8')}
      </p>
      <figure className="my-8">
        <img
          src={images.main4}
          alt="Young Thathera artisan"
          className="w-full md:w-3/4 lg:w-2/4 mx-auto h-auto md:h-72 object-cover rounded-lg shadow"
        />
      </figure>
      <p className="mb-4">
       {t('storyArtisians.p9')}
      </p>
      <p className="mb-4">
        {t('storyArtisians.p10')}
      </p>
      <p className="mb-4">
        {t('storyArtisians.p11')}
      </p>
      <figure className="my-8">
        <img
          src={images.main5}
          alt="Thathera artisan at work"
          className="w-full md:w-3/4 lg:w-2/4 mx-auto h-auto md:h-72 object-cover rounded-lg shadow"
        />
      </figure>
      <p>
       {t('storyArtisians.p12')}
      </p>

      <div className="bg-[#f5f2e9] mt-16 px-4 py-10 rounded-lg">
        <div className="text-center">
          <div className="font-semibold text-lg text-red-600 mb-2">
            {t('storyArtisians.p13')}
          </div>
          <div className="font-semibold mb-2">
            {t('storyArtisians.p14')}{" "}
            <a href="https://www.ptal.in" className="underline text-black">
              {t('storyArtisians.p15')}
            </a>
          </div>
          <div className="mb-2">
            <span className="font-bold">{t('storyArtisians.p16')}</span> {t('storyArtisians.p17')}
          </div>
          <div className="mb-2">
            <span className="font-bold">{t('storyArtisians.p18')}:</span> {t('storyArtisians.p19')}
          </div>
          <div className="italic font-semibold mt-4">
            {t('storyArtisians.p20')}
          </div>
        </div>

        <div className="bg-[#f5f2e9] py-8 px-4">
          <div className="flex items-center justify-center gap-8 text-black text-sm font-medium max-w-4xl mx-auto">
            <a
              href="https://www.facebook.com/sharer.php?u=https://ptal.in/blogs/ayurvedic-metals/th-se-thathera-revival-of-india-s-only-unesco-listed-craftform"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Facebook size={18} strokeWidth={1.5} />
              Share
            </a>
            <a
              href="https://x.com/intent/post?text=Th%20se%20Thathera%3A%20Revival%20of%20India%E2%80%99s%20only%20UNESCO%20listed%20Craftform&url=https%3A%2F%2Fptal.in%2Fblogs%2Fayurvedic-metals%2Fth-se-thathera-revival-of-india-s-only-unesco-listed-craftform"
              className="flex items-center gap-2"
              target="_blank"
            >
              <Twitter size={18} strokeWidth={1.5} />
              Tweet
            </a>
            <a
              href="https://in.pinterest.com/pin-builder/?description=Th+se+Thathera%3A+Revival+of+India%E2%80%99s+only+UNESCO+listed+Craftform&media=%2F%2Fptal.in%2Fcdn%2Fshop%2Farticles%2FUntitled_design_6_-min_1024x1024.png%3Fv%3D1706601438&method=button&url=https%3A%2F%2Fptal.in%2Fblogs%2Fayurvedic-metals%2Fth-se-thathera-revival-of-india-s-only-unesco-listed-craftform"
              className="flex items-center gap-2"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.13 2.53 7.65 6.13 9.1-.09-.77-.17-1.95.04-2.8.19-.82 1.22-5.2 1.22-5.2s-.31-.62-.31-1.54c0-1.45.84-2.54 1.89-2.54.89 0 1.31.67 1.31 1.48 0 .9-.57 2.25-.86 3.49-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.62 0-2.41-1.73-4.09-4.2-4.09-2.86 0-4.54 2.14-4.54 4.35 0 .87.34 1.8.77 2.3.08.1.09.2.07.3-.08.33-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.37-.57-2.23-2.36-2.23-3.8 0-3.1 2.25-5.94 6.48-5.94 3.4 0 6.04 2.42 6.04 5.65 0 3.38-2.13 6.1-5.08 6.1-1 0-1.94-.52-2.26-1.14l-.61 2.33c-.22.84-.82 1.89-1.22 2.53.91.28 1.88.43 2.88.43 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
              Pin it
            </a>
          </div>
        </div>
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      </div>
    </div>
  );
}
