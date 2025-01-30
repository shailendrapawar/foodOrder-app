import "./cartList.css"
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cart_decreaseQty, cart_increaseQty } from "../../store/reducers/cartReducer";
import { useEffect } from "react";

const CartList = ({ data }) => {

    const dispatch=useDispatch()
    return (
        <div className=" min-h-25 h-25 bg-slate-200 flex justify-between pr-3 pl-3 items-center select-none">
            
            <img className="h-24 w-28 object-contain" src={data.img}></img>

            <span className=" text-xs max-w-15">{data.name}</span>

            <div className=" flex w-20 justify-evenly items-center">
                <FaCircleMinus onClick={()=>dispatch(cart_decreaseQty(data))} className="text-green-500 h-6 w-6"></FaCircleMinus>
                <b>{data.quantity}</b>
                <FaCirclePlus onClick={()=>dispatch(cart_increaseQty(data))} className="text-green-500 h-6 w-6"/>
            </div>

            <section className="flex flex-col h-10 justify-between">
                <b className="text-sm">${data.price}</b>
                <i className="text-xs text-slate-600">${(data.price)*data.quantity}</i>
            </section>
        </div>
    )
}
export default CartList