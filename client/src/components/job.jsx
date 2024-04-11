import React, { useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import ReactToExcel from "react-html-table-to-excel"
import {useNavigate} from 'react-router-dom'

const JobMatch = () => {
  const [company, setcompany] = useState([]);
  const location =useLocation();
  console.log(location.state)
  const [prn, setprn] = useState(location.state.prn);
  console.log(prn)

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setprn(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create a request body object with the GPA value
    const requestBody = {
      prn: prn,
    };
    // Send a POST request to the server with the request body
    fetch("http://localhost:3001/studentskillmatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the response data
        setcompany(data);
      })
      .catch((error) => console.error(error));
  };

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
                                <a class="nav-link " aria-current="page" onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})} style={{paddingLeft:"40px",paddingRight:"10px"}}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})} style={{paddingLeft:"30px",paddingRight:"10px"}}>ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " onClick={() => navigate('/slogin/sPanel', {state: {prn: location.state.prn}})}  style={{paddingLeft:"30px",paddingRight:"10px"}}>CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => navigate('/slogin/sPanel/notifications', {state: {prn: location.state.prn}})} style={{paddingLeft:"40px",paddingRight:"10px"}}>NOTIFICATIONS</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item"><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
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


            <div>
            <h1 className="backhead">🔸Student Skillset Matching🔸</h1>
            <hr  style={{borderWidth:"3px", marginTop:"15px"}}></hr>
      <form onMouseMove={handleFormSubmit}>
        <label style={{fontSize:"20px", margin:"20px",padding:"10px"}} onChange={handleInputChange}>
          
        </label>
        <ReactToExcel
    className="reacttoexcelbtnn"
    table = "table-to-excel"
    filename="Companieslist"
    sheet="sheet 1"
    buttonText="Export as .xlsx"
   />
      </form>
      <div className="dashtable">
      <table id="table-to-excel">
        <thead>
          <tr >
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"230px"}} >Company Name</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"230px"}} >Location</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"230px"}} >Job Profile</th>            
      
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"230px"}} >SKILLS </th>
          </tr>
        </thead>
        <tbody >
          {company.map((company) => (
            <tr  key={company.id} style={{border:"2px solid black",  backgroundColor:"#f9d6d6 "}}>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{company.companyname}</td>
              <td style={{border:"2px solid black"}}>{company.location}</td> 
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{company.jobprofile}</td>
             
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{company.skill}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default JobMatch;
