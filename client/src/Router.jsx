import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "./pages/ProductDets/ProductDetails";
import Homepage from "./pages/Home/Homepage";
import AllCards from "./components/AllCards/AllCards";
import Cart from "./components/Cart/Cart";
import LoginForm from "./components/LoginForm/LoginForm";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivacyPolicy from "./pages/privecy/PrivacyPolicyPage";
import TermsAndConditionsComponent from "./pages/termsAndConditions/TermsAndConditions";
import ShoppingInfoPageComponent from "./pages/shoppingInfo/ShoppingInfo";
import ReturnAndExchangePageComponent from "./pages/returnExchange/returnExchange";

let ReactRouting = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {currentPath == "/login" || currentPath == "/sign-up" ? (
        ""
      ) : (
        <Navigation />
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/Product" element={<AllCards />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-and-Conditions" element={<TermsAndConditionsComponent/>}/>
        <Route path="shipping-info" element={<ShoppingInfoPageComponent/>}/>
        <Route path ="/return-Exchange" element={<ReturnAndExchangePageComponent/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/top-Products" element={<AllCards/>}/>
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>

      {currentPath == "/login" || currentPath == "/sign-up" ? (
        ""
      ) : (
        <Footer/>
      )}


    </>
  );
};

export default ReactRouting;
