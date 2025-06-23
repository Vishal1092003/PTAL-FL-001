import React from 'react';

const RetailStores = () => {
  return (
    <div className="bg-[#fdf8f0] p-8 font-serif text-[#3e1009]">
      {/* Store Locations */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* New Delhi */}
        <div className="text-center">
          <a href="https://www.google.com/search?kgmid=/g/11t6_590xw&hl=en-IN&q=PTAL-+Copper,+Kansa+and+Brass+Utensils+shop+in+Delhi&kgs=c415837c0fb7b5a1&shndl=17&shem=losc&source=sh/x/kp/osrp/m5/5"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src="/imagesForRetailStores/image1.webp"
                alt="New Delhi Store"
                className="w-full rounded-md mb-4"
            />
          </a>
          <h2 className="font-base text-3xl">New Delhi</h2>
          <br />
          <p className="text-sm mt-1">
            M-5, First Floor, M Block Market, Greater Kailash - 1, New Delhi - 110048
          </p>
          <br />
          <a
            href="#"
            className="text-xs font-semibold text-black mt-1 inline-block underline-none"
          >
            GET DIRECTIONS
          </a>
        </div>

        {/* Panchkula */}
        <div className="text-center">
            <a href="https://www.google.com/maps/place/30%C2%B036'21.9%22N+76%C2%B057'08.4%22E/@30.6060833,76.9497584,648m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.6060833!4d76.9523333?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            target='_blank'
            rel="noopener noreferrer">
                <img
                    src="/imagesForRetailStores/image2.webp"
                    alt="Panchkula Store"
                    className="w-full rounded-md mb-4"
                />
            </a>
          <h2 className="font-base text-3xl">Panchkula</h2>
          <br />
          <p className="text-sm mt-1">
            Plot No. 249, Industrial Area HSIIDC Alipur, Panchkula, Haryana - 134118
          </p>
          <br />
          <a
            href="#"
            className="text-xs font-semibold text-black mt-1 inline-block underline-none"
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="text-center mb-6">
        <h2 className="text-5xl font-base text-red-700">
          Contact Us For Franchisee Enquiries
        </h2>
      </div>

      <form className="grid gap-4 max-w-4xl mx-auto text-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 p-2 w-full"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="border border-gray-300 p-2 w-full"
        />
      </form>
    </div>
  );
};

export default RetailStores;
