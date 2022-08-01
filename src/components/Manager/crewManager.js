import React from "react";

function CrewManager(props) {
  return (
    <div className='crew_bg'>
      <h2 className='role'>{props.people.role}</h2>
      <h1 className='name'>{props.people.name}</h1>
      <p className='bio'>{props.people.bio}</p>
    </div>
  );
}

export default CrewManager;
