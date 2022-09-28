import React from "react";

import { FaCalendarDay, FaGreaterThan } from "react-icons/fa";
import "./event.css";

const Event = ({ Icon }) => {
  return (
    <div className="header">
      <div className="icon">
        <Icon />
      </div>
      <div className="date_div">
        <span className="start_date">18 August 6:00PM</span>
        <span className="end_date">to 19 august 1:00 UTC+10</span>
      </div>
      <FaGreaterThan />
    </div>
  );
};

export default Event;
