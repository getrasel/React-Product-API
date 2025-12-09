import ProductTitle from "../../home/productsection/ProductTitle";
import Prleft from "./Prleft";
import Prright from "./Prright";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prrating from "./Prrating";

const ProductDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const ProductDetails = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = await response.json();
    setDetails(data);
    console.log(data);
  };
  useEffect(() => {
    ProductDetails();
  }, []);

  return (
    <div className="pt-40 pb-20" style={{ backgroundColor: "#f1f7ee" }}>
      <div className="w-320 mx-auto">
        <ProductTitle title="Product Details Page" />
        <div>
          <div className="flex justify-between">
            <Prleft
              images={details.images}
              imgsingle={details.images?.[0]}
              brand={details.brand}
            />
            <Prright
              title={details.title}
              rating={details.rating}
              price={details.price}
              discount={details.discountPercentage}
              stock={details.stock}
              description={details.description}
              warrenty={details.warrantyInformation}
              shipping={details.shippingInformation}
              return={details.returnPolicy}
              quantity={details.minimumOrderQuantity}
            />
          </div>
          <Prrating rating={details.rating} reviews={details.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
