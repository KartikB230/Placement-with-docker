import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
//import {gapi} from 'gapi-script'

import Ask from "./components/Ask";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import StudentPanel from "./components/StudentPanel";
import AdminPanel from "./components/AdminPanel";
import Aboutus from "./components/Aboutus";
import Dream from "./components/dream";
import StudMatch from "./components/StudMatch";
import JobMatch from "./components/job";
import GPASort from "./components/gpasort";
import BacklogStud from "./components/BacklogStud";
import Notifications from "./components/Notifications";
import SendNoti from "./components/SendNoti";
import Dashboard from "./components/Dashboard";
import Try from "./components/Try";
import Back from "./components/Back";
import rpass from "./components/ResetPass";
import Resetpass from "./components/ResetPass";
import SendFile from "./components/SendFile";




function App() {
  return (
   
    <BrowserRouter>
        <div>
          <Routes>
          
            <Route path='/' element={<Ask />} />
            <Route path='/slogin' element={<StudentLogin />} />
            <Route path='/alogin' element={<AdminLogin />} />
            <Route path="/slogin/sPanel" element={<StudentPanel />} />
            <Route path="/slogin/sPanel/jobrolematch" element={<JobMatch />} />
            <Route path="/slogin/sPanel/notifications" element={<Notifications />} />
            <Route path="/slogin/sPanel/Dashboard" element={<Dashboard />} />
            <Route path="/slogin/try" element={<Try />} />
            <Route path="/slogin/sPanel/backlogstudd" element={<Back />} />
            <Route path="/slogin/try/rpass" element={<Resetpass />} />




            <Route path="/alogin/aPanel" element={<AdminPanel />} />
            <Route path="/alogin/aPanel/companyclassification" element={<Dream />} />
            <Route path="/alogin/aPanel/studmatch" element={<StudMatch />} />
            <Route path="/alogin/aPanel/adminnoti" element={<SendNoti />} />
            <Route path="/alogin/aPanel/gpasort" element={<GPASort />} />
            <Route path="/alogin/aPanel/backlogstud" element={<BacklogStud />} />
            <Route path="/alogin/aPanel/adminfile" element={<SendFile />} />
            
          </Routes>
         </div>
         
    </BrowserRouter>
    
  );
}

export default App;


