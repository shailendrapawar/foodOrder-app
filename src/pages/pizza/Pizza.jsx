import { useState, useEffect, useRef } from "react"
import "./pizza.css"
import { useSelector } from "react-redux"
import ItemCard from "../../component/itemCard/ItemCard"
import pizzaSrc from  "./pizza-banner2.jpg"
const Pizza = () => {

  const [veg, setVeg] = useState(false)
  const p = useSelector((state) => state.pizza)
  const [pizza, setPizza] = useState(p);
  const cardBodyRef=useRef()
  const pizzaRef = useRef()

  const[searchKeyword,setSearchKeyword]=useState("");
  
  const handleSearch=()=>{
    if(searchKeyword===""){
      return 
    }
    // console.log("pressed")
    if(searchKeyword){
      const filterItem=pizza.filter((item)=>{
        return item.name.toLowerCase().includes(searchKeyword.toLowerCase())
      })
      console.log(filterItem)
      setPizza(filterItem);
    }
  }


  useEffect(() => {
    if (veg) {
      let newData = pizza.filter((item) => item.veg == true)
      setPizza(newData)

      pizzaRef.current.classList.remove("nonVegAnime")
      pizzaRef.current.classList.add("vegAnime")
      cardBodyRef.current.classList.add("flipAnime")

    } else {
      setPizza(p)
      pizzaRef.current.classList.remove("vegAnime")
      pizzaRef.current.classList.add("nonVegAnime")
      cardBodyRef.current.classList.remove("flipAnime")
    }

  }, [veg])


useEffect(()=>{
  if(searchKeyword===""){
    setPizza(p)
  }
},[searchKeyword])


  return (
    <div className=" pizza-body bg-slate-300 h-full flex flex-col justify-between select-none z-1 " style={{backgroundImage:`url(${pizzaSrc})`,backgroundSize:"cover"}} >

      <header className="pizza-header bg-black h-15 flex justify-evenly items-center  justify-self-end" ref={pizzaRef}>
        <section className='w-[70%] h-8 max-w-88 '>
          <input className='w-[70%] h-8 bg-white text-center rounded-tl-md rounded-bl-md outline-none pr-2 pl-2' value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value.toLowerCase())}  type='text' placeholder='search for new items'></input>
          <button className='w-[30%] min-w-12 h-8 bg-green-500 text-white rounded-tr-md rounded-br-md' onClick={()=>handleSearch()} style={searchKeyword===""?{ cursor:"not-allowed"}:{cursor:"pointer"}}>search</button>
        </section>

        <div onClick={() => setVeg(!veg)} className="bg-white w-13 rounded-full  p-1 flex gap-1 items-center cursor-pointer select-none" style={veg ? { flexDirection: "row-reverse", backgroundColor: "rgb(0, 223, 0)" } : { flexDirection: "row", backgroundColor: "white" }}>
          <div className="h-5 w-5 rounded-full " style={veg ? { backgroundColor: "white" } : { backgroundColor: "rgb(0, 223, 0)" }}></div>
          <span className="text-xs" >{veg ? "" : "veg"}</span>
        </div>
      </header>


      <section className=" pizzaList-body h-[80%] max-w-[600px] bg-transparent flex flex-wrap  justify-evenly self-center gap-2 p-2" ref={cardBodyRef}>
        {pizza.length>0?(pizza.map((item, i) => <ItemCard key={i} data={item} />)):(<h1 className='text-3xl'>no item... :)</h1>)}
      </section>

    </div>
  )
}
export default Pizza