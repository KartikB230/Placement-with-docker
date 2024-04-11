import React from 'react';

const ContactUs = () => {
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

  


  return (

    <>

    
<h2 className='headfont'><b>📍 Symbiosis Institute of Technology</b></h2><br></br>
            <h5>Constituent of SYMBIOSIS INTERNATIONAL (DEEMED UNIVERSITY)</h5>
            <h5>Near Lupin Research Park, Gram: Lavale,</h5>
            <h5>Tal: Mulshi, Pune 412 115</h5>

            <div className='container'>
      <div className='maincontainer'>

          <div className='thecard'>
              <div className='thefront' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img className="wsppimg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png'></img>
                
              </div>
              <div className='theback'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px",color:"black"}}>✉ MESSAGE US AT</h6><br></br> 
                </div>
                <div >
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"40px", color:"black"}}><a href="https://web.whatsapp.com/send?phone=9510645394" onClick={handleWhatsappClick}>1.) +9510645394 </a>  </h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><a href="https://web.whatsapp.com/send?phone=9510645394" onClick={handleWhatsappClickk}>2.) +9316158781 </a> </h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><a href="https://web.whatsapp.com/send?phone=9510645394" onClick={handleWhatsappClickkk}>3.) +6353851457 </a> </h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><a href="https://web.whatsapp.com/send?phone=9510645394" onClick={handleWhatsappClickkkk}>4.) +8488967695 </a> </h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><a href="https://web.whatsapp.com/send?phone=9510645394" onClick={handleWhatsappClickkkkk}>5.) +9638551805 </a> </h6>
                </div>
                
              </div>
          </div>

      </div>

      <div className='maincontainerr' >

          <div className='thecard'>
              <div className='thefrontt' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <img className="wsppimg" src='https://cdn-icons-png.flaticon.com/512/281/281769.png'></img>
              </div>
              <div className='thebackk'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px",color:"black"}}>📨 EMAIL US AT:</h6><br></br> 
                </div>
                <div >
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"40px", color:"black"}}><span onClick={handleGmailClick}>1.) firstadmin@gmail.com</span></h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handleGmailClickk}>2.) secondadmin@gmail.com</span></h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handleGmailClickkk}>3.) thirdadmin@gmail.com</span></h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handleGmailClickkkk}>4.) fourthadmin@gmail.com</span></h6>
                  <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handleGmailClickkkkk}>5.) fifthadmin@gmail.com</span></h6>
                </div>
             
              </div>
          </div>
          
      </div>

      <div className='maincontainerrr'>

        <div className='thecard'>
          <div className='thefronttt' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img className="wsppimg" src='https://images.vexels.com/media/users/3/137415/isolated/lists/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo.png'></img>
          </div>
          <div className='thebackkk'>
            <div style={{backgroundColor:"white",display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px", margin:"10px"}}>📞 CALL US AT:</h6><br></br> 
            </div>
            <div >
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",marginTop:"40px", color:"black"}}><span onClick={handlePhoneClick}>1.) +91 9510645394</span></h6>
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handlePhoneClickk}>2.) +91 9316158781</span></h6>
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handlePhoneClickkk}>3.) +91 6353851457</span></h6>
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handlePhoneClickkkk}>4.) +91 8488967695</span></h6>
              <h6 style={{display:"flex", alignItems:"center", justifyContent:"center",fontSize:"22px",margin:"15px", color:"black"}}><span onClick={handlePhoneClickkkkk}>5.) +91 9638551805</span></h6>
            </div>
            
            </div>
      </div>

      </div>
    </div>





    <div>
      <div>
            
           
        </div>
      
      
      
    </div>
    </>
  );
};

export default ContactUs;
