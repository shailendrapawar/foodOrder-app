import React from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import CartList from '../../component/cartList/CartList'
import emptyCart from "./empty-cart.jpg"

const Cart = () => {
  const cartData=useSelector(state=>state.cart)
  console.log(cartData)
  return (
    <div className='bg-slate-200 h-full flex items-center justify-center flex-col'>



      <section className='h-[400px] w-[100%] max-w-[700px] bg-gray-500 flex flex-col justify-between'>

        <div className='cartList-container h-full bg-white flex flex-col gap-2 p-2'>
          {
            cartData.length>0?(cartData.map((item,i)=>{
              return <CartList key={i} data={item}/>
            })):(<div className=' h-full relative' >
              {/* <span className=' absolute top-0 right-[50%]'>Empty Cart</span> */}
              <img className=' object-contain h-full w-full' src={emptyCart}></img>
              
            </div>)
          }
        </div>

        <div className='bg-amber-400 h-13 flex justify-end items-center pr-5 text-white'>Total: $100</div>
      </section>





      <button className=' '>confirm order</button>

    </div>
  )
}


export default Cart