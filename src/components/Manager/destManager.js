import React from "react";
import { Title, Message } from "./Helpers/helperFunc";

const DestManger = (props) => {
  console.log("PROPS IN MNAGEER", props.place.name);

  return (
    <div className='destinationItems'>
      <Title title={props.place.title} />
      <Message message={props.place} />
    </div>
  );
};

export default DestManger;
