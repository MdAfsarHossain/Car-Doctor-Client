import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  // Fetch services data from an API
  useEffect(() => {
    axios.get("https://car-doctor-server-zeta-bice.vercel.app/services").then((data) => {
      setServices(data.data);
    });
  }, []);

  return services;
};

export default useServices;
