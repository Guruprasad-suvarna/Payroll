import React from "react";

import { Outlet, Link } from "react-router-dom";

import "./SideNav.css";




const SideNav = () => {

  return (

    <div className="app-side-nav bg-warning">

      <nav className="side-nav-content">

        <ul className="nav-list">




      <button

            className="btn btn-light dropdown-toggle"

           

            data-bs-toggle="dropdown"

          >

            <i class="fa-solid fa-user px-2"></i>

            Employee Details

          </button>

          <ul className="dropdown-menu dropdown-menu-light">

            <li>

              <a href="profile" className="dropdown-item">

                Profile

              </a>

              <a href="bankdetails" className="dropdown-item">

                Bank Details

              </a>

              <a href="documents" className="dropdown-item">

                Documents  

              </a>

             

            </li>

          </ul>

          <br></br><br></br><br></br>

          <button

            className="btn btn-light dropdown-toggle"

           

            data-bs-toggle="dropdown"

          >

            <i class="fa-solid fa-file-circle-plus px-2"></i>

            Payroll

          </button>

          <ul className="dropdown-menu dropdown-menu-light">

            <li>

              <a href="tax" className="dropdown-item">

                Tax Calculator

              </a>

              <a href="payslip" className="dropdown-item">

                Salary slip

              </a>

              <a href="###" className="dropdown-item">

                Investment Details  

              </a>

             

             

            </li>

          </ul>

          <br></br><br></br><br></br><br></br>




          <li className="nav-list-item">

            <i class="fa-solid fa-users"></i>

            <span>

              <Link to="autotrack">Attendance Tracker</Link>

            </span>

          </li>

          <br></br><br></br>




          <li className="nav-list-item">

            <i class="fa-solid fa-users"></i>

            <span>

              <Link to="manualtrack">Manual Attendance Tracker</Link>

            </span>

          </li>

          <br></br><br></br>

          <li className="nav-list-item">

            <i class="fa-solid fa-users"></i>

            <span>

              <Link to="leave">Leave Management</Link>

            </span>

          </li>

          <br></br><br></br>




          <li className="nav-list-item">

            <i class="fa-solid fa-users"></i>

            <span>

              <Link to="wfh">Work From Home Management</Link>

            </span>

          </li>

          <br></br><br></br>

          {/* <li className="nav-list-item">

<i class="fa-solid fa-users"></i>

<span>

  <Link to="applyleave">Applyleave</Link>

</span>

</li> */}

<br></br><br></br>




          {/* <button

            className="btn btn-light dropdown-toggle"

            data-bs-toggle="dropdown"

          >

            <i class="fa-solid fa-users"></i>

            Attendance Tracker

          </button>

          <ul className="dropdown-menu dropdown-menu-light">

            <li>

              <a href="####" className="dropdown-item">

                Auto Tracking

              </a>

              <a href="#####" className="dropdown-item">

                Manual Tracking

              </a>

              <a href="######" className="dropdown-item">

                Leave Management  

              </a>

              <a href="#######" className="dropdown-item">

                Work From Home Management  

              </a>

             

            </li>

          </ul>

          <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}





          {/* <li className="nav-list-item">

            <i class="fa-solid fa-users"></i>

            <span>

              <Link to="members">Attendance Tracker</Link>

            </span>

          </li> */}

         





          {/* <button

            className="btn btn-light dropdown-toggle"

           

            data-bs-toggle="dropdown"

          >

            <i class="fa-solid fa-user px-2"></i>

            Payroll

          </button>

          <ul className="dropdown-menu dropdown-menu-light">

            <li>

              <a href="#" className="dropdown-item">

                Tax Calculator

              </a>

              <a href="##" className="dropdown-item">

                Salary slip

              </a>

              <a href="###" className="dropdown-item">

                Investment Details  

              </a>

             

            </li>

          </ul> */}

          {/* <li className="nav-list-item">

            <i class="fa-solid fa-user-plus"></i>

            <span>

              <Link to="updateMember/:id">Random</Link>

            </span>

          </li> */}




          {/* <li className="nav-list-item log-out px-4">

            <i class="fa-solid fa-right-from-bracket"></i>

            <span>

              <Link to="login">Log Out</Link>

            </span>

          </li> */}

        </ul>

      </nav>




      <Outlet />

    </div>

  );

};




export default SideNav;