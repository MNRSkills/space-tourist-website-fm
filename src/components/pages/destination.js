import React, { useState, useEffect } from "react";
import data from "../../data.json";
import DestManger from "../../components/Manager/destManager";
import { SliderBtn } from "../Manager/Helpers/helperFunc";
import "../../styles/destStyle.css";

const Destination = () => {
  const [destination, setPlace] = useState([]);
  const [destName, setDetName] = useState("Moon");
  // console.log("STATE DEST", destName);
  // console.log("destination", destination);
  //HERE WE WILL CHECK STATE FOR CHANGES IN NAME FOR THE SWITCH TO EACH PLACE
  //

  useEffect(() => {
    setPlace(data.destinations);
  }, []);
  return (
    <div className='destination-page dest-main'>
      <SliderBtn
        onChange={(e) => setDetName(e.target.innerHTML)}
        value={destName}
        className={"dest-nav"}
        // name={}
      />
      {destination.map((place, index) => {
        return (
          <DestManger
            place={place}
            key={index}
            className='dest-items'
            state={destName}
          />
        );
      })}
    </div>
  );
};

export default Destination;
