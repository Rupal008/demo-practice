import React from 'react';
import { Icon } from "@iconify/react";
import {useRef} from "react"
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";

const EPayment = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("succesfully");

    emailjs
      .sendForm('service_3cfyo3n', 'template_xt1ztwq', form.current, {
        publicKey: 'FohGakYxSK5btaCcX',
      })
      .then(
        (result) => {
          console.log(result.text);
        },(error) => {
          console.log( error.text);
        });
        e.target.reset();
  };
    return (
        <div>
             <div className="w-1/2 pr-8">
              <div>
                <h2 className="text-3xl font-bold mb-10 text-white sm:text-center lg:text-left">
                  Get in touch
                </h2>
                <p className="text-white mb-10 sm:text-center lg:text-left">
                  Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo
                  vel. Nec viverra commodo at convallis faucibus amet. Aliquam a
                  id aliquam pulvinar neque.
                </p>
              </div>
              <form onSubmit={sendEmail} ref={form}>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="fa6-solid:user" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Name"
                    name="user_name required"
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
                  />
                </div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Icon icon="mdi:cellphone" />
                  </span>
                  <input
                    type="text"
                    className="pl-8 border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Phone"
                    name="user_phone required"
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
                    placeholder="Translate-2"
                    name="user_name required"
                  />
                </div>
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