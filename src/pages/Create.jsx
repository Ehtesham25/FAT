import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../components";
import "./create.css";

const Create = () => {
  return (
    <div className="create">
      <h2>Create Your First Event.</h2>
      <form className="form">
        <Input type="text" placeholder="Event Name" />
        <Input type="text" placeholder="Host Name" />
        <div className="pick_date">
          <Input type="date" placeholder="Start Date" />
          <Input type="date" placeholder="End Date" />
        </div>
        <Input type="text" placeholder="Location" />
        <Input type="file" placeholder="Image" accept />

        <div className="submit_div">
          <Link to="/" className="cancel">
            cancel
          </Link>
          <Link className="submit">create</Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
