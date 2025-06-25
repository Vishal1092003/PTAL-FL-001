
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, Search as SearchIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState({
    ptal: true, 
    metals: false, 
    utility: false, 
  });
  const navbarRef = useRef(null);
  const shopButtonRef = useRef(null);
  const navigate = useNavigate();

  // Custom Shopping Bag SVG component
  const ShoppingBagIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#B01C1A] transition-all duration-300 hover:scale-110"
    >
      <path
        d="M6 2L3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6L18 2H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Only update scroll state if not hovering to prevent conflicts
          if (!isHovered) {
            setIsScrolled(window.scrollY > 10);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered]);

  // Handle mouse events for the shop button (desktop only)
  const handleShopMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      // Only for desktop
      setIsHovered(true);
      setIsScrolled(window.scrollY > 10);
    }
  };

  const handleShopMouseLeave = (e) => {
    if (window.innerWidth >= 1024) {
      // Only for desktop
      const relatedTarget = e.relatedTarget;
      if (!navbarRef.current?.contains(relatedTarget)) {
        setIsHovered(false);
        setHoveredItem(null);
        setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
        }, 50);
      }
    }
  };

  // Handle mouse events for the entire navbar (desktop only)
  const handleNavbarMouseLeave = (e) => {
    if (window.innerWidth >= 1024) {
      // Only for desktop
      const relatedTarget = e.relatedTarget;
      if (
        !shopButtonRef.current?.contains(relatedTarget) &&
        !navbarRef.current?.contains(relatedTarget)
      ) {
        setIsHovered(false);
        setHoveredItem(null);
        setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
        }, 50);
      }
    }
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    if (window.innerWidth < 1024) {
      // Only for mobile/tablet
      setIsMobileMenuOpen(!isMobileMenuOpen);
      // Reset mobile sections when closing menu
      if (isMobileMenuOpen) {
        setMobileSections({
          ptal: true,
          metals: false,
          utility: false,
        });
      }
    } else {
      // Desktop behavior
      setIsHovered(!isHovered);
      if (!isHovered) {
        setIsScrolled(window.scrollY > 10);
      }
    }
  };

  // Handle link clicks to minimize navbar
  const handleLinkClick = () => {
    setIsHovered(false);
    setHoveredItem(null);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsScrolled(window.scrollY > 10);
    }, 50);
  };

  // Enhanced hover effect for menu items
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

 
  const handleNavigation=(e)=>{
      const token=localStorage.getItem("authtoken");
      if(!token){
        navigate("/login");
      }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile sections
  const toggleMobileSection = (section) => {
    setMobileSections((prev) => {
      const newState = {
        ptal: false,
        metals: false,
        utility: false,
      };
      newState[section] = !prev[section];
      return newState;
    });
  };

  // Toggle language and update document direction with smooth transition
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    
    // Update document direction for Arabic RTL support
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    // Add smooth transition class
    const navbar = navbarRef.current;
    if (navbar) {
      navbar.classList.add('navbar-transition');
      setTimeout(() => {
        navbar.classList.remove('navbar-transition');
      }, 300);
    }
  };

  // Check if current language is RTL
  const isRTL = i18n.language === 'ar';

  return (
    <div className={`relative ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Banner with enhanced styling */}
      <div className="h-10 sm:h-12 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 flex justify-center items-center text-xs sm:text-sm md:text-base text-[#B01C1A] font-semibold shadow-md px-4">
        <div className="animate-pulse text-center">
          {t('navbar.banner')}
        </div>
      </div>

      {/* Spacer to avoid overlap when navbar is fixed */}
      {isScrolled && !isHovered && !isMobileMenuOpen && (
        <div className="h-[70px] sm:h-[90px] w-full" />
      )}

      {/* Navbar with enhanced styling and RTL support */}
      <div
        ref={navbarRef}
        className={`transition-all duration-500 ease-in-out px-3 sm:px-6 lg:px-10 text-[#B01C1A] overflow-visible z-50 w-full backdrop-blur-sm navbar-transition
          ${
            (isHovered && window.innerWidth >= 1024) || isMobileMenuOpen
              ? "h-auto min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-[#fdf8f0] via-[#fef9f1] to-[#fcf6ee] shadow-2xl border-b-4 border-[#B01C1A]/20"
              : "h-[70px] sm:h-[90px]"
          }
          ${
            isScrolled
              ? "fixed top-0 bg-[#fdf8f0]/95 shadow-lg backdrop-blur-md"
              : ""
          }
        `}
        onMouseLeave={handleNavbarMouseLeave}
        style={{
          willChange: isHovered || isMobileMenuOpen ? "height" : "auto",
        }}
      >
        {/* Top row with RTL layout support */}
        <div className={`flex justify-between items-center h-[70px] sm:h-[90px] gap-2 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Shop button and hamburger - positioned based on language */}
          <div
            ref={shopButtonRef}
            className={`flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0 group ${
              isRTL ? 'order-3' : 'order-1'
            }`}
            onMouseEnter={handleShopMouseEnter}
            onMouseLeave={handleShopMouseLeave}
            onClick={handleMobileMenuToggle}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl transition-all duration-300 group-hover:rotate-180 group-hover:scale-110">
              {(isHovered && window.innerWidth >= 1024) || isMobileMenuOpen
                ? "✕"
                : "☰"}
            </span>
            <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-wider group-hover:text-[#8B1416] transition-all duration-300 group-hover:scale-105">
              {t('navbar.shop')}
            </span>
          </div>

          {/* Center: Logo - always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 px-2 sm:px-4 order-2">
            <Link to="/home" onClick={handleLinkClick}>
              <img
                src="/newestLogo.png"
                alt={t('navbar.logo_alt')}
                className="h-16 sm:h-18 lg:h-20 xl:h-22 max-w-full object-contain transition-all duration-300 hover:scale-110 rounded-4xl"
              />
            </Link>
          </div>

          {/* User icons - positioned based on language */}
          <div className={`flex gap-3 sm:gap-4 lg:gap-6 xl:gap-8 items-center flex-shrink-0 ${
            isRTL ? 'order-1 mr-auto' : 'order-3 ml-auto'
          }`}>
            <div className="relative">
              <button 
                onClick={toggleLanguage}
                className="hidden md:block px-3 py-1.5 text-sm font-medium rounded-lg border border-[#B01C1A]/20 bg-white/90 text-[#B01C1A] hover:bg-[#B01C1A]/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {i18n.language === "en" ? "العربية" : "English"}
              </button>
              <button
                onClick={toggleLanguage} 
                className="md:hidden px-2 py-1 text-xs font-medium rounded-lg border border-[#B01C1A]/20 bg-white/90 text-[#B01C1A] hover:bg-[#B01C1A]/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {i18n.language === "en" ? "ع" : "En"}
              </button>
            </div>
            
            <UserCircle
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-[#8B1416] transition-all duration-300 hover:scale-125 hover:rotate-12"
              onClick={() => handleNavigation("/signin")}
            />
            <SearchIcon
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 cursor-pointer hover:text-[#8B1416] transition-all duration-300 hover:scale-125 hover:rotate-12"
              onClick={() => navigate("/search")}
            />
            <div
              className="cursor-pointer hover:text-[#8B1416] transition-all duration-300 hover:scale-125 hover:rotate-12"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBagIcon />
            </div>
          </div>
        </div>

        {/* Enhanced Mega Menu with RTL support */}
        {((isHovered && window.innerWidth >= 1024) || isMobileMenuOpen) && (
          <div
            className={`pt-4 sm:pt-6 lg:pt-8 px-2 sm:px-4 lg:px-8 text-[#B01C1A] text-sm pb-4 sm:pb-6 lg:pb-8 animate-in fade-in duration-500 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            onMouseEnter={() => window.innerWidth >= 1024 && setIsHovered(true)}
          >
            {/* Mobile/Tablet Layout - Compact spacing for 850px height */}
            <div className="block lg:hidden space-y-2 sm:space-y-3">
              {/* Column 1 - P-TAL */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <h2
                  className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent cursor-pointer"
                  style={{ fontFamily: "Fondamento, cursive" }}
                  onClick={() => toggleMobileSection("ptal")}
                >
                  {t('navbar.sections.sanaaya')}
                </h2>
                {mobileSections.ptal && (
                  <ul className="space-y-0.5 sm:space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-1.5">
                    {[
                      { to: "/home", text: t('navbar.links.home') },
                      { to: "/NavbarPtal/AboutUs", text: t('navbar.links.about_us') },
                      { to: "/NavbarPtal/StoryOfOurArtisans", text: t('navbar.links.story_artisans') },
                      { to: "/NavbarPtal/KalaiKit", text: t('navbar.links.kalai_kit') },
                      { to: "/NavbarPtal/Faqs", text: t('navbar.links.faqs') },
                      { to: "/NavbarPtal/ContactUs", text: t('navbar.links.contact_us') },
                      { to: "/NavbarPtal/Blogs", text: t('navbar.links.blogs') },
                      { to: "/NavbarPtal/RetailStores", text: t('navbar.links.retail_stores') },
                    ].map((item, index) => (
                      <li key={index} className="relative">
                        <Link
                          to={item.to}
                          className="block py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-lg text-sm sm:text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                          onClick={handleLinkClick}
                          onMouseEnter={() => handleItemHover(`ptal-${index}`)}
                          onMouseLeave={handleItemLeave}
                        >
                          <span
                            className={`transition-all duration-300 ${
                              hoveredItem === `ptal-${index}`
                                ? isRTL ? "translate-x-[-0.25rem] sm:translate-x-[-0.375rem]" : "translate-x-1 sm:translate-x-1.5"
                                : ""
                            }`}
                          >
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Column 2 - Shop By Metals */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <h2
                  className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent cursor-pointer"
                  style={{ fontFamily: "Fondamento, cursive" }}
                  onClick={() => toggleMobileSection("metals")}
                >
                  {t('navbar.sections.shop_by_metals')}
                </h2>
                {mobileSections.metals && (
                  <ul className="space-y-0.5 sm:space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-1.5">
                    {[
                      { to: "/ShopByMetals/All", text: t('navbar.links.all') },
                      { to: "/ShopByMetals/Brass", text: t('navbar.links.brass') },
                      { to: "/ShopByMetals/Copper", text: t('navbar.links.copper') },
                      { to: "/ShopByMetals/Kansa", text: t('navbar.links.kansa') },
                      { to: "/ShopByMetals/PopularProducts", text: t('navbar.links.popular_products') },
                    ].map((item, index) => (
                      <li key={index} className="relative">
                        <Link
                          to={item.to}
                          className="block py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-lg text-sm sm:text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                          onClick={handleLinkClick}
                          onMouseEnter={() => handleItemHover(`metals-${index}`)}
                          onMouseLeave={handleItemLeave}
                        >
                          <span
                            className={`transition-all duration-300 ${
                              hoveredItem === `metals-${index}`
                                ? isRTL ? "translate-x-[-0.25rem] sm:translate-x-[-0.375rem]" : "translate-x-1 sm:translate-x-1.5"
                                : ""
                            }`}
                          >
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Column 3 - Shop By Utility */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <h2
                  className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent cursor-pointer"
                  style={{ fontFamily: "Fondamento, cursive" }}
                  onClick={() => toggleMobileSection("utility")}
                >
                  {t('navbar.sections.shop_by_utility')}
                </h2>
                {mobileSections.utility && (
                  <ul className="space-y-0.5 sm:space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-1.5">
                    {[
                      { to: "/ShopByUtility/AsSeenOnTV", text: t('navbar.links.as_seen_on_tv') },
                      { to: "/ShopByUtility/CookwareAndKitchenware", text: t('navbar.links.cookware_kitchenware') },
                      { to: "/ShopByUtility/Drinkware", text: t('navbar.links.drinkware') },
                      { to: "/ShopByUtility/SetsAndCombos", text: t('navbar.links.sets_combos') },
                      { to: "/ShopByUtility/Gifting", text: t('navbar.links.gifting') },
                    ].map((item, index) => (
                      <li key={index} className="relative">
                        <Link
                          to={item.to}
                          className="block py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-lg text-sm sm:text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                          onClick={handleLinkClick}
                          onMouseEnter={() => handleItemHover(`utility-${index}`)}
                          onMouseLeave={handleItemLeave}
                        >
                          <span
                            className={`transition-all duration-300 ${
                              hoveredItem === `utility-${index}`
                                ? isRTL ? "translate-x-[-0.25rem] sm:translate-x-[-0.375rem]" : "translate-x-1 sm:translate-x-1.5"
                                : ""
                            }`}
                          >
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Enhanced Gift Image for mobile - Horizontal layout centered */}
              <div className="flex justify-center">
                <div className={`flex items-center space-x-3 transform transition-all duration-300 hover:scale-105 ${
                  isRTL ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {/* Left - Compact Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg flex-shrink-0">
                    <img
                      src="/giftUtensils.png"
                      alt={t('navbar.gift.alt')}
                      className="w-16 h-12 sm:w-20 sm:h-16 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Right - Text and Button */}
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <p className="font-bold text-sm sm:text-base bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent mb-1.5">
                      {t('navbar.gift.title')}
                    </p>

                    <a
                      href="#"
                      className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      {t('navbar.gift.explore_more')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - Enhanced side by side columns with RTL support */}
            <div className={`hidden lg:flex justify-between gap-8 xl:gap-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Column 1 - Enhanced */}
              <div className="transform transition-all duration-300 hover:scale-105 flex-1">
                <h2
                  className="mb-4 text-2xl font-bold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent"
                  style={{ fontFamily: "Fondamento, cursive" }}
                >
                  {t('navbar.sections.sanaaya')}
                </h2>
                <ul className="space-y-2">
                  {[
                    { to: "/home", text: t('navbar.links.home') },
                    { to: "/NavbarPtal/AboutUs", text: t('navbar.links.about_us') },
                    { to: "/NavbarPtal/StoryOfOurArtisans", text: t('navbar.links.story_artisans') },
                    { to: "/NavbarPtal/KalaiKit", text: t('navbar.links.kalai_kit') },
                    { to: "/NavbarPtal/Faqs", text: t('navbar.links.faqs') },
                    { to: "/NavbarPtal/ContactUs", text: t('navbar.links.contact_us') },
                    { to: "/NavbarPtal/Blogs", text: t('navbar.links.blogs') },
                    { to: "/NavbarPtal/RetailStores", text: t('navbar.links.retail_stores') },
                  ].map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        to={item.to}
                        className="block py-2 px-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                        onClick={handleLinkClick}
                        onMouseEnter={() => handleItemHover(`desktop-ptal-${index}`)}
                        onMouseLeave={handleItemLeave}
                      >
                        <span
                          className={`transition-all duration-300 ${
                            hoveredItem === `desktop-ptal-${index}`
                              ? isRTL ? "translate-x-[-0.5rem]" : "translate-x-2"
                              : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 - Enhanced */}
              <div className="transform transition-all duration-300 hover:scale-105 flex-1">
                <h2
                  className="mb-4 text-2xl font-bold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent"
                  style={{ fontFamily: "Fondamento, cursive" }}
                >
                  {t('navbar.sections.shop_by_metals')}
                </h2>
                <ul className="space-y-2">
                  {[
                    { to: "/ShopByMetals/All", text: t('navbar.links.all') },
                    { to: "/ShopByMetals/Brass", text: t('navbar.links.brass') },
                    { to: "/ShopByMetals/Copper", text: t('navbar.links.copper') },
                    { to: "/ShopByMetals/Kansa", text: t('navbar.links.kansa') },
                    { to: "/ShopByMetals/PopularProducts", text: t('navbar.links.popular_products') },
                  ].map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        to={item.to}
                        className="block py-2 px-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                        onClick={handleLinkClick}
                        onMouseEnter={() => handleItemHover(`desktop-metals-${index}`)}
                        onMouseLeave={handleItemLeave}
                      >
                        <span
                          className={`transition-all duration-300 ${
                            hoveredItem === `desktop-metals-${index}`
                              ? isRTL ? "translate-x-[-0.5rem]" : "translate-x-2"
                              : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Enhanced */}
              <div className="transform transition-all duration-300 hover:scale-105 flex-1">
                <h2
                  className="mb-4 text-2xl font-bold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent"
                  style={{ fontFamily: "Fondamento, cursive" }}
                >
                  {t('navbar.sections.shop_by_utility')}
                </h2>
                <ul className="space-y-2">
                  {[
                    { to: "/ShopByUtility/AsSeenOnTV", text: t('navbar.links.as_seen_on_tv') },
                    { to: "/ShopByUtility/CookwareAndKitchenware", text: t('navbar.links.cookware_kitchenware') },
                    { to: "/ShopByUtility/Drinkware", text: t('navbar.links.drinkware') },
                    { to: "/ShopByUtility/SetsAndCombos", text: t('navbar.links.sets_combos') },
                    { to: "/ShopByUtility/Gifting", text: t('navbar.links.gifting') },
                  ].map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        to={item.to}
                        className="block py-2 px-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B01C1A]/10 hover:to-[#8B1416]/10 hover:text-[#8B1416] hover:scale-105 hover:shadow-md transform"
                        onClick={handleLinkClick}
                        onMouseEnter={() => handleItemHover(`desktop-utility-${index}`)}
                        onMouseLeave={handleItemLeave}
                      >
                        <span
                          className={`transition-all duration-300 ${
                            hoveredItem === `desktop-utility-${index}`
                              ? isRTL ? "translate-x-[-0.5rem]" : "translate-x-2"
                              : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Image - Desktop version */}
              <div className="transform transition-all duration-300 hover:scale-105 flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="/giftUtensils.png"
                    alt={t('navbar.gift.alt')}
                    className="h-56 w-72 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <p className="mt-3 font-bold text-lg bg-gradient-to-r from-[#B01C1A] to-[#8B1416] bg-clip-text text-transparent">
                  {t('navbar.gift.title')}
                </p>
                <button className="mt-2 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {t('navbar.gift.explore_more')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced WhatsApp Logo with RTL positioning */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 sm:bottom-6 z-50 transition-all duration-300 hover:scale-125 hover:shadow-2xl ${
          isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
        }`}
        aria-label={t('navbar.whatsapp_aria')}
      >
        <div className="relative">
          <img
            src="/Aboutsectionimages/whatsAppLogo.png"
            alt={t('navbar.whatsapp_alt')}
            className="w-12 h-12 sm:w-16 sm:h-16 animate-pulse"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
        </div>
      </a>

      {/* Added custom CSS for smooth transitions between icons jab language kre */}
      <style jsx>{`
        .navbar-transition {
          transition: all 0.3s ease-in-out;
        }
        
        .rtl {
          direction: rtl;
        }
        
        .ltr {
          direction: ltr;
        }
        
        [dir="rtl"] .space-x-3 > * + * {
          margin-left: 0;
          margin-right: 0.75rem;
        }
        
        [dir="rtl"] .space-x-reverse > * + * {
          margin-left: 0.75rem;
          margin-right: 0;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
