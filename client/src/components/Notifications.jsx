import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import SstudentPanel from './SstudentPanel'
import {Link, useLocation} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Notifications = () => {
  const navigate = useNavigate()
  const location =useLocation();
  console.log(location.state) 
  const [prn, setprn] = useState(location.state.prn);
  console.log(prn)


  return (

    <>


<div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img class="studentimgg" src="https://photoskart.com/wp-content/uploads/2022/05/graduated-student-icon-vector-stock-photo.jpg" onClick={() => navigate('/slogin/sPanel/Dashboard', {state: {prn: location.state.prn}})} on alt="img"  ></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})} style={{paddingLeft:"40px",paddingRight:"10px"}}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})} style={{paddingLeft:"30px",paddingRight:"10px"}}>ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})} style={{paddingLeft:"30px",paddingRight:"10px"}}>CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  style={{paddingLeft:"40px",paddingRight:"10px"}}>NOTIFICATIONS</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" onClick={() => navigate('/slogin/sPanel/jobrolematch', {state: {prn: location.state.prn}})}><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('/slogin/sPanel/backlogstudd', {state: {prn: location.state.prn}})}><li>COMPANIES HIRING BACKLOG STUDENTS</li></a></li>
                                    {/* <li><a class="dropdown-item" onClick={() => scrollToSection(noti)}>NOTIFICATIONS</a></li>
                                    <li><a class="dropdown-item" onClick={() => scrollToSection(others)}>CONTACT</a></li> */}
                                    <li><hr class="dropdown-divider"></hr></li>
                                    
                                </ul>
                            </li>
                            


                            
                            
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>


    <div className='noti' >
    <h1 className='headfont' style={{marginBottom:"10px",color:"white"}}>NOTIFICATIONS</h1>
    <hr className="hr" style={{height:"3px",background:"black",marginBottom:"30px"}}></hr>

    <SstudentPanel />
   
</div>
</>
  )
}

export default Notifications