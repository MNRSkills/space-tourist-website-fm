import React, { useState, useEffect } from "react";
import data from "../../data.json";
import DataManger from "../Manager/dataManager";

function Crew() {
  const [crew, setMember] = useState([]);

  useEffect(() => {
    setMember(data.crew);
  }, []);
  return (
    <div className='crewName'>
      This is the crew page <DataManger crewMember={crew} />
    </div>
  );
}

export default Crew;
