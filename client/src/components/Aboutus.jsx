import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Aboutus = () => {
    const navigate = useNavigate()
  return (


    <div className='App'>
            <div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img src="https://image3.mouthshut.com/images/imagesp/925718676s.png" alt="img" width="80" height="80"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate('/slogin/sPanel')} style={{paddingLeft:"40px",paddingRight:"10px"}}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  onClick={() => navigate('')} style={{paddingLeft:"30px",paddingRight:"10px"}}>About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
    </div>
    



    
  )
}

export default Aboutus