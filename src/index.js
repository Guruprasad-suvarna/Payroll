import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import App from "./App";
import AutoTrack from "./pages/Attendance Tracking/AutoTrack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className="main">
      <Header />
      {/* <AutoTrack/> */}
      <App />
    </div>
  </div>
);
