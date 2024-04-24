import Navbar from "./components/navbar.jsx";
import "./style.css";
import Main from "./components/main.jsx";
import OurMission from "./components/our-mission.jsx";
import { FaSpaceAwesome } from "react-icons/fa6";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Main />
      <OurMission />
      <div id="footer">
        <ul>
          <li>Technology</li>
          <li>Created by Agus Salman</li>
          <li>Web Design @2022</li>
          <li>Supported By</li>
          <li>
            <FaSpaceAwesome />
          </li>
          <li>ORBIT-X</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
