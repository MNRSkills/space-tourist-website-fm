import React, { useState, useEffect } from "react";
import data from "../../data.json";
import DataManger from "../Manager/dataManager";
const Destination = () => {
  const [destination, setPlace] = useState([]);

  useEffect(() => {
    setPlace(data.destinations);
  }, []);
  return (
    <div className='destination page'>
      This is the destination page <Destination location={destination} />
    </div>
  );
};

export default Destination;
