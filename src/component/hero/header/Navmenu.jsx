import Logo from "./logo";
import { Nav } from "./nav";

const Navmenu = () => {
  return (
    <>
      <div className="absolute w-full z-10">
        <div className="py-5 flex justify-between items-center w-320 mx-auto">
          <Logo />
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Navmenu;
