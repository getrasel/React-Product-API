import { IoStarSharp } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const RatingProduct = (props) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (props.rating >= i) {
      stars.push(<IoStarSharp key={i} />);
    } else if (props.rating >= i - 0.5) {
      stars.push(<IoStarHalfSharp key={i} />);
    } else {
      stars.push(<IoStarOutline key={i} />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};

export default RatingProduct;
