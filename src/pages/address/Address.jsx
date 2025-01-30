import React, { useState } from 'react';


const Address = () => {

    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const[allowed,setAllowed]=useState(false);


  const handleSubmit = (e) => {
    if(name===""||phone===""||address===""){
        e.preventDefault();
        return  
    }
    const userAddress = { name, phone, address };
    console.log("User Address Submitted:", userAddress);
    // You can handle further actions here, like storing or sending data
  };

    
  return (
    <main className='flex h-full justify-center items-center'>
        <div style={styles.container}>
      <h2 style={styles.heading}>Enter Your Address</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.textarea}
            placeholder="Enter your delivery address"
            required
          />
        </div>
        
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
    </main>
  )
}

const styles = {
    container: {
      width: '300px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontSize: '14px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
      height: '100px',
      resize: 'none',
    },
    submitButton: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };
export default Address