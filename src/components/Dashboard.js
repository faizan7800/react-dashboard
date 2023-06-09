import React from "react";
import "../styles/Dashboard.css";
import ProgressBar from "./ProgressBar";

// Import react-circular-progressbar module and styles
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";
function Dashboard({ start, end, val, color }) {
  return (
    <div className="dashboard">
      <ProgressBar>
        <ChangingProgressProvider values={[{ val }]}>
          {(value) => (
            <CircularProgressbarWithChildren
              value={(val / end) * 100}
              text={`${val}%`}
              circleRatio={0.7}
              styles={{
                trail: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                path: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                  stroke: "blue",
                },
                text: {
                  fill: "#ddd",
                },
              }}
            >
              <RadialSeparators
                count={100}
                style={{
                  background: "rgb(6, 6, 44)",
                  width: "2px",
                  // This needs to be equal to props.strokeWidth
                  height: `${10}%`,
                }}
              />
            </CircularProgressbarWithChildren>
          )}
        </ChangingProgressProvider>
      </ProgressBar>
      <div style={{ color: `${color}` }} className="dashboard__progressbarText">
        <p>${start}</p>
        <p>${end}</p>
      </div>
    </div>
  );
}

export default Dashboard;
