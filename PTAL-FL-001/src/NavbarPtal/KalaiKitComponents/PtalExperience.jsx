import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
export default function PtalExperience() {
  const { t, i18n } = useTranslation();
  const videoItems = [
    {
      id: 1,
      src: "https://ptal.com/cdn/shop/files/quinn_owt9niruye2hif84b5xfj6t3.mp4#t=0.1",
      alt: t("ptalExperience.video1.alt"),
      overlayText: t("ptalExperience.video1.overlay"),
    },
    {
      id: 2,
      src: "https://ptal.com/cdn/shop/files/quinn_qv5v50axyt9b9hj7q70ms3i7.mp4#t=0.1",
      alt: t("ptalExperience.video2.alt"),
      overlayText: t("ptalExperience.video2.overlay"),
    },
    {
      id: 3,
      src: "https://ptal.com/cdn/shop/files/quinn_dg5o6nmfne0k1gt192xgf4ro.mp4#t=0.1",
      alt: t("ptalExperience.video3.alt"),
      overlayText: t("ptalExperience.video3.overlay"),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const openModal = (index) => {
    setCurrentVideoIndex(index);
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoItems.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#f9f4ec] py-16 px-4 md:px-12 text-center relative">
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      {/* Heading */}
      <h2
        className="text-4xl md:text-4xl  text-red-700  mb-2"
        style={{ fontFamily: "Fondamento, cursive" }}
      >
        {t("ptalExperience.title")}
      </h2>
      <p className="text-sm md:text-base text-gray-800 mb-10">
        {t("ptalExperience.subtitle")}
      </p>

      {/* Autoplaying Videos */}
      <div className="flex flex-wrap justify-center gap-6">
        {videoItems.map((item, index) => (
          <div
            key={item.id}
            className="w-full sm:w-64 md:w-72 rounded-lg shadow-md overflow-hidden cursor-pointer relative group"
            onClick={() => openModal(index)}
          >
            <video
              src={item.src}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto object-cover"
              aria-label={item.alt}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#8b0000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-medium text-lg">
                {item.overlayText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl z-50"
          >
            &times;
          </button>

          <div className="relative w-full max-w-4xl">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              &#10094;
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
              &#10095;
            </button>

            {/* Video Player */}
            <div className="relative" onClick={togglePlayPause}>
              <video
                ref={videoRef}
                src={videoItems[currentVideoIndex].src}
                autoPlay={isPlaying}
                loop
                playsInline
                muted={isMuted}
                className="w-full h-auto max-h-[80vh]"
              />

              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Video Title */}
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-medium">
                {videoItems[currentVideoIndex].overlayText}
              </p>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={togglePlayPause}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleMute}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      clipRule="evenodd"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
