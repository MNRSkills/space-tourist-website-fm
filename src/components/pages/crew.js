import React, { useState, useEffect } from "react";
import data from "../../data.json";
import CrewManager from "../Manager/crewManager";
import {SliderBtn} from "../Manager/Helpers/helperFunc";

function Crew() {
  const [crew, setMember] = useState([]);
  const [crewName, setCrewName] = useState("");
  console.log("THE CREW FROM MAIN", crew)

  useEffect(() => {
    setMember(data.crew);
  }, []);
  return (
    <div className='crewName'>
      <SliderBtn
        onChange={(e) => setCrewName(e.target.innerHTML)}
        value={crewName}
        className={"dest-nav"}
      />
      {crew.map((crewMember, index) => {
        return <CrewManager people={crewMember} key={index} />;
      })}
    </div>
  );
}

export default Crew;
