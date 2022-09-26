import React from "react";
import { Title, Message } from "./Helpers/helperFunc";

const DestManger = (props) => {
  // console.log("PROPS IN MNAGEER", props.place);
  // console.log("PROPS STATE", props.state);
  if (props.state === props.place.name) {
    return (
      <div className={`${props.className}_block`}>
        <div className={`${props.className}_title`}>This is the place</div>
        <div className={`${props.className}_msg`}>
          <Message message={props.place} className='msgCapture' />
        </div>
      </div>
    );
  }
};

export default DestManger;
