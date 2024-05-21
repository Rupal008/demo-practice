
import React from "react";
import { CiEdit } from "react-icons/ci";
import comma from "../assets/Image/comma.png"
const Blog = () => {
  return (
    <div>
       <div className=" lg:h-[75rem] md:h-[55rem] sm:h-[55rem] min-[25px]:h-[66rem]">
        <div className="flex items-center justify-center h-screen">
          <div className="relative mt-[20%] h-3/4">
            <h1 className="text-4xl absolute -top-[15%] left-[35%] text-black font-bold">
              Translation Process
            </h1>
            <div className="hidden md:block lg:block">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-2 border-dashed border-[#3D65FF] lg:h-[30rem]"></div>
              <div className="relative flex items-center py-3 px-3 ">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <img src={comma} alt=""
                    className="ml-3 mt-4"
                    icon="fluent:comma-24-filled"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <CiEdit
                    className="ml-2 mt-2"
                    icon="mdi:rename"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <CiEdit
                    className="ml-2 mt-2"
                    icon="mdi:email"
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </div>
                <div className="relative -left-[15%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] left-[96.5%] h-6 w-6 bg-[#FFFFFF] transform rotate-[45deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="absolute  left-[46.5%]  w-12 h-12 bg-[#3D65FF] rounded-full">
                  <CiEdit
                    className="ml-2 mt-2"
                    icon="mdi:headset-mic"
                    style={{ color: "white", fontSize: "30px" }}
                  />{" "}
                </div>
                <div className="relative left-[56%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-[40%] -left-[2.7%] h-6 w-6 bg-[#FFFFFF] transform rotate-[225deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="md:hidden sm:block">
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-3 px-3">
                <div className="relative left-[20%] w-[59%] bg-[#FFFFFF] rounded-lg text-white p-2">
                  <div>
                    <h1 className="text-xl text-black font-bold mb-2">
                      Get a quote
                    </h1>
                    <p className="text-gray-700 mb-4">
                      Email your documents to info@lettercrafts.org or fill up a
                      short form to get a quote in 30 mins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
