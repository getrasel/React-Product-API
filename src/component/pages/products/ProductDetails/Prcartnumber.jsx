import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Prcartnumber = () => {
  const [cart, setCart] = useState(0);
  const plus = () => {
    setCart(cart + 1);
  };
  const minus = () => {
    setCart(cart > 1 ? cart - 1 : 0);
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-2 py-4">
          <div className="flex justify-between items-center gap-1 border text-xl rounded-md">
            <button
              onClick={() => {
                minus();
              }}
              className=" py-3 px-6  h-14"
            >
              <FaMinus />
            </button>
            <div className="px-2 font-medium">{cart}</div>
            <button
              onClick={() => {
                plus();
              }}
              className=" py-3 px-6  h-14"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex-1 border rounded-md">
            <button className="py-3 px-5  h-14 w-full">Add to Cart</button>
          </div>
        </div>
        <div className="py-2">
          <button
            className="text-center text-xl font-medium py-4 px-5 w-full text-white rounded-md"
            style={{ backgroundColor: "#51594d" }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Prcartnumber;
