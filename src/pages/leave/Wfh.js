import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LeaveForm from './Applyleave';
import './Wfh.css';

const Wfh = () => {
  let navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState({
    pendingApproval: false,
    approved: false,
    rejected: false,
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStatusChange = (option) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [option]: !prevStatus[option],
    }));
  };

  const apply = (event) => {
    event.preventDefault();
    // Generate the code based on form data
    const code = `Employee ID: ${employeeId}\nDepartment: ${department}\nStatus: ${JSON.stringify(status)}`;
    setGeneratedCode(code);

    navigate("/applyWfh");
    // navigate("/leavedetails");
  };

  return (
    <div className='container'>
       <h4>WFH Management </h4>
      <hr className="bg-success border-2 border-top border-success" />
    {/* <div className="leav-container">
        <h2>Leave Management</h2>
      <form className="leave-card" onSubmit={apply}>
      
        <div>
           
          <label htmlFor="employeeId">Employee ID: 2000080631</label> */}
          {/* <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          /> */}
        {/* </div>
        <div>
          <label htmlFor="department">Department: BFS</label> */}
          {/* <input
            type="text"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
        //   /> */}
        {/* // </div> */}
        {/* // <div>
        //   <label>Status: </label>
        //   <div>
        //     <label>
        //       <input */}
        {/* //         type="checkbox"
        //         checked={status.pendingApproval}
        //         onChange={() => handleStatusChange('pendingApproval')}
          //     />
          //     Pending Approval
          //   </label>
          // </div> */}
          {/* // <div>
          //   <label>
          //     <input */}
          {/* //       type="checkbox"
          //       checked={status.approved}
          //       onChange={() => handleStatusChange('approved')}
          //     />
          //     Approved
          //   </label>
          // </div> */}
          {/* // <div>
          //   <label>
          //     <input
          //       type="checkbox" */}
          {/* //       checked={status.rejected}
          //       onChange={() => handleStatusChange('rejected')}
          //     />
          //     Rejected
      //       </label>
      //     </div> */}
      {/* //   </div> */}
      {/* // </form> */}
      {/* <div className="leave-buttons"> */}
        {/* <button type="button" onClick={() => setGeneratedCode('')}>Leave Details</button> */}
        {/* <button type="button"onClick={apply}>Applyleave</button> */}
        <div class="card">
  <div class="card-header">
    WFH Management
  </div>
  <div class="card-body">
    <h5 class="card-title">Employee ID: 2000080632</h5><br/>
    <h5 class="card-title">Vertical: H & I</h5><br/>
    {/* <h5 class="card-title">Status:</h5> */}
   
    

<div class="form-group">
<label for="status">Status :: </label><br/>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="status" id="pending" value="pending"/>
<label class="form-check-label" for="pending">Pending</label><br/>
</div><br/>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="status" id="approve" value="approve"/>
<label class="form-check-label" for="approve">Approve</label><br/>
</div><br/>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="status" id="rejected" value="rejected"/>
<label class="form-check-label" for="rejected">Rejected</label>
</div>
</div>

    {/* <button type="button" class="btn btn-primary">Work from home</button> */}
    <button type="button" class="btn btn-primary" onClick={apply}>Apply WFH</button>

    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>  
{/* <span>
  <button onClick={apply}>Applyleave</button>
</span> */}

      </div>
      // {generatedCode && (
      //   <div className="generated-code">
      //    <LeaveForm/>
      //     <pre>{generatedCode}</pre>
      //   </div>
    //   )}
    // </div>
    // </div>
  );
};

export default Wfh;
