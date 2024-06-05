import React, { useState } from 'react';
import './Applyleave.css'; // Import the CSS file

const LeaveForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form values using the state variables
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Leave Type:', leaveType);
    console.log('Reason:', reason);
  };

  return (
    <div className="container">
    <form1 onSubmit={handleSubmit}>
    <h4>Apply Leave </h4>
      <hr className="bg-success border-2 border-top border-success" />
     <div className='card'>
      <div >
        <label htmlFor="startDate">From Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">To Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="leaveType">Leave Type:</label>
        <select
          id="leaveType"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          required
        >
          <option value="">Select Leave Type</option>
          <option value="sick">Earned leave</option>
          <option value="vacation">Casual leave</option>
          <option value="personal">Sick leave</option>
        </select>
      </div>
      <div>
        <label htmlFor="reason">Reason:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      </div>  
    </form1>
    </div>

  );
};

export default LeaveForm;
