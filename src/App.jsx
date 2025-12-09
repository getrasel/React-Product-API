import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/pages/home/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navmenu from "./component/hero/header/navmenu";
import Products from "./component/pages/products/ProductPage";
import ProductDetails from "./component/pages/products/ProductDetails/ProductDetails";
import { useEffect } from "react";
import Footer from "./component/footer/Footer";
function App() {
  const PageLocation = () => {
    const pathname = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <>
      <div>
        <PageLocation />
        <Navmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/ProductDetails/:productId"
            element={<ProductDetails />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
