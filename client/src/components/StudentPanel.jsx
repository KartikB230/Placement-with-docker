import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import SstudentPanel from "./SstudentPanel";
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import { Carousel } from 'bootstrap';
import BCarousel from './BCarousel';
import {Typewriter} from 'react-simple-typewriter'
import React, { useState, useEffect } from "react";
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import {Link, useLocation} from 'react-router-dom'; 



function StudentPanel(){



    const handleGmailClick = () => {
        window.location.href = "mailto:firstadmin@gmail.com";
      };
    
      const handleGmailClickk = () => {
        window.location.href = "mailto:secondadmin@gmail.com";
      };
    
      const handleGmailClickkk = () => {
        window.location.href = "mailto:thirdadmin@gmail.com";
      };
      
      const handleGmailClickkkk = () => {
        window.location.href = "mailto:fourthadmin@gmail.com";
      };
    
      const handleGmailClickkkkk = () => {
        window.location.href = "mailto:fifthadmin@gmail.com";
      };
    
      const handlePhoneClick = () => {
        window.location.href = "tel:+91 9510645394";
      };
    
      const handlePhoneClickk = () => {
        window.location.href = "tel:+91 9316158781";
      };
    
      const handlePhoneClickkk = () => {
        window.location.href = "tel: +91 6353851457";
      };
    
      const handlePhoneClickkkk = () => {
        window.location.href = "tel:+91 8488967695";
      };
    
      const handlePhoneClickkkkk = () => {
        window.location.href = "tel:91 9638551805";
      };
    
      const handleWhatsappClick = () => {
        window.location.href = "https://web.whatsapp.com/send?phone=9510645394";
      };
    
      const handleWhatsappClickk = () => {
        window.location.href = "https://web.whatsapp.com/send?phone=9316158781";
      };
    
      const handleWhatsappClickkk= () => {
        window.location.href = "https://web.whatsapp.com/send?phone=6353851457";
      };
    
      const handleWhatsappClickkkk = () => {
        window.location.href = "https://web.whatsapp.com/send?phone=8488967695";
      };
    
      const handleWhatsappClickkkkk = () => {
        window.location.href = "https://web.whatsapp.com/send?phone=9638551805";
      };
    

    const navigate = useNavigate()
  const home =useRef(null);
  const aboutus =useRef(null);
  const contact =useRef(null);
  const noti =useRef(null);
  const others =useRef(null);
  const location =useLocation();
  console.log(location.state)
  const [prn, setprn] = useState(location.state.prn);
  console.log(prn)


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour:"smooth",
    });
  }


  return (
    <>
    
    <div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img class="studentimgg" src="https://photoskart.com/wp-content/uploads/2022/05/graduated-student-icon-vector-stock-photo.jpg" onClick={() => navigate('Dashboard', {state: {prn: location.state.prn}})} on alt="img"  ></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => scrollToSection(home)} style={{paddingLeft:"40px",paddingRight:"10px"}}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => scrollToSection(aboutus)} style={{paddingLeft:"30px",paddingRight:"10px"}}>ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => scrollToSection(contact)} style={{paddingLeft:"30px",paddingRight:"10px"}}>CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => navigate('notifications', {state: {prn: location.state.prn}})} style={{paddingLeft:"40px",paddingRight:"10px"}}>NOTIFICATIONS</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" onClick={() => navigate('jobrolematch', {state: {prn: location.state.prn}})}><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('backlogstudd', {state: {prn: location.state.prn}})}><li>COMPANIES WHICH HIRE BACKLOG STUDENTS</li></a></li>
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


    
    <div className="homme" ref={home}>
    <ScrollToTop />
        <div class="row">
            <h1 className='headfont' style={{marginTop:"6px",marginBottom:"6px",color:"red"}}>HOME</h1>
            <hr className="hr" style={{height:"3px",background:"solid black",marginBottom:"10px"}}></hr>

            <div  className="marquee">
                <marquee behavior="alternate">Welcome to Student Panel of SIT Placement Cell</marquee>
            </div>

            <img className='mainimg' src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_360,q_100,w_1140/v1/gcs/platform-data-dsc/chapter_banners/Untitled%20design%20%281%29_A0KynvM.png'></img>
            <h3 class="span" style={{position:"absolute" , color:"black" ,textAlign:"center", marginTop:"300px" ,fontSize:"50px" ,color:"#625e5e"}}> The Future Belongs To Those Who Believe<br></br>
            <span  style={{color:"red"}}><b>
            <Typewriter 
                words={[' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas',' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas']}
                loop={15}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
            /></b>
            </span>
            </h3>        
        </div>
    </div>
    
    <div className='aboutus' ref={aboutus}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"white"}}>ABOUT US</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        

                                    <h2 >SIT PLACEMENT RECORDS</h2>
                                    <hr className="hr" style={{height:"3px",background:"black"}}></hr>

        <div className='container' style={{backgroundColor:"#ff7979",margin:"80px"}}>
      <div className='maincontainer'>

          <div className='thecard'>
              <div className='thefront' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px",color:"black"}}>VARIOUS BRANCHES PLACEMENT RECORDS</h6><br></br> 
                </div>
                
              </div>
              <div className='theback'>
                
                <div >
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Highest Salary 2022 CS Dep: 42 LPA</h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Average Salary 2022 CS Dep: 12 LPA</h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Highest Salary 2022 AIML Dep: 36 LPA</h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Average Salary 2022 AIML Dep: 10 LPA</h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Highest Salary 2022 entc Dep: 25 LPA</h6>
                </div>
                
              </div>
          </div>

      </div>

      <div className='maincontainerr' >

          <div className='thecard'>
          <div className='thefront' style={{display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"lightblue"}}>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px",color:"black"}}>STAR COMPANIES ON CAMPUS</h6><br></br> 
                </div>
                
              </div>
              <div className='thebackk'>

                
                <div >
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Deloitte <br></br> Goldman Sachs <br></br> Google <br></br> Credit Suisse <br></br> Infosys <br></br> Persistent <br></br> Zomato <br></br> HDFC <br></br> TIAA <br></br>Standard Chartered<br></br> ICICI <br></br> KPMG </h6>
                  
                </div>
             
              </div>
          </div>
          
      </div>

      <div className='maincontainerrr'>

      <div className='thecard'>
          <div className='thefront' style={{display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"lightyellow"}}>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px",color:"black"}}>LIVE PROJECTS </h6><br></br> 
                </div>
                </div>
          <div className='thebackkk'>
           
            
            <div >
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"20px", color:"black"}}>Piramal Realty<br></br> AGS Pune <br></br>ShippingKaro <br></br> NeXus Talks <br></br>Allegis-Deutsche Bank Account<br></br> Forevision <br></br> HCCB - Hindustan Coca Cola Beverages <br></br> Licious <br></br> Bajaj Allianz <br></br> BYJU'S<br></br>Xpertflix</h6>

            </div>
            
            </div>
            </div>
            </div>
            </div>





        <BCarousel />
    </div>
    
   
    <div className='contact' ref={contact}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"red"}}>CONTACT US</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        
        <ContactUs />
        
        
    </div>
   
    </>
  )
}



  


export default StudentPanel;
