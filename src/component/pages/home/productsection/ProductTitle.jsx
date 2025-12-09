import React, { useState } from "react";

const ProductTitle = (props) => {
  return (
    <div>
      <div className="w-200 mx-auto text-center pb-15">
        <h2 className="text-5xl pb-5">{props.title}</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          porro facere! Rem quas necessitatibus dolores minus voluptatum animi
          veritatis nisi.
        </p>
      </div>
    </div>
  );
};

export default ProductTitle;
