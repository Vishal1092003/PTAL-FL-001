

import CookwareAndKitchenwareGrid from "./CookwareAndKitchenwareGrid";

export default function CookwareAndKitchenware() {
  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <img
          src="/cookware&kitchnenware/image1.webp"
          alt="cookware Banner"
          className="w-full h-48 md:h-64 lg:h-96 object-cover"
        />
      </div>

      {/* Responsive Videos */}
      <div className="flex flex-wrap justify-center w-full gap-4 p-4 bg-gray-100 rounded-xl">
        <video
          className="w-full sm:w-80 md:w-96 h-48 md:h-64 lg:h-96 rounded-lg aspect-video object-cover"
          controls
          src="/cookware&kitchnenware/video1.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="w-full sm:w-80 md:w-96 h-48 md:h-64 lg:h-96 rounded-lg aspect-video object-cover"
          controls
          src="/cookware&kitchnenware/video2.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Heading */}
      <div className="bg-[#f9f4ec] py-8 md:py-12">
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
        <h1
          className="text-center text-2xl md:text-3xl lg:text-4xl text-[#8b0000]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          Cookware And Kitchenware
        </h1>
      </div>

      {/* Product Grid */}
      <CookwareAndKitchenwareGrid />

      {/* Benefits */}
      <div className="bg-[#f9f4ec] px-4 sm:px-8 md:px-20 py-10 md:py-16 text-[#1e1e1e]">
        {/* English Section */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            Brass Cookware and Kitchenware
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            The old school brass kitchenware are not so old any more! With P-TAL, brass cookware has been redesigned & transformed for giving you maximum health benefits. Brass kitchenware helps in increasing immunity & is always good for treating asthma or increasing blood flow. Brass has inherent antimicrobial properties that can help in reducing the growth of bacteria on its surface. This property may contribute to better hygiene in the kitchen. If planning for weight loss or seeking glowing skin; brass kitchenware are a must. The ancient properties of brass have enormous potential for a healthy future. Being a good conductor of heat, cooking with brass utensils is quick and easy. Explore these with P-TAL now. 
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <h2
            className="text-xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            Pure and Handcrafted Brass Cookware from P-TAL 
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            While being an integral part of Indian kitchens, brass cookware still stays as the most appealing one. However, finding pure and authentic brass cookware online can always be a problem. When buying authentic brass cookware online, it's essential to ensure that you are purchasing high quality products. P-TAL along with their ‘Thathera’ craftsmen is fulfilling the cause of producing 100% authentic brass kadhai, tawa, ladles, masala boxes and so much more. Some research and caution while buying brass cookware is always a great thing. Brass cookware can come across as expensive but remember the investment for health is always welcomed!
          </p>
        </div>
      </div>
    </>
  );
}