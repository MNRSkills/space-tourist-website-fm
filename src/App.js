import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Navigation from "./components/navigation";
const App = () => {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/' elemant={Home}/>
      </Routes>
    </div>
  );
};

export default App;
