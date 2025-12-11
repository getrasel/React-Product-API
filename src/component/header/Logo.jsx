import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  const [logoColor, setLogoColor] = useState("white");
  useEffect(() => {
    if (location.pathname === "/") {
      setLogoColor("white");
    } else {
      setLogoColor("#51594d");
    }
  }, [location.pathname]);
  return (
    <>
      <Link to="/" className="flex gap-2 items-center">
        <img
          src="https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png"
          className="w-15 h-15 object-cover"
        />
        <p className="text-2xl" style={{ color: logoColor }}>
          Luxury Product
        </p>
      </Link>
    </>
  );
};

export default Logo;
