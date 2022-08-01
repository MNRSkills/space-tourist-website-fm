import React, { useState, useEffect } from "react";
import data from "../../data.json";

const Destination = () => {
  const [destination, setPlace] = useState([]);
  console.log("This is the state destination", destination);

  useEffect(() => {
    setPlace(data.destinations);
  }, []);
  return <div className='destination page'>This is the destination page</div>;
};

export default Destination;
