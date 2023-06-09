import React from "react";

function ProgressBar(props) {
  return (
    <div>
      <div style={{ display: "flex", width: "70%", margin: "0px auto" }}>
        <div>{props.children}</div>
        <div>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
