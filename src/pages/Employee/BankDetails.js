import { toBeEmptyDOMElement } from "@testing-library/jest-dom/matchers";
import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import "./BankDetails.css";

const BankDetails = () => {
    return(
    
     <div className="container">
       <h4>Bank Details</h4>
      <hr className="bg-success border-2 border-top border-success" />
        <table class="table table-bordered ">
      <tr class="table-primary">
        <th class="table-primary">Employee Name</th>
        <td>POORNESH HS</td>
      </tr>
      <tr class="table-secondary">
        <th class="table-secondary">Employee ID</th>
        <td>80632</td>
      </tr>
      <tr class="table-success">
        <th class="table-success">Bank Name</th>
        <td>HDFC</td>
      </tr>
      <tr class="table-danger">
        <th class="table-danger">Account Number</th>
        <td>1234567890</td>
      </tr>
      <tr class="table-warning">
        <th class="table-warning">IFSC Code</th>
        <td>987654321</td>
      </tr>
      <tr class="table-info">
        <th class="table-info">Account Type</th>
        <td>Savings Account</td>
      </tr>
      <tr class="table-light">
        <th class="table-light">Branch Name</th>
        <td>WhiteField</td>
      </tr>
    </table>

    </div>
    );
}

export default BankDetails;


