import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Layout from "./components/Layout/layout";
import Destination from "./components/pages/destination";
import Navigation from "./components/Layout/navigation";

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </div>
  );
};

export default App;
