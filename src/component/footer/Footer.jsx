import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#51594d" }}>
      <div className="flex items-center justify-between gap-2 w-320 mx-auto py-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png"
            className="w-15 h-15 object-cover"
          />
          <p className="text-2xl" style={{ color: "#ffffff" }}>
            Luxury Product
          </p>
        </Link>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul className="flex gap-2 text-white text-2xl">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
