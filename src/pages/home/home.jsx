import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/navbar/button/button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar>
        <ul className="flex justify-around items-center h-[70px]">
           <li> 
            <Link to="/">
                home
            </Link>
            </li>
            <li>
                <Link to="login">
                <Button btnName="Login"/>
                </Link>
            </li>
        </ul>
      </Navbar>
    </>
  );
};
export default Home;
