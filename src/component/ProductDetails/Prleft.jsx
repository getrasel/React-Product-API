import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Prleft = ({ images, imgsingle, brand }) => {
  return (
    <>
      <div className="flex-1">
        {images ? (
          <div
            className="w-ful rounded-lg shadow"
            style={{ backgroundColor: "#e2eddb" }}
          >
            <img src={imgsingle} className="w-full h-124 object-contain" />
          </div>
        ) : (
          <Skeleton height={496}></Skeleton>
        )}

        <div className="flex gap-3 mt-4">
          {!images ? (
            [1, 2, 3].map((count, idx) => {
              return (
                <div key={idx} className="mt-4">
                  <Skeleton width={200} height={200}></Skeleton>
                </div>
              );
            })
          ) : (
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="py-2 px-4 rounded-md shadow w-50 h-50"
                  style={{ backgroundColor: "#e2eddb" }}
                >
                  <img src={img} className="w-full" />
                </div>
              ))}
            </div>
          )}
        </div>
        <h4
          className="mt-4 py-4 px-6 text-white rounded-md text-xl text-center"
          style={{ backgroundColor: "#51594d" }}
        >
          Brand is {brand}
        </h4>
      </div>
    </>
  );
};

export default Prleft;
