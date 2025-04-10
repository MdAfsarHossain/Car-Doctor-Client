// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  // const [services, setServices] = useState([]);

  // Fetch services data from an API
  // useEffect(() => {
  //   axios.get("http://localhost:5000/services").then((data) => {
  //     setServices(data.data);
  //   });
  // }, []);

  const services = useServices();

  return (
    <div className="mt-10 mb-10">
      {/* <p>{services.length}</p> */}
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#FF3811] font-bold text-2xl">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="w-[750px] text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {/* Card - 1 */}
        {services?.map((service) => 
          <Service
          key={service._id}
          service={service}
          ></Service>
        )}
        {/* End of cards */}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col justify-center items-center mb-20">
        <Link>
          <button className="btn text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] font-bold">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
