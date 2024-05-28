import React from "react";
import Aside from "./aside.jsx";
import Section from "./section.jsx";

const main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-12">
          <Aside />
        </div>
        <div className="col-xl-9 col-lg-12">
          <Section />
        </div>
      </div>
    </div>
  );
};

export default main;
