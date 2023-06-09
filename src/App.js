import "./App.css";
import Card from "./components/Card";
import RulesCard from "./components/RulesCard";

function App() {
  return (
    <div className="app">
      <div className="app__row">
        <Card
          title="DAILY LOSS LIMIT"
          start="0"
          end={3965.48}
          value={0}
          equity="95,171.44"
          color="red"
        />
        <Card
          title="PROFIT TARGET"
          start="0"
          end={10000.0}
          value={0}
          equity="110,000.00"
          color="green"
        />
        <Card
          title="MAXIMUM LOSS LIMIT"
          start="0"
          end={5000.0}
          value={863.65}
          equity="95,000.57"
          color="red"
        />
      </div>
      <div className="app__row">
        <div className="app__column">
          <Card
            title="EQUITY"
            start="0"
            end={0}
            value="$99,136.92"
            equity=""
            color=""
          />
          <Card
            title="BALANCE"
            start="0"
            end={0}
            value="$99,136.92"
            equity=""
            color=""
          />
        </div>
        <RulesCard title="PROGRAM RULES" />
        <div className="app__column">
          <Card
            title="HIGH WATER MARK"
            start="0"
            end={0}
            value="$100,000.57"
            equity=""
            color=""
          />
          <Card
            title="PROJECTED ANNUAL RETURN"
            start="0"
            end={0}
            value="-$9,000.69"
            equity=""
            color=""
          />
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Trader Statistics:</h2>
      <div className="app__row">
        <Card
          title="AVERAGE WIN"
          start="0"
          end={0}
          value="$365.25"
          equity=""
          color=""
        />
        <Card
          title="WIN RATE"
          start="0"
          end={0}
          value="62%"
          equity=""
          color=""
        />
        <Card
          title="AVERAGE LOSS"
          start="0"
          end={0}
          value="$225.80"
          equity=""
          color=""
        />
      </div>
    </div>
  );
}

export default App;
