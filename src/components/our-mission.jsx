import React, { Fragment } from "react";
import style from "../style.css";
import Goes from "../images/goes-16.jpg";
import MainAreaComponent from "./main-area-component";
import Goes2 from "../images/goes-2..jpg";
import Container from "./container";
import { LiaAtomSolid } from "react-icons/lia";
import { CiSatellite1 } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";

function OurMission() {
  return (
    <div className="our-mission">
      <MainAreaComponent
        type="flex"
        title=" Our Mission"
        h2Text="GOES-16"
        ourMissionText={
          <Fragment>
            Improve weather forecasting on Earth, <br />
            provide cross-calibration for all <br />
            international satellites that monitor ocean <br />
            winds, and improve estimates of how ocean <br />
            winds, and improves estimates of how ocean <br />
            winds change throughout the day, around <br />
            the globe.
          </Fragment>
        }
        buttonList={
          <Fragment>
            <button className="blue-bg-btn">View All</button>
          </Fragment>
        }
        image={Goes}
      />
      <MainAreaComponent
        type="reverse"
        title="FUNCTION"
        h2Text="SATELLITE"
        ourMissionText={
          <Fragment>
            Gives light at right. Affects the balance of sea <br />
            water. Transmit television signals, cell phones, <br />
            and the internet. Transmits and receives <br />
            communication signals <br />
          </Fragment>
        }
        buttonList={
          <div className="button-list">
            <button className="blue-bg-btn">View All</button>
            <button className="blue-bg-btn">Submit</button>
          </div>
        }
        image={Goes2}
      />
      <div id="container-list">
        <Container
          title="LEO"
          text="300-1500 KM"
          span="Low Earth Orbit"
          icon={<LiaAtomSolid />}
        />
        <Container
          title="H - SPEED"
          text="22,235 ML"
          span="Orbit Geostasioner"
          icon={<CiSatellite1 />}
        />
        <Container
          title="EARTH"
          text="365 DAY"
          span="Orbit Periode"
          icon={<FaEarthAfrica />}
        />
      </div>
    </div>
  );
}

export default OurMission;
