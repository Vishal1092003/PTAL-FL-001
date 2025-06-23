// import React from 'react'

// function ContactUs() {
//   return (
//     <div className='py-20 bg-[#f8f6f3] items-center justify-center px-20 w-full'>
//       {/* Contact Form Section */}
//       <div className='container max-w-xl mx-auto m-8 px-8 py-10 border-b-1 border-black'>
//         <div className='text-center flex flex-col items-center text-5xl text-[#B01C1A] p-5 m-5'>
//           <h1 style={{fontFamily:"Fondamento, cursive"}}>Contact Us</h1>
//         </div>
//         <div className='flex flex-row items-start gap-4 mt-10'>
//           <div className='flex flex-col'>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" id="name" className='border border-gray-300 rounded-xs w-140 h-8'/>
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor="email">Email</label>
//             <input type="text" name="email" id="email" className='border border-gray-300 rounded-xs w-140 h-8'/>
//           </div>
//         </div>
//         <div className='flex flex-col justify-center gap-4 mt-10 mb-6'>
//           <label htmlFor="msgBox">Message</label>
//           <input type="textarea" name="msgBox" id="masgBox" className='border border-gray-300 rounded-xs w-full h-28 focus:border-gray-800'/>
//         </div>
//       </div>

//       {/* Heading after the border */}
//       <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
//         <h2 className='p-5'>
//           You can contact us at:
//         </h2>
//       </div>

//       {/* Contact Details Section */}
//       <div className='container flex flex-col items-center justify-center max-w-xl mx-auto my-4 py-6 p-8 rounded-lg'>
//         <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
//           <p><span className='font-bold'>Phone:</span> +91-7314620881</p>
//         </div>
//         <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
//           <p><span className='font-bold'>WhatsApp:</span> +91-9740357742</p>
//         </div>
//         <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
//           <p><span className='font-bold'>Email:</span> contact@ptal.in</p>
//         </div>
//         <p className='text-2xl p-5'>Exclusive Retail outlets:</p>
//         <p className='font-bold text-2xl'>Delhi:</p>
//         <p className='text-2xl p-5'>M-5, 1st Floor, M Block Market, Greater Kailash - 1</p>
//         <p className='text-2xl p-5'>New Delhi - 110048</p>
//         <p className='text-2xl p-5'><span className='font-bold'>Phone:</span> +91-7314620795</p>
//         <p className='text-2xl p-5'><span className='font-bold'>Whatsapp:</span>+91-9876118320</p>
//         <p className='text-2xl p-5 font-bold'>Panchkula:</p>
//         <p className='text-2xl p-5'>Karshini Artysun Private Limited</p>
//         <p className='text-2xl p-5'>Plot no. 249, HSIIDC Alipur, Industrial Estate Barwala, Barwala, Panchkula, Haryana-134118</p>
//         <p className='text-2xl p-5'>GSTIN: 06AAKCK0953B1ZU</p>
//       </div>
//       {/* Place your <Footer /> component here if you have one */}
//     </div>
//   )
// }

// export default ContactUs


import React from 'react'

function ContactUs() {
  return (
    <div className='py-20 bg-[#f8f6f3] items-center justify-center px-4 md:px-20 w-full'>
      {/* Contact Form Section */}
      <div className='container max-w-xl mx-auto m-8 px-4 md:px-8 py-10 border-b border-black'>
        <div className='text-center flex flex-col items-center text-4xl md:text-5xl text-[#B01C1A] p-5 m-5'>
          <h1 style={{fontFamily:"Fondamento, cursive"}}>Contact Us</h1>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-4 mt-10'>
          <div className='flex flex-col flex-1 w-full'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className='border border-gray-300 rounded-xs h-8 px-2 w-full'/>
          </div>
          <div className='flex flex-col flex-1 w-full'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" className='border border-gray-300 rounded-xs h-8 px-2 w-full'/>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 mt-10 mb-6'>
          <label htmlFor="msgBox">Message</label>
          <textarea name="msgBox" id="msgBox" className='border border-gray-300 rounded-xs w-full h-28 focus:border-gray-800 px-2 py-2'/>
        </div>
      </div>

      {/* Heading after the border */}
      <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
        <h2 className='p-5'>
          You can contact us at:
        </h2>
      </div>

      {/* Contact Details Section */}
      <div className='container flex flex-col items-center justify-center max-w-xl mx-auto my-4 py-6 px-4 md:p-8 rounded-lg'>
        <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
          <p><span className='font-bold'>Phone:</span> +91-7314620881</p>
        </div>
        <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
          <p><span className='font-bold'>WhatsApp:</span> +91-9740357742</p>
        </div>
        <div className='text-center flex flex-col items-center text-2xl p-5 m-5'>
          <p><span className='font-bold'>Email:</span> contact@ptal.in</p>
        </div>
        <p className='text-2xl p-5'>Exclusive Retail outlets:</p>
        <p className='font-bold text-2xl'>Delhi:</p>
        <p className='text-2xl p-5'>M-5, 1st Floor, M Block Market, Greater Kailash - 1</p>
        <p className='text-2xl p-5'>New Delhi - 110048</p>
        <p className='text-2xl p-5'><span className='font-bold'>Phone:</span> +91-7314620795</p>
        <p className='text-2xl p-5'><span className='font-bold'>Whatsapp:</span>+91-9876118320</p>
        <p className='text-2xl p-5 font-bold'>Panchkula:</p>
        <p className='text-2xl p-5'>Karshini Artysun Private Limited</p>
        <p className='text-2xl p-5'>Plot no. 249, HSIIDC Alipur, Industrial Estate Barwala, Barwala, Panchkula, Haryana-134118</p>
        <p className='text-2xl p-5'>GSTIN: 06AAKCK0953B1ZU</p>
      </div>
      {/* Place your <Footer /> component here if you have one */}
    </div>
  )
}

export default ContactUs
