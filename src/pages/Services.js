import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios"

const EPayment = () => {
  const url="https://localhost:44349/api/MainMenu/Create"
  const [data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    translate:"",
    delivery:"",
    message:""
  })
  function submit (e){
    e.preventDefault()
    Axios.post(url,{
      name:data.name,
      email:data.email,
      phone:data.phone,
      translate:data.translate,
      delivery:data.delivery,
      message:data.message
    })
    .then(res=>{
      console.log(res.data)
    })
   
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
    return (
        <div>
             <div className="w-1/2 pr-8">
              <div>
                {/* <h2 className="text-3xl font-bold mb-10 text-white sm:text-center lg:text-left">
                  Get in touch
                </h2> */}
                {/* <p className="text-white mb-10 sm:text-center lg:text-left">
                  Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
                  vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
                  id aliquam pulvinar neque.
                </p> */}
              </div>
              <form onSubmit={(e)=>submit(e)}>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="fa6-solid:user" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Name" 
                    name="user_name required"
                    onChange={(e)=>handle(e)} id='name' value={data.name}
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:email" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Email"
                    name="user_email required"
                    onChange={(e)=>handle(e)} id='email' value={data.email}
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:cellphone" />
                  </span>
                  <input
                    type="number"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Phone"
                    name="user_phone required"
                    onChange={(e)=>handle(e)} id='phone' value={data.phone}
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Translate-1"
                    name="user_name required"
                    onChange={(e)=>handle(e)} id='translate' value={data.translate}
                  />
                </div>
                {/* <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:translate"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Translate-2"
                    name="user_name required"
                  />
                </div> */}
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:truck-delivery"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Delivery"
                    name="user_name required"
                    onChange={(e)=>handle(e)} id='delivery' value={data.delivery}
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <Icon
                      className=""
                      icon="mdi:file"
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Message"
                    name="user_message required"
                    onChange={(e)=>handle(e)} id='message' value={data.message}
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Send Message
                </button>
              </form>
            </div>
        </div>
    );
};

export default EPayment;