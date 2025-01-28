import { NavLink } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="h-16 bg-amber-400 absolute w-screen bottom-0 flex items-center justify-center">

      <div className=" nav-items flex justify-evenly w-52 h-8">
        <NavLink to="/" className=" w-20 flex justify-center items-center ">Home</NavLink>
        <NavLink to="/cart" className=" w-20 flex justify-center items-center">Cart</NavLink>
      </div>

    </div>
  )
}
export default Navbar