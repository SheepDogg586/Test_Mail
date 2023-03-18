import React, { useState } from 'react';
import Image from "../../img/bg.jpg";

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Cole please can add a way to send the form data to a server here
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85.5vh',
	backgroundImage: `url(${Image})`, 
	backgroundSize: 'cover',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
	height:'80%',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1>Contact Us</h1>
        <p>Thank you for your interest in contacting us. You can reach us through the following methods:</p>
        <ul>
          <li>Email: <a href="mailto:example@email.com">example@email.com</a></li>
          <li>Phone: <a href="tel:1234567890">123-456-7890</a></li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
        <p>Alternatively, you can use the form below to send us a message:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}




