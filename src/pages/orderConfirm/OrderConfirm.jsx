import React, { useState ,useEffect} from 'react';
import "./orderConfirm.css"

const OrderConfirm = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation once the component is mounted
    setIsLoaded(true);
  }, []);


  return (
    <div className="confirmation-container">
    <h2>Order Confirmed</h2>
    <p>Your order has been successfully placed!</p>

    {isLoaded && (
      <div className="checkmark-container">
        <div className="checkmark"></div>
        <p className="success-message">Success!</p>
      </div>
    )}
  </div>

  )
}
export default OrderConfirm