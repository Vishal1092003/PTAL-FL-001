import SetsAndCombosGrid from "./SetsAndCombosGrid";

export default function SetsAndCombos() {
  return (
    <>
      <div className="w-full">
        <img
          src="/AsSeenOnTv/Shark_Tank_Banner_02.webp" // Replace with your image path
          alt="As Seen On TV Banner"
          className="w-full h-64 md:h-96 object-cover"
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
          Sets And Combos
        </h1>
      </div>
      {/* ProductGrid */}
      <SetsAndCombosGrid />
      
    </>
  );
}