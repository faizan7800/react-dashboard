import React from "react";
import "../styles/Card.css";
function RulesCard({ title }) {
  return (
    <div>
      <div className="card__wrapper">
        <h3>{title}</h3>
        <hr />
        <ul>
          <li>Profit Target (10%): 10,000</li>
          <li>Leverage 10:1</li>
          <li>Daily Loss Limit: 4% (hard breach)</li>
          <li>Max Trailing Drawdown: 5% (hard breach)</li>
          <li>Every Trade Must have a Stopless (soft breach)</li>
          <li>
            Close out all positions prior to 4PM EST on Fridays (soft breach)
          </li>
          <li>10 Maximum Open Lots with Risk (soft breach)</li>
        </ul>
      </div>
    </div>
  );
}

export default RulesCard;
