import React, { useState ,useEffect} from 'react';
import "./orderConfirm.css"
import { useNavigate } from 'react-router-dom';

const OrderConfirm = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    // Trigger the animation once the component is mounted
    setIsLoaded(true);
  }, []);

  

  return (
    <div className="confirmation-container">
    <h2>Order Confirmed</h2>
    <p>Your order has been successfully placed!</p>

    {isLoaded && (
      <div className="checkmark-container flex flex-col items-center gap-2">
        <div className="checkmark"></div>
        <p className="success-message" >Success!</p>
        <button className='h-10 w-28 bg-blue-500 text-white rounded-md' onClick={()=>navigate("/")}>Order More</button>
      </div>
      
    )}
  </div>

  )
}
export default OrderConfirm