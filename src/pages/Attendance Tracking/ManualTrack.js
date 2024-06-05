import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AutoTrack.css";

const ManualTrack = () => {
//   const [members, setMembers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     loadMembers();
//   }, [members]);

//   const loadMembers = async () => {
//     const result = await axios.get("http://localhost:8080/api/member/all");
//     setMembers(result.data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

  return (
    <div className="container">
      <div className="all-members">
        <h4>Manual Time Tracker</h4>
        <hr />

        <section className="search-bar">
          <form
            className=" d-flex justify-content-center col-md-4 mx-auto my-4"
            // onSubmit={handleSubmit}
          >
            <input
              className="form-control py-2 rounded-pill shadow text-center"
              type="search"
              placeholder="Search Date..  🔍"
              id="search"
            //   onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </section>

        <section className="py-3 px-2">
          <table className="table table-striped shadow text-center">
            <thead className="table-dark">
            <tr>
                <th scope="col">Employee Id</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Date</th>
                <th scope="col">InTime</th>
                <th scope="col">OutTime</th>
                <th scope="col">Total Hours</th>
                <th scope="col">Attended Hours</th>
              </tr>
              </thead>

              <tr
           >
          <td >POORNESH HS</td>

          <td>2000080632</td>

          <td>14-07-2022</td>

          <td>9.00</td>

          <td>18.00</td>

          <td>9.15</td>
          <td>9.00</td>
         
        </tr>
        <tr
           >
          <td >POORNESH HS</td>

          <td>2000080632</td>

          <td>14-07-2022</td>

          <td>9.00</td>

          <td>18.00</td>

          <td>9.15</td>
          <td>9.00</td>
         
        </tr>
        <tr
           >
          <td>POORNESH HS</td>

          <td>2000080632</td>

          <td>14-07-2022</td>

          <td>9.00</td>

          <td>18.00</td>

          <td>9.15</td>
          <td>9.00</td>
         
        </tr>
        
        
        
            
            {/* <tbody>
              {members
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.memberName.toLowerCase().includes(search);
                })
                .map((member, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{member.memberId}</th>
                      <td>{member.memberName}</td>
                      <td>{member.state}</td>
                      <td>{member.emailId}</td>
                      <td>{member.contactNo}</td>
                      <td>{member.plan.planName}</td>
                      <td>{member.plan.insuredAmount}</td>
                      <td>
                        <Link
                          to={`/updateMember/${member.memberId}`}
                          className="btn btn-warning btn-sm"
                        >
                          Update
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody> */}
          </table>
          <div className="col-12 text-center mt-5">
          <button type="submit" className="btn btn-success btn-lg shadow px-4">
            Edit
          </button>
        </div>
        </section>
      </div>
    </div>
  );
};

export default ManualTrack;
