import React, { useState } from 'react';
import axios from 'axios';
import ReactToExcel from "react-html-table-to-excel"

function App() {
  const [char, setChar] = useState('');
  const [students, setStudents] = useState([]);
  const navigate = new useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/dream', { char: char })
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange = (event) => {
    setChar(event.target.value);
  }

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
                                <li><a class="dropdown-item" href="/alogin/aPanel/adminnoti">SEND A NOTIFICATION</a></li>
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
      <h1 className="backhead">🔸Company Classification🔸</h1>
      <hr  style={{borderWidth:"3px", marginTop:"15px"}}></hr>
      <form onSubmit={handleSubmit}>
      <div>
      <div style={{display:"inline"}}>
        <label style={{margin:"33px",fontSize:"20px"}}>
          <b>SELECT JOB TYPE: </b>
          <select style={{padding:"5px",margin:"20px",border:"2px solid black", backgroundColor:"white", borderRadius:"10px", height:"40px", width:"140px"}} value={char} onChange={handleChange}>
            <option value="">- Select -</option>
            <hr></hr>
            <option value="n">Normal job</option>
            <option value="d">Dream job</option>
            <option value="s">Super dream job</option>
          </select>
        </label>

        

        <button style={{padding:"5px",color:"red",fontSize:"20px", backgroundColor:"white", borderRadius:"10px", height:"43px", width:"80px"}} type="submit">Search</button>
        </div>
        <div style={{float:"right"}}>
                            <table  style={{height:"10%"}}> 
                              <tr style={{ border:"2px solid black", backgroundColor:"#f18787"}}>
                              <td style={{height:"20px", border:"2px solid black"}}>
                                  Superdream Jobs
                                </td>
                                <td style={{height:"20px", border:"2px solid black"}}>
                                  15lacs +
                                </td>
                                
                              </tr>
                              <tr style={{height:"20px", border:"2px solid black", backgroundColor:"#f9d6d6"}}>
                                <td style={{height:"20px", border:"2px solid black"}}>
                                  Dream Jobs
                                </td>
                                <td style={{height:"20px", border:"2px solid black"}}>
                                  10 lacs - 15 lacs
                                </td>
                              </tr>
                              <tr style={{height:"20px", border:"2px solid black", backgroundColor:"#f9e8e8"}}>
                              <td style={{height:"20px", border:"2px solid black"}}>
                                  Normal Jobs
                                </td>
                                <td style={{height:"20px", border:"2px solid black"}}>
                                  5 lacs - 10 lacs
                                </td>
                              </tr>
                            </table>
        </div>
        <ReactToExcel
    className="reacttoexcelbtn"
    table = "table-to-excel"
    filename="Company Classification"
    sheet="sheet 1"
    buttonText="Export as .xlsx"
   />
        </div>
       
      </form>
      <table id='table-to-excel' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}}>PRN</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >Name</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >Batch</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >Branch</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >Company</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >Job Profile</th>
            <th style={{border:"2px solid black", backgroundColor:"#f18787 ", paddingLeft:"20px", paddingRight:"140px"}} >SALARY</th>
          </tr>
        </thead>
        <tbody style={{border:"1px solid black"}}>
          {students.map((student) => (
            <tr style={{border:"1px solid black",  backgroundColor:"#f9d6d6 "}} key={student.prn}>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}} >{student.prn}</td>
              <td style={{border:"2px solid black"}} >{student.name}</td> 
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}} >{student.batch}</td>
              <td style={{border:"2px solid black"}} >{student.branch}</td>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 "}} >{student.company}</td>
              <td style={{border:"2px solid black"}} >{student.jobrole}</td>
              <td style={{border:"2px solid black",  backgroundColor:"#f9e8e8 ", color:"red"}} >{student.jobsalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
