import React, { useState, useEffect } from "react";
import data from "../../data.json";
import CrewManager from "../Manager/crewManager";

function Crew() {
  const [crew, setMember] = useState([]);

  useEffect(() => {
    setMember(data.crew);
  }, []);
  return (
    <div className='crewName'>
      {crew.map((crewMember, index) => {
        return <CrewManager people={crewMember} key={index} />;
      })}
    </div>
  );
}

export default Crew;
