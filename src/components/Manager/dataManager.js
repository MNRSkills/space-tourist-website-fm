import React from "react";
import data from "../../data.json";

function DataManger(props) {
  console.log("Thiis is the crew", props.crewMember);
  console.log("These are the places", props.location);
  return <div className='dataManger'> {}</div>;
}

export default DataManger;
