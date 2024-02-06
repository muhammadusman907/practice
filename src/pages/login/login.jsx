import Navbar from "../../components/navbar/Navbar";
const Login = () => {
           return(
            <>
            <Navbar>
            <ul className="flex justify-around items-center h-[70px]">
               <li> 
                <Link to="/">
                    home
                </Link>
                </li>
                <li>
                    <Link to="signup">
                    <Button btnName="signup"/>
                    </Link>
                </li>
            </ul>
          </Navbar>
          <h1>hello</h1>
          </>

           )
}
export default Login ;