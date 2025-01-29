import { useState } from "react"
import "./pizza.css"
import { useSelector } from "react-redux"
import ItemCard from "../../component/itemCard/ItemCard"
const Pizza = () => {

  const [veg, setVeg] = useState(false)
  const pizza = useSelector((state) => state.pizza)
  // console.log(pizza)

  
  return (
    <div className="bg-slate-300 h-full flex flex-col justify-between ">

      <header className="bg-black h-15 flex justify-evenly items-center  justify-self-end">
        <section className='w-[70%] h-8 max-w-88 '>
          <input className='w-[80%] h-8 bg-white text-center rounded-tl-md rounded-bl-md outline-none pr-2 pl-2' type='text' placeholder='search for new items'></input>
          <button className='w-[20%] h-8 bg-green-500 text-white rounded-tr-md rounded-br-md'>search</button>
        </section>

        <div onClick={() => setVeg(!veg)} className="bg-white w-13 rounded-full  p-1 flex gap-1 items-center cursor-pointer select-none" style={veg ? { flexDirection: "row-reverse", backgroundColor: "rgb(0, 223, 0)" } : { flexDirection: "row", backgroundColor: "white" }}>
          <div className="h-5 w-5 rounded-full " style={veg ? { backgroundColor: "white" } : { backgroundColor: "rgb(0, 223, 0)" }}></div>
          <span className="text-xs" >{veg ? "" : "veg"}</span>
        </div>
      </header>


      <section className=" pizzaList-body h-[80%] max-w-[600px] bg-slate-300 flex flex-wrap  justify-evenly self-center gap-1 p-1">
        {pizza.map((item, i) => <ItemCard key={i} data={item} />)}
      </section>

    </div>
  )
}
export default Pizza