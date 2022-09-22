import React from "react";

const CrewManager = (props) => {
  const { role, name, bio } = props.people;
  return (
    <div className='crew_bg'>
      <h2 className='role'>{role}</h2>
      <h1 className='name'>{name}</h1>
      <p className='bio'>{bio}</p>
    </div>
  );
};

export default CrewManager;
