import React from "react";
import "../styles/Card.css";
import Dashboard from "./Dashboard";
import InfoIcon from "@mui/icons-material/Info";
function Card({ title, start, end, value, equity, color }) {
  return (
    <div>
      <div className="card__wrapper">
        <h3>{title}</h3>
        <hr />
        {end > 0 ? (
          <>
            <Dashboard start={start} end={end} val={value} color={color} />
            <p>Equity Breach Level : ${equity}</p>
          </>
        ) : (
          <>
            <h1>{value}</h1>
          </>
        )}

        <InfoIcon className="card__info" fontSize="small" />
      </div>
    </div>
  );
}

export default Card;
