import React from "react";
import Greeting from "../Greeting";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <div className="side-nav-button p-2 me-3 text-light">

          <i class="fa-regular fa-address-card" ></i>
          
        </div>

        <a className="navbar-brand px-4">Payroll System</a>

        <ul className="navbar-nav me-auto">
          <li className="navbar-brand px-4">
            <a className="nav-link"><Greeting/></a>
          </li>
        </ul>

        <div className="profile-logo dropdown d-flex mx-5">
          <button
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i class="fa-solid fa-user px-2"></i>
            User
          </button>
          <ul className="dropdown-menu dropdown-menu-light">
            <li>
              <a href="#" className="dropdown-item">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
