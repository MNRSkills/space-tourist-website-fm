export const SliderBtn = (props) => {
  //NEEDS STYLING
  return (
    <div className={`${props.className}_block`}>
      <ul className={`${props.className}_list`}>
        <li className={`${props.className}_list-name`} onClick={props.onChange}>
          Moon
        </li>

        <li className={`${props.className}_list-name`} onClick={props.onChange}>
          Mars
        </li>
        <li className={`${props.className}_list-name`} onClick={props.onChange}>
          <span>Europa</span>
        </li>
        <li className={`${props.className}_list-name`} onClick={props.onChange}>
          <span>Titan</span>
        </li>
      </ul>
    </div>
  );
};

//MESSAGES FOR EACH COMPONENT

export const Message = (props) => {
  const { description, distance, travel, images, name } = props.message;
  const { png, webp } = images;
  console.log("image", png);
  return (
    <div className={`${props.className}_msg-board`}>
      <div className={`${props.className}_left-side`}>
        <img src={`${png}`} alt='sorry not yet' />
      </div>
      <div className={`${props.className}_right-side`}>
        <h3 className={`${props.className}_name`}>{name}</h3>
        <p className={`${props.className}_para`}>{description}</p>
        <div className={`${props.className}_stats`}>
          <div className={`${props.className}_avg`}>
            <span>AVG.DISTANCE</span>
            <h4>{distance}</h4>
          </div>
          <div className={`${props.className}`}>
            <span>EST. TRAVEL TIME</span>
            <h4>{travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Message;

//Fix the capitalization
export const Title = (props) => {
  return <div>{props.title}</div>;
};
