import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  

  return (
    <div className="shadow-lg border-2 border-[#f1d0c9] rounded-lg p-5 flex flex-col gap-3 hover:scale-105 transition-all">
      <div className="h-60">
        <img className="rounded-lg w-full h-full" src={img} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex flex-row justify-between text-[#FF3811] font-bold">
          <p>
            Price: $<span>{price}</span>
          </p>
          <Link to={`/bookService/${service._id}`} className="cursor-pointer">
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
