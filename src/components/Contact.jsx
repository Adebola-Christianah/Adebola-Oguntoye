import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,  // Update access to VITE_ variables
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )
    .then((result) => {
      alert('Message Sent Successfully');
      console.log(result)
      e.target.reset();  // Reset form only after success
    })
    .catch((error) => {  // Use catch for error handling
      console.log(error.text);
      alert('Something went wrong!');
    });
  };
  

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    oguntoyeadebola21@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>(+234) 081066944443</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>6A Marigold, Emerald Estate, Ajah, Lagos, Nigeria</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    name="name"
                    placeholder='Enter Your Name' required/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    name="email"
                    placeholder='Enter Your Email' required/>
                </div>
                <div>
                    <label htmlFor="subject" className='block mb-2'>Subject</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    name="subject"
                    placeholder='Enter Subject' required/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    name="message"
                    placeholder='Enter Your Message' required/>
                </div>
                <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
