import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#eff7e9" highlightColor="#e8ede4">
        <Skeleton count={1} height={300} width={300} />
        <Skeleton count={1} height={25} width={300} />
        <Skeleton count={1} height={15} width={200} />
        <div className="flex justify-between" style={{ width: "300px" }}>
          <Skeleton count={1} height={32} width={130} />
          <Skeleton count={1} height={32} width={130} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ProductSkeleton;
