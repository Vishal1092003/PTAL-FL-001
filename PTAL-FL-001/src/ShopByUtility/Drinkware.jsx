import DrinkwareGrid from "./DrinkwareGrid";

export default function CookwareAndKitchenware() {
  return (
    <>
      {/* Heading */}

      <div className="bg-[#f9f4ec] py-12">
        {/* Top Line */}
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

        {/* Heading */}
        <h1
          className="text-center text-5xl md:text-4xl text-[#8b0000]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          Copper For Water 
        </h1>
      </div>
      {/* ProductGrid */}
      <DrinkwareGrid />

      {/* Benefits */}

      <div className="bg-[#f9f4ec] px-6 md:px-20 py-16 text-[#1e1e1e]">
        {/* English Section */}
        <div className="mb-16">
          <h2
            className="text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            Benefits of Copper Utensils
          </h2>
          <p className="text-lg leading-relaxed">
            Did you know that the metals we use for cooking, drinking, eating have enormous potential to restore and maintain our health? It is no wonder that ancient texts of India like Ayurveda specifies the immense qualities of copper or Tamba utensils. Drinking water stored in copper utensils can in fact help in balancing the three doshas of body: kapha, pitta and Vata. There is an entire pandora box of benefits for copper kitchen utensils. There aid in weight loss is also suggested by dieticians as it improves digestion. This is a natural way of slowing down ageing and great skin. It is one way of dealing with the increasing hypertension, cholesterol levels, arthritis, and also fighting infections. There definitely is no looking back when it comes to benefits of these beautiful Tamba utensils. 
          </p>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            Pure Copper Utensils Online at Reasonable Price in India
          </h2>
          <p className="text-lg leading-relaxed">
            From food products to what we wear; synthetic and mixed options are easily available across web portals and in shops. It is necessary to ensure that what you are paying is actually worth it! There is a growing concern of buying pure copper utensils. Pure copper utensils are not very cheap, but remember that you are investing in your health. For instance a handcrafted copper kadhai could be somewhere around Rs. 5000 while a simple tumbler could be anywhere around Rs. 1500 depending on the craftsmanship. It is essential to buy authentic and pure copper vessels only.
          </p>
        </div>

        <div className="mb-16">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            Explore a Wide range of Copper Vessels by P-TAL
          </h2>
          <p className="text-lg leading-relaxed">
            Traditional wisdom & Modern beauty; the wide range of copper vessels here definitely fit into both these criterion. We understand the health benefits that copper kitchen utensils bring with them and at the same time, today’s generation is all about style and coolness. The designing of pure copper vessels here is done keeping these parameters in mind. From kadai to copper water dispensers, to frypan, to puja thali and diyas; the list is an extensive one curated especially for you by P-tal.
          </p>
        </div>
        
      </div>
    </>
  );
}