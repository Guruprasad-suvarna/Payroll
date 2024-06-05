import React from 'react';
import'./Payslip.css';
import { RiEyeLine, RiDownloadLine } from 'react-icons/ri';
const PaySlip = () => {
  const years = [2021, 2022, 2023, 2024]; // Array of available years

  return (
    <div className='container'>
       <h4>Payroll</h4>
      <hr className="bg-success border-2 border-top border-success" />
    <div className="pay-slip-card">
      <table>
        <tr>
          <th>EMP_Name</th>
          <th>EMP_ID</th>
          <th>DOJ</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Employement Status</th>
        </tr>
        <tr>
          <td>M Pavan Kumar</td>
          <td>200007828</td>
          <td>14-07-2022</td>
          <td>Male</td>
          <td>14-05-2000</td>
          <td>A</td>
        </tr>
      </table>
    </div>
    <div className="payslip-card">
    <h4>Pay slip </h4>
      <hr className="bg-success border-2 border-top border-success" />
      <div className="payslip-footer">
      <div className="payslip-footer-inputs">
        <label>Monthly slip</label>
          <input type="text" placeholder="Year"  />
          
          <input type="text" placeholder="Month" />
        </div>
        <div className="payslip-footer-icons">
          <RiEyeLine size={20} />
          <RiDownloadLine size={20} />
        </div><br/>

        <div className="payslip-footer-inputs">
          <label>Full Year Slips</label>
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="Year" />
        </div>
        <div className="payslip-footer-icons">
          <RiEyeLine size={20} />
          <RiDownloadLine size={20} />
        </div>

<br/>
        <div>
      
        
      
    </div>
      </div>
    </div>
 </div>
  );
};

export default PaySlip;