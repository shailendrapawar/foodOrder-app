import { useState } from "react";
import "./itemCard.css"
import "./itemCard.css"
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import { cart_add,cart_remove } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";


const ItemCard = ({ data }) => {
  const dispatch=useDispatch();
  const [clicked, setClicked] = useState(false)

  return (
    <div className=" item-card h-46 w-56 min-w-56 bg-white relative flex flex-col rounded-md justify-evenly overflow-hidden cursor-pointer">
      <img onClick={() => setClicked(!clicked)} className=" item-img w-full h-26 object-contain bg-white p-1 rounded-md" style={clicked ? { filter: `blur(30px)` } : { display: "block", animation: "imgAnime 0.5s " }} src={data.img}></img>
      <span onClick={() => setClicked(!clicked)} className=" item-desc text-xs absolute top-0 overflow-hidden p-1 h-28  text-center bg-green-600 text-white items-center justify-center" style={clicked ? { display: "flex", animation: `cardAnime 0.5s ` } : {}}>{data.desc}</span>
      <h1 className=" item-title text-center text-[13px] pr-1 pl-1 ">{data.name}</h1>
      <div className=" flex justify-between pr-2 pl-2">
        <div className=" flex">
          <FaStar className="info-btn h-6 w-6 p-0.5  text-amber-300 self-end " /><i className="text-sm grid content-center">{data?.rating}</i>
        </div>

        <b className="text-slate-500">${data.price}</b>
        <FaCartShopping className="h-6 w-6 text-green-600 self-end" onClick={()=>{
          dispatch(cart_add(data))
        }} />
      </div>
    </div>
  )
}
export default ItemCard