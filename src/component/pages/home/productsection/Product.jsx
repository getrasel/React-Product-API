import React, { useEffect, useState } from "react";
import ProductTitle from "./ProductTitle";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const [item, setItem] = useState([]);
  const [limit, setLimit] = useState(8);

  const seeAPIdata = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}`
      );
      const data = await response.json();
      console.log(data.products);
      setItem(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    seeAPIdata();
  }, [limit]);

  const navigate = useNavigate();
  const handleProduct = () => {
    limit !== 12 ? setLimit(limit + 4) : navigate("/products");
  };
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <div className="w-320 mx-auto py-25">
          <ProductTitle title="Natural Beauty Skincare" />
          <ProductItem item={item} limit={limit} />
          <button
            onClick={handleProduct}
            className="text-white px-8 py-4 !text-xl rounded-xl mt-8 mx-auto block focus:!outline-0"
            style={{ backgroundColor: "#51594d" }}
          >
            {limit !== 12 ? "Load More" : "Go to Product Page"}
          </button>
        </div>
      </div>
    </>
  );
};
// #51594d
// #cad3c4
export default Product;
