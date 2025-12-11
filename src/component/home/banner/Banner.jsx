import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <>
      <div className="flex h-screen max-h-[850px]">
        <div className="flex-1">
          <BannerLeft />
        </div>
        <div className="flex-1">
          <BannerRight />
        </div>
      </div>
    </>
  );
};

export default Banner;
