import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Product";
import Navmenu from "./component/header/navmenu";
import ProductDetails from "./component/ProductDetails/ProductDetails";
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
