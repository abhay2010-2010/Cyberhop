import React from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  // Expense Data for Chart
  const navigate=useNavigate()
  const data = {
    labels: ["Food", "Shopping", "Housing", "Transportation", "Vehicle"],
    datasets: [
      {
        label: "Expenses",
        data: [872.4, 1378.2, 928.5, 420.7, 520.0], // Example values
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4" style={{ width: "250px", height: "100vh" }}>
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="rounded-circle"
            width="80"
          />
          <h4 className="mt-2">Samantha</h4>
          <p className="text-light small">Samanthae@email.com</p>
        </div>

        {/* Sidebar Menu */}
        <ul className="list-unstyled mt-4">
          {["Dashboard", "Expenses", "Wallets", "Summary", "Accounts", "Settings"].map((item, index) => (
            <li key={index} className="p-2">
              <a href="#" className="text-white text-decoration-none d-block fs-3">{item}</a>
            </li>
          ))}
        </ul>
        <button 
  className="btn btn-danger mt-auto fs-4" 
  style={{ width: "70%" }} 
  onClick={handleLogout}
>
  Logout
</button>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-4">
        <h2>Expenses</h2>
        <p className="text-muted">01 - 25 March, 2020</p>

        {/* Chart Section */}
        <div className="mb-4">
          <Bar data={data} />
        </div>

        {/* Transaction List */}
        <div className="bg-white p-3 rounded shadow-sm">
          <h5 className="fs-3">Today</h5>
          {[
            { name: "Grocery", amount: "-326.800", time: "5:12 PM", color: "#36A2EB" },
            { name: "Transportation", amount: "-15.000", time: "5:12 PM", color: "#FF6384" },
            { name: "Housing", amount: "-185.750", time: "5:12 PM", color: "#FFCE56" },
          ].map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center fs-4">
                <div
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px", backgroundColor: item.color }}
                ></div>
                <div>
                  <strong>{item.name}</strong>
                  <p className="mb-0 text-muted small">{item.time}</p>
                </div>
              </div>
              <span className="text-danger">{item.amount}</span>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-4">
          <h5 className="fs-3">Where your money goes?</h5>
          {[
            { name: "Food and Drinks", value: 872.4 },
            { name: "Shopping", value: 1378.2 },
            { name: "Housing", value: 928.5 },
            { name: "Transportation", value: 420.7 },
            { name: "Vehicle", value: 520.0 },
          ].map((item, index) => (
            <div key={index} className="mb-2">
              <div className="d-flex justify-content-between">
                <span className="fs-5">{item.name}</span>
                <span>{item.value}</span>
              </div>
              <div className="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${(item.value / 1500) * 100}%`, backgroundColor: "#36A2EB" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
