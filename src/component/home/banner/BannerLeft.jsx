import React from "react";

const BannerLeft = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#51594d" }}
        className="h-full pt-20 relative"
      >
        <div className="w-160 ml-auto">
          <h1 className="pt-30 text-white text-[120px] font-bold text-nowrap text-shadow-lg">
            New Makeups
          </h1>
          <h2
            className=" text-[110px] font-bold text-nowrap py-8 text-shadow-md"
            style={{ color: "#a6aba3" }}
          >
            Fasionable
          </h2>
          <h2
            className=" text-[110px] font-bold text-nowrap text-shadow-md"
            style={{ color: "#a6aba3" }}
          >
            Affordable
          </h2>
        </div>
      </div>
    </>
  );
};

export default BannerLeft;
