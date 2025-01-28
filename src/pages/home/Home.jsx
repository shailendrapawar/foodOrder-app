import React from 'react'
import "./home.css"
import bgImgsrc from "./food-wallpaper.jpg"
import { useSelector } from 'react-redux'
import ItemCard from '../../component/itemCard/ItemCard'
const Home = () => {

  const s = useSelector((s) => s.menu)
  console.log(s)
  return (
    <div className='bg-slate-200 h-full select-none'>
      <img src={bgImgsrc} loading='lazy' className='w-screen h-[50%] max-h-76 object-cover'>

      </img>

      <section className='h-[50%] min-h-[200px] bg-slate-200 flex flex-col justify-evenly'>
        <h1 className=' home-heading text-center w-au'>Try our new Items...!!!</h1>
        <div className='h-12 flex flex-col items-center justify-center gap-10'>
          <section className='w-[90%] max-w-84'>
            <input className='w-[70%] h-8 bg-white text-center rounded-tl-md rounded-bl-md outline-none pr-2 pl-2' type='text' placeholder='search for new items'></input>
            <button className='w-[30%] h-8 bg-green-500 text-white rounded-tr-md rounded-br-md'>search</button>
          </section>
        </div>

        <div className='items-list-body h-auto min-h-48 flex justify-start items-center p-4 gap-4'> {
          s.map((item, i) => <ItemCard key={i} data={item} />)
        }</div>

      </section>
    </div>
  )
}

export default Home