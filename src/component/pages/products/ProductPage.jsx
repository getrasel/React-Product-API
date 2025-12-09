import { useEffect, useState } from "react";
import ProductTitle from "../home/productsection/ProductTitle";
import { Link } from "react-router-dom";
import RatingProduct from "../home/productsection/RatingProduct";
import ProductSkeleton from "../../skeleton/ProductSkeleton";
const Products = () => {
  const [product, setProduct] = useState([]);
  const AllProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProduct(data.products);
    console.log(data.products);
  };
  useEffect(() => {
    AllProduct();
  }, []);
  const skeletonitem = (countskltn) => {
    const box = [];
    for (let i = 0; i < countskltn; i++) {
      box.push(<ProductSkeleton key={i} />);
    }
    return box;
  };
  return (
    <div className="pt-20" style={{ backgroundColor: "#f1f7ee" }}>
      <div className="w-320 mx-auto py-25">
        <ProductTitle title="Product Page" />
        <div className="grid grid-cols-4 gap-6">
          {product.length > 0
            ? product.map((products, index) => {
                return (
                  <Link to={`../ProductDetails/${products.id}`} key={index}>
                    <div
                      className="rounded-xl shadow-md"
                      style={{ backgroundColor: "#e2eddb" }}
                    >
                      <img src={products.thumbnail} />
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl font-medium text-nowrap text-ellipsis overflow-hidden">
                        {products.title}
                      </h2>
                      <div className="flex gap-2 items-center mt-3 mb-2">
                        <RatingProduct rating={products.rating} />
                        <p className="text-sm">{products.rating} Rating</p>
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <div className="flex gap-3 items-center">
                          <h4 className="font-medium text-xl">
                            ${products.price}
                          </h4>
                          <p
                            className="text-sm parcentage"
                            style={{ color: "#9ca596", position: "relative" }}
                          >
                            ${products.discountPercentage}
                          </p>
                        </div>
                        <div
                          className="text-white py-2 px-4 rounded-md"
                          style={{ backgroundColor: "#51594d" }}
                        >
                          <p>Buy Now</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            : skeletonitem(product.length)}
        </div>
      </div>
    </div>
  );
};

export default Products;
