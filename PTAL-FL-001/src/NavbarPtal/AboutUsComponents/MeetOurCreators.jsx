import { Instagram, Linkedin, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
export default function MeetOurCreators() {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const { t, i18n } = useTranslation();

  const creators = [
    {
      id: 1,
      name: t('about_us.creator_section.kirtiGoel.name'),
      title: t('about_us.creator_section.kirtiGoel.title'),
      image: "/Aboutsectionimages/kirtiGoel.webp",
      shortDescription:
        t('about_us.creator_section.kirtiGoel.shortDescription'),
      fullDescription:
        t('about_us.creator_section.kirtiGoel.fullDescription'),
      detailedBio:
        t('about_us.creator_section.kirtiGoel.detailedBio'),
      award:
        t('about_us.creator_section.kirtiGoel.award'),
      linkedin: "#",
      instagram: "#",
    },
    {
      id: 2,
      name: t('about_us.creator_section.adityaAgrawal.name'),
      title: t('about_us.creator_section.adityaAgrawal.title'),

      image: "/Aboutsectionimages/adityaAgrawal.webp",

      shortDescription:
        t('about_us.creator_section.adityaAgrawal.shortDescription'),
      fullDescription:
        t('about_us.creator_section.adityaAgrawal.fullDescription'),
      detailedBio:
        t('about_us.creator_section.adityaAgrawal.detailedBio'),
      award:
        t('about_us.creator_section.adityaAgrawal.award'),
      linkedin: "#",
      instagram: "#",
    },
    {
      id: 3,
      name: t('about_us.creator_section.gauravGarg.name'),
      title: t('about_us.creator_section.gauravGarg.title'),
      image: "/Aboutsectionimages/gauravGarg.png",
      shortDescription:
        t('about_us.creator_section.gauravGarg.shortDescription'),
      fullDescription:
        t('about_us.creator_section.gauravGarg.fullDescription'),
      detailedBio:
        t('about_us.creator_section.gauravGarg.detailedBio'),
      award:
        t('about_us.creator_section.gauravGarg.award'),
      linkedin: "#",
      instagram: "#",
    },
    
  ];

  const openModal = (creator) => {
    setSelectedCreator(creator);
    document.body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedCreator(null);
    document.body.style.overflow = ""; // Restore body scrolling
  };

  return (
    <div className="bg-[#f9f4ec] py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-l uppercase tracking-widest text-black mb-4">
            {t('about_us.creator_section.subtitle')}
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-[#8b0000]"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            {t('about_us.creator_section.title')}
          </h1>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white flex flex-col items-center text-center p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Circular Profile Image */}
              <div className="w-70 h-70 mb-6 relative">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover rounded-full border-4 border-[#f8f5ef]"
                  loading="lazy"
                />
              </div>

              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold uppercase text-black mb-1">
                  {creator.name}
                </h3>
                <p className="text-gray-600 font-medium">{creator.title}</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-3 mb-4">
                <a
                  href={creator.linkedin}
                  aria-label={`${creator.name}'s LinkedIn`}
                  className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005582] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href={creator.instagram}
                  aria-label={`${creator.name}'s Instagram`}
                  className="w-8 h-8 bg-[#E4405F] rounded-full flex items-center justify-center hover:bg-[#C13584] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {creator.shortDescription}
              </p>

              {/* Read More Button */}
              <button
                onClick={() => openModal(creator)}
                className="mt-auto text-[#8b0000] hover:text-[#a0141c] font-medium text-sm underline transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCreator && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold uppercase text-black">
                  {selectedCreator.name} ({selectedCreator.title})
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-[#8b0000] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 flex flex-col md:flex-row gap-8 h-[calc(90vh-80px)]">
                {/* Left Side - Image */}
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="w-48 h-48 mb-6">
                    <img
                      src={selectedCreator.image}
                      alt={selectedCreator.name}
                      className="w-full h-full object-cover rounded-full border-4 border-[#f8f5ef]"
                    />
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedCreator.linkedin}
                      aria-label={`${selectedCreator.name}'s LinkedIn`}
                      className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005582] transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={selectedCreator.instagram}
                      aria-label={`${selectedCreator.name}'s Instagram`}
                      className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center hover:bg-[#C13584] transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 flex flex-col">
                  <div className="mb-4">
                    <p className="text-gray-800 font-medium mb-4">
                      {selectedCreator.fullDescription}
                    </p>
                    {selectedCreator.award && (
                      <p className="text-[#8b0000] font-medium mb-4">
                        {selectedCreator.award}
                      </p>
                    )}
                  </div>

                  {/* Scrollable Bio Section */}
                  <div className="flex-grow overflow-y-auto pr-2">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedCreator.detailedBio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
