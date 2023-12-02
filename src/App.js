import { React } from "react";
// import Amazon from "./Amazon";
// import Day3Practice from "./Day3Practice";
import HomeNav from "./components/HomeNav";
import { Routes, Route } from "react-router-dom";
import HomeSection1 from "./components/HomeSection1";
import Season1 from "./components/Season1";
import Season2 from "./components/Season2";
import Season3 from "./components/Season3";
import Season4 from "./components/Season4";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <HomeNav />
      <Routes>
        <Route exact path="/" element={<HomeSection1 />} />
        <Route path="/Season1" element={<Season1 />} />
        <Route path="/Season2" element={<Season2 />} />
        <Route path="/Season3" element={<Season3 />} />
        <Route path="/Season4" element={<Season4 />} />
        <Route path="/Shorts" element={"asif"} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
