import React, { useState, useEffect } from "react";
import data from "../../data.json";
import DestManger from "../../components/Manager/destManager";
import { SliderBtn } from "../Manager/Helpers/helperFunc";

const Destination = () => {
  const [destination, setPlace] = useState([]);
  const [destName, setDetName] = useState("MOON");
  console.log("STATE DEST", destName);
  console.log("destination", destination);
  //HERE WE WILL CHECK STATE FOR CHANGES IN NAME FOR THE SWITCH TO EACH PLACE
  //

  useEffect(() => {
    setPlace(data.destinations);
  }, []);
  return (
    <div className='destination page'>
      <SliderBtn nextPlace={(e) => setDetName(e.target)} />
      {destination.map((place, index) => {
        return <DestManger place={place} key={index} />;
      })}
    </div>
  );
};

export default Destination;
