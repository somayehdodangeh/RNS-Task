import "./Dashboard.css";
import Header from "../Header/Header";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Header
        children={"Dashboard"}
        desc={"You can edit/delete the charts from left sidebar (Inspector)"}
      />
      <div className="chartHolder">
        <div className="bigchart">{props.pieState}</div>
        <div className="bigchart">{props.doughnutState}</div>
      </div>
    </div>
  );
};

export default Dashboard;
