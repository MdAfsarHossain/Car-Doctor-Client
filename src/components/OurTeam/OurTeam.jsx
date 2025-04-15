import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";

const OurTeam = () => {
  return (
    <div className="mt-16 mb-10">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#FF3811] font-bold text-2xl">Team</p>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="w-[750px] text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {/* Card-1 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="h-60 rounded-lg">
            <img
              className="w-full h-full rounded-lg"
              src="/team/1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-2xl text-[#444444]">
              Car Engine Plug
            </h1>
            <p className="text-[#737373] font-bold">Engine Expert</p>
            <div className="flex flex-row justify-center items-center gap-3 mt-3 text-2xl">
              <FaFacebook className="cursor-pointer text-sky-700" />
              <FaTwitter className="cursor-pointer text-blue-500" />
              <BsLinkedin className="cursor-pointer text-blue-700" />
              <FaSquareInstagram className="cursor-pointer text-violet-500" />
            </div>
          </div>
        </div>

        {/* Card-2 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="h-60 rounded-lg">
            <img
              className="w-full h-full rounded-lg"
              src="/team/1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-2xl text-[#444444]">
              Car Engine Plug
            </h1>
            <p className="text-[#737373] font-bold">Engine Expert</p>
            <div className="flex flex-row justify-center items-center gap-3 mt-3 text-2xl">
              <FaFacebook className="cursor-pointer text-sky-700" />
              <FaTwitter className="cursor-pointer text-blue-500" />
              <BsLinkedin className="cursor-pointer text-blue-700" />
              <FaSquareInstagram className="cursor-pointer text-violet-500" />
            </div>
          </div>
        </div>

        {/* Card-3 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="h-60 rounded-lg">
            <img
              className="w-full h-full rounded-lg"
              src="/team/1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-2xl text-[#444444]">
              Car Engine Plug
            </h1>
            <p className="text-[#737373] font-bold">Engine Expert</p>
            <div className="flex flex-row justify-center items-center gap-3 mt-3 text-2xl">
              <FaFacebook className="cursor-pointer text-sky-700" />
              <FaTwitter className="cursor-pointer text-blue-500" />
              <BsLinkedin className="cursor-pointer text-blue-700" />
              <FaSquareInstagram className="cursor-pointer text-violet-500" />
            </div>
          </div>
        </div>

        {/* End of Card */}
      </div>
    </div>
  );
};

export default OurTeam;
