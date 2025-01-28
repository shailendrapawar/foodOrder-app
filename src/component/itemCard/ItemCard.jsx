import "./itemCard.css"
import "./itemCard.css"
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";


const ItemCard = ({ data }) => {
  return (
    <div className=" item-card h-42 w-52 min-w-52 bg-white relative flex flex-col rounded-md justify-evenly">
      <img className=" item-img w-full h-26 object-contain bg-white p-1 rounded-md" src={data.img}></img>
      <span className=" item-desc text-xs absolute top-0 overflow-hidden p-1 h-28">{data.desc}</span>
      <h1 className=" item-title text-center text-[13px] pr-1 pl-1">{data.name}</h1>
      <div className=" flex justify-between pr-2 pl-2">
        <FaCircleInfo className="info-btn h-6 w-6 text-green-600 self-end "/>
        <FaCartShopping className="h-6 w-6 text-green-600 self-end" />
      </div>
    </div>
  )
}
export default ItemCard