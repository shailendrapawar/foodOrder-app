import { NavLink } from "react-router-dom"
import "./navbar.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";

const Navbar = () => {

  
  const cartItem=useSelector(s=>s.cart);
  const [total,setTotal]=useState(0);


  useEffect(()=>{
    const q=cartItem.reduce((acc,curr)=>{
      return acc+=curr.quantity
    },0);
    setTotal(q)
  },[cartItem])

  return (
    <div className="h-16 bg-amber-400 absolute w-screen bottom-0 flex items-center justify-center">
      <div className=" nav-items flex justify-evenly w-[50%] min-w-76 h-8">
        <NavLink to="/" className=" w-20 flex justify-center items-center ">Home</NavLink>
        <NavLink to="/pizza" className=" w-20 flex justify-center items-center ">Pizza</NavLink>
        <NavLink to="/cart" className=" cart-text w-20 flex justify-center items-center">Cart: <b className=" ml-0.5">{total}</b></NavLink>
      </div>
    </div>
  )
}

export default Navbar;