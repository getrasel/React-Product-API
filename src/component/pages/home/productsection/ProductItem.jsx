import { Link } from "react-router-dom";
import RatingProduct from "./RatingProduct";
import ProductSkeleton from "../../../skeleton/ProductSkeleton";

const ProductItem = (props) => {
  const skeletonitem = (count) => {
    const skltn = [];
    for (let i = 0; i < count; i++) {
      skltn.push(<ProductSkeleton key={i} />);
    }
    return skltn;
  };
  const visibilitems = props.item.slice(0, props.limit);
  const skeletonLoad = props.limit - visibilitems.length;
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 relative">
        {visibilitems.map((items, index) => (
          <Link to={`ProductDetails/${items.id}`} key={index}>
            <div
              className="rounded-xl shadow-md"
              style={{ backgroundColor: "#e2eddb" }}
            >
              <img src={items.thumbnail} />
            </div>
            <div className="py-4">
              <h2 className="text-xl font-medium text-nowrap text-ellipsis overflow-hidden">
                {items.title}
              </h2>
              <div className="flex gap-2 items-center mt-3 mb-2">
                <RatingProduct rating={items.rating} />
                <p className="text-sm">{items.rating} Rating</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex gap-3 items-center">
                  <h4 className="font-medium text-xl">${items.price}</h4>
                  <p
                    className="text-sm parcentage"
                    style={{ color: "#9ca596", position: "relative" }}
                  >
                    ${items.discountPercentage}
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
        ))}
        {skeletonLoad > 0 && skeletonitem(skeletonLoad)}
      </div>
    </div>
  );
};

export default ProductItem;
