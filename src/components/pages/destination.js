import data from "../../data.json"
import DataManger from "../Manager/dataManager";
const Destination = (props) => {


  return (
    <div className=''>
        {data.destinations.map((item, index) => {
            return <DataManger item={item} key={index}/>
        })}
    </div>
  );
};

export default Destination;
