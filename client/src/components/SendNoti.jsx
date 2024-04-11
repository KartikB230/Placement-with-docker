import { useDispatch } from 'react-redux';
import {useRef} from 'react'

import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import { Carousel } from 'bootstrap';
import BCarousel from './BCarousel';
import {Typewriter} from 'react-simple-typewriter'
import React, { useState, useEffect } from "react";

const SendNoti = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [notificationText, setNotificationText] = useState('');

    const handleSendNotification =() =>{
        dispatch({ type: 'ADD_NOTIFICATION', payload: notificationText });
        setNotificationText('');
        alert("Notification sent successfully !")
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



    <div className='noti'>
        
        <h1 className='headfont' style={{marginBottom:"10px",color:"white"}}>NOTIFICATIONS</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        
        {/* <img className='mainimg'  src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_360,q_100,w_1140/v1/gcs/platform-data-dsc/chapter_banners/Untitled%20design%20%281%29_A0KynvM.png'></img> */}
        
        
        <div class="nooti" >
            <div class="wrapper">
            
                <span style={{padding: "100px"}}>
                    <img style={{height: "40px", width: "40px", paddingBottom:"10px"}} src='https://toppng.com/uploads/preview/notification-bell-black-11549537465xn5ekwdrj9.png' />
                    <h2 style={{display: "inline", paddingLeft:"20px"}}>SEND A NOTIFICATION HERE !</h2>
                    
                </span>
                
            
                <textarea  placeholder="Enter a Message..." value={notificationText} onChange={e => setNotificationText(e.target.value)} required/>
            </div>
            <div>
                <button className='buttonn' onClick={handleSendNotification}>Send Notification</button>
            </div>
        
        </div>
        </div>
        </>
  )
}

export default SendNoti
