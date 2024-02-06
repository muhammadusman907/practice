import { Link } from "react-router-dom";

const Navbar = ( {children}) => {

  console.log(navigation);

  return (
    <>
      <div className="bg-secondary h-[70px] w-full " >
           {children}
      </div>
    </>
  );
};

export default Navbar;
