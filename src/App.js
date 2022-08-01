import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Layout from "./components/Layout/layout";
import Destination from "./components/pages/destination";
import Crew from "./components/pages/crew";

const App = () => {
  return (
    <div className='App'>
      <Layout>
        {/* <DataManger /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
