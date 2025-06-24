import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/hp";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import AboutUs from "./NavbarPtal/AboutUs";
import StoryOfOurArtists from "./NavbarPtal/StoryOfOurArtists";
import KalaiKit from "./NavbarPtal/KalaiKit";

import Faqs from "./NavbarPtal/Faqs";
import ContactUs from "./NavbarPtal/ContactUs";
import Blogs from "./NavbarPtal/Blogs";
//blogs component routing
import Component1 from "./NavbarPtal/BlogsComponents/component1";
import Component2 from "./NavbarPtal/BlogsComponents/component2";
import Component3 from "./NavbarPtal/BlogsComponents/component3";
import Component4 from "./NavbarPtal/BlogsComponents/component4";
import Component5 from "./NavbarPtal/BlogsComponents/component5";
import Component6 from "./NavbarPtal/BlogsComponents/component6";
import Component7 from "./NavbarPtal/BlogsComponents/component7";
import Component8 from "./NavbarPtal/BlogsComponents/component8";
import Component9 from "./NavbarPtal/BlogsComponents/component9";
import Component10 from "./NavbarPtal/BlogsComponents/component10";
import Component11 from "./NavbarPtal/BlogsComponents/component11";
import Component12 from "./NavbarPtal/BlogsComponents/component12";
import Component13 from "./NavbarPtal/BlogsComponents/component13";
import Component14 from "./NavbarPtal/BlogsComponents/component14";

import RetailStores from "./NavbarPtal/RetailStores";

import All from "./ShopByMetals/All";
import Brass from "./ShopByMetals/Brass";
import Copper from "./ShopByMetals/Copper";
import Kansa from "./ShopByMetals/Kansa";
import PopularProducts from "./ShopByMetals/PopularProducts";
import ProductPage from "./ShopByMetals/ProductPage";

import Cart from "./Navbar/Cart";

import Gifting from "./";
import Drinkware from "./ShopByUtility/Drinkware";

import AsSeenOnTV from "./ShopByUtility/AsSeenOnTV";
import CookwareAndKitchenware from "./ShopByUtility/CookwareAndKitchenware";
import SetsAndCombos from "./ShopByUtility/SetsAndCombos";

import SignUp from "./Navbar/SignUp"
import SignIn from "./Navbar/SignIn";
import Search from "./Navbar/Search";
import ScrollToTop from "./ScrollToTop";
import SetPassword from "./Navbar/SetPassword"

//footerComponents
import BecomeAnAffiliate from "./footerComponents/BecomeAnAffiliate";
import CorporateGifting from "./footerComponents/CorporateGifting";
import PrivacyPolicy from "./footerComponents/PrivacyPolicy";
import ReturnsRefunds from "./footerComponents/ReturnsRefunds";
import Shipping from "./footerComponents/Shipping";
import TermsConditions from "./footerComponents/TermsConditions";
import UseAndCare from "./footerComponents/UseAndCare";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/NavbarPtal/AboutUs" element={<AboutUs />} />

        <Route
          path="/NavbarPtal/StoryOfOurArtisans"
          element={<StoryOfOurArtists />}
        />
        <Route path="/NavbarPtal/KalaiKit" element={<KalaiKit />} />

        <Route path="/NavbarPtal/Faqs" element={<Faqs />} />

        <Route path="/NavbarPtal/ContactUs" element={<ContactUs />} />

        {/* BlogsRoutes */}
        <Route path="/NavbarPtal/Blogs" element={<Blogs />} />
        <Route
          path="/NavbarPtal/BlogsComponents/component1"
          element={<Component1 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component2"
          element={<Component2 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component3"
          element={<Component3 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component4"
          element={<Component4 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component5"
          element={<Component5 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component6"
          element={<Component6 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component7"
          element={<Component7 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component8"
          element={<Component8 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component9"
          element={<Component9 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component10"
          element={<Component10 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component11"
          element={<Component11 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component12"
          element={<Component12 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component13"
          element={<Component13 />}
        />
        <Route
          path="/NavbarPtal/BlogsComponents/component14"
          element={<Component14 />}
        />

        <Route path="/NavbarPtal/RetailStores" element={<RetailStores />} />

        <Route path="/ShopByMetals/All" element={<All />} />
        <Route path="/ShopByMetals/Brass" element={<Brass />} />
        <Route path="/ShopByMetals/Copper" element={<Copper />} />
        <Route path="/ShopByMetals/Kansa" element={<Kansa />} />
        <Route path="/ShopByMetals/product:id" element={<ProductPage />} />

        <Route
          path="/ShopByMetals/PopularProducts"
          element={<PopularProducts />}
        />

        <Route
          path="/ShopByMetals/PopularProducts"
          element={<PopularProducts />}
        />

        {/* Add routes for ShopByUtility components */}

        <Route path="/ShopByUtility/Gifting" element={<Gifting />} />
        <Route path="/ShopByUtility/Drinkware" element={<Drinkware />} />

        <Route path="/ShopByUtility/AsSeenOnTV" element={<AsSeenOnTV />} />
        <Route
          path="/ShopByUtility/CookwareAndKitchenware"
          element={<CookwareAndKitchenware />}
        />

        <Route
          path="/ShopByUtility/SetsAndCombos"
          element={<SetsAndCombos />}
        />

        <Route
          path="/ShopByUtility/SetsAndCombos"
          element={<SetsAndCombos />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/setpassword" element={<SetPassword/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/search" element={<Search />} />

        <Route path="/Navbar/cart" element={<Cart />} />

        {/*footerRoutes*/}
       
        <Route
          path="/footerComponents/CorporateGifting"
          element={<CorporateGifting />}
        />
        <Route
          path="/footerComponents/BecomeAnAffiliate"
          element={<BecomeAnAffiliate />}
        />
        <Route
          path="/footerComponents/PrivacyPolicy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/footerComponents/ReturnsRefunds"
          element={<ReturnsRefunds />}
        />
        <Route path="/footerComponents/Shipping" element={<Shipping />} />
        <Route
          path="/footerComponents/TermsConditions"
          element={<TermsConditions />}
        />
        <Route path="/footerComponents/UseAndCare" element={<UseAndCare />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
