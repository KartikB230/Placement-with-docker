import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import moment from "moment";

function Back() {
    const [companystatus, setCompanystatus] = useState("");
    const [companies, setCompanies] = useState([]);
    const location = useLocation();
    console.log(location.state)
    const [prn, setprn] = useState(location.state.prn);
    console.log(prn)

    const navigate = useNavigate()
    const home = useRef(null);
    const aboutus = useRef(null);
    const contact = useRef(null);
    const noti = useRef(null);
    const others = useRef(null);

    console.log(location.state)


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behaviour: "smooth",
        });
    }

    useEffect(() => {
        axios.post("http://localhost:3001/backstud", {
            prn: prn
        }).then((response) => {
            if (response.data.message) {
                setCompanystatus(response.data.message);
            } else {
                setCompanies(response.data)
                    .catch((error) => console.log(error));
            }
        })
    }, []);

    return (

        <>



            <div style={{ display: 'block' }}>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <img class="studentimgg" src="https://photoskart.com/wp-content/uploads/2022/05/graduated-student-icon-vector-stock-photo.jpg" onClick={() => navigate('/slogin/sPanel/Dashboard', { state: { prn: location.state.prn } })} on alt="img"  ></img>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link " onClick={() => navigate('/slogin/sPanel', { state: { prn: location.state.prn } })} style={{ paddingLeft: "40px", paddingRight: "10px" }}>HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " onClick={() => navigate('/slogin/sPanel', { state: { prn: location.state.prn } })} style={{ paddingLeft: "30px", paddingRight: "10px" }}>ABOUT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " onClick={() => navigate('/slogin/sPanel', { state: { prn: location.state.prn } })} style={{ paddingLeft: "30px", paddingRight: "10px" }}>CONTACT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " onClick={() => navigate('/slogin/sPanel/notifications', { state: { prn: location.state.prn } })} style={{ paddingLeft: "40px", paddingRight: "10px" }}>NOTIFICATIONS</a>
                                </li>


                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ paddingLeft: "30px", paddingRight: "10px" }}>
                                        FEATURES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" onClick={() => navigate('/slogin/sPanel/jobrolematch', { state: { prn: location.state.prn } })}><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
                                        <li><a class="dropdown-item" ><li>COMPANIES HIRING BACKLOG STUDENTS</li></a></li>
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

                <h1 className="backhead">🔸List of Companies🔸</h1>

                
                    <hr style={{ borderWidth: "3px", marginTop: "15px" }}></hr>

                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{companystatus}</h1>

                    <body style={{ backgroundColor: "#f18787" }}>

                    {companies.map((company) => (
                        <div className="backlogdiv" key={company.companyid}>
                            <h3 className="backheadd">{company.companyname}</h3>
                            <hr style={{ borderWidth: "2px" }}></hr>
                            <p><b>Location:</b> {company.location}</p>
                            <p><b>Job Profile:</b> {company.jobprofile}</p>
                        </div>
                    ))}
                </body>
            </div>
        </>
    );
}

export default Back;
