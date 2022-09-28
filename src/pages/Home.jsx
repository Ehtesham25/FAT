import React from "react";
import {
  FaBirthdayCake,
  FaMapPin,
  FaLink,
  FaCalendarDay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import cake from "../assets/cake.png";
import { Event } from "../components";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <img src={cake} alt="birthday" />
        <div className="body">
          <p className="movie_heading">movie night</p>
          <p className="hosted_heading">hosted by Elysia</p>
          <div className="wrapper">
            <strong>
              14 responses <strong className="response">see guests</strong>
            </strong>
            <button className="invite">
              <FaBirthdayCake /> {"  "}
              Invite
            </button>
          </div>
          <Event Icon={FaCalendarDay} />
          <Event Icon={FaMapPin} />
          <Event Icon={FaLink} />
        </div>
      </div>
      <Link to="/create" className="account">
        create my event
      </Link>
    </div>
  );
};

export default Home;
