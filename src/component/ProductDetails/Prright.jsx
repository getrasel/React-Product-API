import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { FaSortAmountUp } from "react-icons/fa";
import Prcartnumber from "./prcartnumber";
import RatingProduct from "../home/productsection/RatingProduct";

const Prright = (props) => {
  return (
    <>
      <div className="flex-1 pl-10">
        <h2 className="mb-6 text-5xl !leading-15 font-medium">{props.title}</h2>
        <div className="flex gap-2 items-center text-2xl text-amber-600 mb-4">
          <RatingProduct rating={props.rating} />
          <p className="px-2 text-gray-900">{props.rating} Review</p>
        </div>
        <div className="flex gap-4 items-center mb-8">
          <h3 className="text-3xl font-medium">${props.price} USD</h3>
          <p className="text-xl line-through relative">${props.discount}</p>
        </div>
        <p
          className="text-2xl font-medium border-b-4 pb-2"
          style={{ borderColor: "#51594d" }}
        >
          Only
          <span className="font-bold inline-block text-green-700 px-2">
            {props.stock}
          </span>
          items in stock
        </p>
        <p className="text-lg pt-5">{props.description}</p>
        <Prcartnumber />
        <div
          className="py-5 px-5 rounded-lg mt-4"
          style={{ backgroundColor: "#e2eddb" }}
        >
          <ul className="font-lg">
            <li className="flex items-center gap-3 py-1 text-xl">
              <LuBadgeCheck /> <p>{props.warrenty}</p>
            </li>
            <li className="flex items-center gap-3 py-1 text-xl">
              <MdOutlineTimer /> <p>{props.shipping}</p>
            </li>
            <li className="flex items-center gap-3 py-1 text-xl">
              <IoMdReturnLeft /> <p>{props.return}</p>
            </li>
            <li className="flex items-center gap-3 py-1 text-xl">
              <FaSortAmountUp />
              <p>minimum order quantity: {props.quantity}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Prright;
