import { useContext } from "react";
import Banner from "../../hero/banner";
import Product from "./productsection/Product";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Product />
      </div>
    </>
  );
};

export default Home;
