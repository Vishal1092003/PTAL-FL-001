import AsSeenOnTVGrid from "./AsSeenOnTVGrid";

export default function AsSeenOnTV() {
  return (
    <>
      {/* Full-width banner image */}
      <div className="w-full">
        <img
          src="/AsSeenOnTv/Shark_Tank_Banner_02.webp"
          alt="As Seen On TV Banner"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Responsive videos */}
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-xl w-full">
        <video
          className="w-full sm:w-64 h-96 rounded-lg aspect-video object-cover"
          controls
          src="/AsSeenOnTv/video1.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="w-full sm:w-64 rounded-lg aspect-video object-cover"
          controls
          src="/AsSeenOnTv/video2.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Heading */}
      <div className="bg-[#f9f4ec] py-12">
        {/* Top Line */}
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

        {/* Heading */}
        <h1
          className="text-center text-3xl md:text-4xl text-[#8b0000]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          As seen on Tv
        </h1>
      </div>

      {/* Product grid or other content */}
      <AsSeenOnTVGrid />
    </>
  );
}