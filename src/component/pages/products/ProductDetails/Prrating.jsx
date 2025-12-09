import RatingProduct from "../../home/productsection/RatingProduct";
import { FaQuoteRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Prrating = ({ rating, reviews }) => {
  return (
    <>
      <div className="pt-18 pb-10">
        <h2 className="text-4xl font-medium py-4">Customer Review</h2>
        <div className="flex justify-between gap-2">
          <div className="flex gap-4 items-center">
            <ul className="flex gap-2 text-amber-600 text-2xl">
              <RatingProduct rating={rating} />
            </ul>
            <p className="text-xl">{rating} Review</p>
          </div>
          <button
            className="py-3 px-8 text text-white rounded-md"
            style={{ backgroundColor: "#51594d" }}
          >
            Write a Review
          </button>
        </div>
        <ul className="mt-5 flex flex-col gap-8">
          {reviews ? (
            reviews.map((review, index) => (
              <li
                key={index}
                className=" shadow-lg py-5 px-6 rounded-lg border border-gray-200"
              >
                <FaQuoteRight className="text-3xl" />
                <p className="text-lg my-4">{review.comment}</p>
                <h2 className="text-xl font-medium">{review.reviewerName}</h2>
                <p className="py-2">{review.reviewerEmail}</p>
                <ul className="flex gap-2 text-amber-600 text-xl">
                  <RatingProduct rating={review.rating} />
                </ul>
              </li>
            ))
          ) : (
            <div className="shadow">
              <Skeleton height={180}></Skeleton>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Prrating;
