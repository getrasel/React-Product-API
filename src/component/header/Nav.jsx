import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div
        className="flex gap-8 text-lg font-medium"
        style={{ color: "#51594d" }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};
