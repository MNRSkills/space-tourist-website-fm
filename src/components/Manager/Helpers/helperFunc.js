export const SliderBtn = (props) => {
  //NEEDS STYLING
  return (
    <ul>
      <li onClick={(e) => props.nextPlace(e)}>
        <span>MOON</span>{" "}
      </li>
      <li onClick={(e) => props.nextPlace(e)}>
        <span>MARS</span>
      </li>
      <li onClick={(e) => props.nextPlace(e)}>
        <span>EUROPA</span>
      </li>
      <li onClick={(e) => props.nextPlace(e)}>
        <span>TITAN</span>
      </li>
    </ul>
  );
};

export const Message = (props) => {
  const { destination, distance, travel, images, name } = props.message;
  const { png, webp } = images;
  return (
    <div className='messageBoard'>
      <div>
        <img src='./assets/destination/images-europa.png' alt='sorry not yet' />
      </div>
      <h3>{name}</h3>
      <p>{destination}</p>
      <div>
        <span>AVG.DISTANCE</span>
        <h4>{distance}</h4>
        <span>EST. TRAVEL TIME</span>
        <h4>{travel}</h4>
      </div>
    </div>
  );
};

// export default Message;

//Fix the capitalization
export const Title = (props) => {
  return <div>{props.title}</div>;
};
