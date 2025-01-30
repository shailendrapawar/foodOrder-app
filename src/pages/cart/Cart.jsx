import React from 'react'
import { useEffect,useState } from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import CartList from '../../component/cartList/CartList'
import emptyCart from "./empty-cart.jpg"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cartData=useSelector(state=>state.cart)
  const[total,setTotal]=useState(0);

  const navigate=useNavigate()
  // console.log(cartData)

  const handleClick=()=>{
    if(cartData.length>0){
     
      navigate("/address")

    }else{
      navigate("/")
    }
  }
  useEffect(() => {
    const p=cartData.reduce((acc,curr)=>{ return acc+=(curr.price)*curr.quantity},0)
    setTotal(p)
  }, [cartData])
  


  return (
    <div className='bg-slate-200 h-full flex items-center justify-center flex-col gap-10'>

      <section className='h-[400px] w-[100%] max-w-[700px] bg-gray-500 flex flex-col justify-between'>

        <div className='cartList-container h-full bg-white flex flex-col gap-2 p-2'>
          {
            cartData.length>0?(cartData.map((item,i)=>{
              return <CartList key={i} data={item}/>
            })):(<div className=' h-full relative' >
              <img  loading="lazy" className=' object-contain h-full w-full' src={emptyCart}></img>
            </div>)
          }
        </div>

        <div className='bg-amber-400 h-15 flex justify-end items-center pr-5 text-black'><b className='bg-white w-25 h-9 flex items-center justify-center text-center text-sm rounded-md'>Total: ${total}</b></div>
      </section>

      <button className='bg-green-500 h-10 w-30 rounded-md text-white cursor-pointer' onClick={()=>handleClick()}>{cartData.length>0?"Place Order":"Add Items"}</button>

    </div>
  )
}


export default Cart