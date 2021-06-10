import React from "react";
import { workData } from "../data";
const work = () => {
  return (
    <div id="work">
      <p className="intro-low heading">Work</p>
      <div className="edu-contain">
        {workData.map((work, index) => {
          const { Organisation, role, start, end, description } = work;
          return (
            <div key={index} className="school">
              <h1>{Organisation}</h1>
              <h2>{role}</h2>
              <h2>
                {start}-{end}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="space"></div>
      <hr />
    </div>
  );
};

export default work;
