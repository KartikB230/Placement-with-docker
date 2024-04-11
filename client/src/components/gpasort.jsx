import React, { useState } from "react";
import ReactToExcel from "react-html-table-to-excel"

const GPASort = () => {
  const [students, setStudents] = useState([]);
  const [gpaInput, setGpaInput] = useState("");

  
  const handleInputChange = (event) => {
    setGpaInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create a request body object with the GPA value
    const requestBody = {
      gpa: gpaInput,
    };
    // Send a POST request to the server with the request body
    fetch("http://localhost:3001/gpasort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the response data
        setStudents(data);
      })
      .catch((error) => console.error(error));
  };

  return (

    <>


<div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img src="https://scol.ac.in/images/logo.png" alt="img" width="50" height="60"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href='/alogin/aPanel' style={{paddingLeft:"40px",paddingRight:"10px"}}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  href='/alogin/aPanel' style={{paddingLeft:"30px",paddingRight:"10px"}}>ABOUT US</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => scrollToSection(contact)} style={{paddingLeft:"40px",paddingRight:"10px"}}>CONTACT</a>
                            </li> */}


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/alogin/aPanel/adminnoti" >SEND A NOTIFICATION</a></li>
                                <li><a class="dropdown-item" href="/alogin/aPanel/adminfile" >SEND A FILE</a></li>
                                    <li><a class="dropdown-item"  href="/alogin/aPanel/companyclassification" >COMPANY CLASSIFICATION</a></li>
                                    <li><a class="dropdown-item" href="/alogin/aPanel/studmatch" >STUDENT SKILLSET MATCHING</a></li>
                                    <li><a class="dropdown-item" href="/alogin/aPanel/gpasort" >GPA SORT</a></li>
                                    <li><a class="dropdown-item" href="/alogin/aPanel/backlogstud" >BACKLOG RECRUITMENT</a></li>
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
      <h1 className="backhead">🔸Sort Students Through GPA🔸</h1>
      <hr  style={{borderWidth:"3px", marginTop:"15px"}}></hr>
      <form onSubmit={handleFormSubmit}>
        <label style={{margin:"33px",fontSize:"20px"}}>
          <b>ENTER GPA:</b>
          <input
            style={{ margin:"10px",padding:"10px", height:"40px"}}
            type="number"
            step="0.01"
            value={gpaInput}
            onChange={handleInputChange}
          />
        </label>
        

        <button type="submit" style={{padding:"5px",color:"red",fontSize:"20px", backgroundColor:"white", borderRadius:"10px", height:"43px", width:"80px"}}>Search</button>
                            

      <ReactToExcel
    className="reacttoexcelbtn"
    table = "table-to-excel"
    filename="GPA List"
    sheet="sheet 1"
    buttonText="Export as .xlsx"
   />
   </form>
      <table style={{margin: '5px'}} id="table-to-excel">
        <thead>
          <tr>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"233px"}}>PRN</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"233px"}}>NAME</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"233px"}}>BATCH</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"233px"}}>BRANCH</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"233px"}}>CGPA</th>
            
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.prn} style={{border:"2px solid black",  backgroundColor:"#f9d6d6 "}}>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{student.prn}</td>
              <td style={{border:"2px solid black"}}>{student.name}</td> 
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{student.batch}</td>
              <td style={{border:"2px solid black"}}>{student.branch}</td>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}}>{student.cgpa}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  

  
    </>
  );
}

export default GPASort;
