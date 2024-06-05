import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddMember from "./pages/Member/AddMember";
import ProcessClaim from "./pages/Claim/ProcessClaim";
import Claims from "./pages/Claim/Claims";
import SideNav from "./components/SideNav/SideNav";
import Login from "./pages/Login/Login";
import AutoTrack from "./pages/Attendance Tracking/AutoTrack";
import Profile from "./pages/Employee/Employee";
import BankDetails from "./pages/Employee/BankDetails";
import Documents from "./pages/Employee/Documents";
import ManualTrack from "./pages/Attendance Tracking/ManualTrack";
import PaySlip from "./pages/Payroll/Payslip";
import Leave from "./pages/leave/Leave";
import LeaveForm from "./pages/leave/Applyleave";
import TaxCalculator from "./pages/Payroll/TaxCalculator";
import Wfh from "./pages/leave/Wfh";
import ApplyWfh from "./pages/leave/ApplyWfh";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SideNav />}>
        
        <Route path="/profile" element={<Profile/>} />  
        <Route path="/bankdetails" element={<BankDetails/>} />    
          <Route path="login" element={<Login />} />
          <Route path="autotrack" element={<AutoTrack />} />
          <Route path="manualtrack" element={<ManualTrack/>} />
          <Route path="payslip" element={<PaySlip />} />
          <Route path="tax" element={<TaxCalculator />} />
          <Route path="/documents" element={<Documents/>} />
          <Route path="addMember" element={<AddMember />} />
          <Route path="leave" element={<Leave />} />
          <Route path="/applyleave" element={<LeaveForm/>} />
          <Route path="/wfh" element={<Wfh/>} />
          <Route path="/applywfh" element={<ApplyWfh/>} />
          
        </Route>
        
        
      
      </Routes>
    </BrowserRouter>
  );
}
