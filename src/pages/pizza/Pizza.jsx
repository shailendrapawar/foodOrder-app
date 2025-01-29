import { useState } from "react"
import "./pizza.css"
const Pizza = () => {

  const[veg,setVeg]=useState(false)

  return (
    <div className="bg-slate-200 h-full">
      <header className="bg-black h-15 flex justify-center items-center gap-5">

        <section className='w-[90%] max-w-44'>
          <input className='w-[70%] h-8 bg-white text-center rounded-tl-md rounded-bl-md outline-none pr-2 pl-2' type='text' placeholder='search for new items'></input>
          <button className='w-[30%] h-8 bg-green-500 text-white rounded-tr-md rounded-br-md'>search</button>
        </section>

        <div onClick={()=>setVeg(!veg)} className="bg-white w-13 rounded-full p-0.5 flex gap-1 items-center cursor-pointer select-none" style={veg?{ flexDirection:"row-reverse", backgroundColor:""}:{flexDirection:"row"}}>
          <div className="h-5 w-5 rounded-full bg-green-500"></div>
          <span className="text-xs">{veg?"Veg":""}</span>
        </div>

      </header>
    </div>
  )
}
export default Pizza