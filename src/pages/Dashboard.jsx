import React from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
import Stats from "../assets/Stats.png"
import Users from "../assets/Users.png"
import Illustartion from "../assets/Illustration.png"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  // Expense Data for Chart
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div className="d-flex" style={{backgroundColor:"black"}}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-4" style={{ width: "400px", height: "100vh" }}>
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
      <div
        className=" d-flex"
        style={{
          width: "1060px",
          height: "700px",
          marginLeft: "100px",
          backgroundColor:"white",
          borderRadius: "40px",
          overflow: "hidden", // Prevents child elements from overflowing rounded corners
          marginTop: "50px"
        }}
      >
        {/* Left Section (Expenses & Transactions) */}
        <div className="p-5" style={{ padding: "60px", flex: 1 }}>
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="mb-0">Expenses</h2>
              <p className="text-muted">01 - 25 March, 2020</p>
            </div>
            <img src={Users} alt="users" style={{ width: "150px", height: "50px" }} />
          </div>

          {/* Chart Section */}
          <div className="text-center my-4">
            <img src={Stats} alt="Chart" style={{ width: "90%" }} />
          </div>

          {/* Transaction List */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="fs-5">Today</h5>
            {[
              { name: "Grocery", amount: "-326.800", time: "5:12 PM", color: "#36A2EB" },
              { name: "Transportation", amount: "-15.000", time: "5:12 PM", color: "#FF6384" },
              { name: "Housing", amount: "-185.750", time: "5:12 PM", color: "#FFCE56" },
            ].map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2 p-2 rounded" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle me-3"
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
            <h5 className="fs-5">Monday 23 March2020</h5>
            {[
              { name: "Food & Drink", amount: "-5456.800", time: "5:12 PM", color: "#36A2EB" },
              { name: "Entertainment", amount: "-231.000", time: "5:12 PM", color: "#FF6384" }

            ].map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2 p-2 rounded" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle me-3"
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
        </div>

        {/* Right Section (Where Your Money Goes) */}
        <div className="p-5" style={{ padding: "100px", flex: 1,maxWidth:"400px",backgroundColor:"#f9fafc" }}>
          <h6 className="fs-5 p-2">Where Your Money Goes?</h6>
          {[
            { name: "Food and Drinks", value: 872.4 },
            { name: "Shopping", value: 1378.2 },
            { name: "Housing", value: 928.5 },
            { name: "Transportation", value: 420.7 },
            { name: "Vehicle", value: 520.0 },
          ].map((item, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between p-2">
                <span className="fs-6">{item.name}</span>
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
          <div style={{ backgroundColor: "",marginTop:"50px" }}>

            <img src={Illustartion} alt="illustration" />
            <h5 style={{marginTop:"10px"}}>Save your Money</h5>
            <p>Officia aspernatur ab error molestias maxime laboriosam vel quam facere, ipsum ullam odit quibusdam libero accusantium aliquam quis labore quae quisquam distinctio!</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
