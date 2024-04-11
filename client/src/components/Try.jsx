import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Try = () => {
  const [email, setemail] = useState('');
  const [bplace, setbplace] = useState('');
  const [mname, setmname] = useState('');
  const navigate = useNavigate();
  const [loginstatus, setloginstatus] = useState('');

  const handleEmailInputChange = (event) => {
    setemail(event.target.value);
  };

  const handleblaceInputChange = (event) => {
    setbplace(event.target.value);
  };

  const handlemnameInputChange = (event) => {
    setmname(event.target.value);
  };

  const handleSubmitt = () => {
    // Perform actions with the entered values, e.g. send data to backend
    
    Axios.post("http://localhost:3001/fpass", {
    email: email,
    bplace: bplace,
    mname: mname
    }).then((response) => {
    if(response.data.message){
        setloginstatus(response.data.message);
    }else{
       navigate('rpass', {state: {email: email}})
        //navigate(`/sPanel/${prn}`,{state:{prn:props.prn}});
    }
  })
}

  return (

<>
    







<div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop: "80px"}}>
            <div className="auth-form-containerr">
                <img class="iamg" src="data:image/png;base64,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
" alt="MISSING GIF"></img>
                <hr className="hr"></hr>
                <div className="studentLogin">
                
                    <h4><span style={{color:"#4e4d4d"}}>PLEASE ANSWER THESE SECURITY QUESTIONS TO CHANGE YOUR PASSWORD</span></h4>

                    <hr className="hr"></hr>
                <div  className="login-form">
                <label className="try"><span style={{color:"red"}}><b>EMAIL :</b></span></label>
                    <input className="tryinput" type="email" value={email} onChange={handleEmailInputChange} placeholder="e.g xyz @sitpune.edu.in" ></input>


                    <label className="try">What is your <span style={{color:"red"}}><b>Birth Place  ?</b></span></label>
                    <input className="tryinput" type="text"
                            value={bplace}
                            onChange={handleblaceInputChange}></input>


                    <label className="try">What is your <span style={{color:"red"}}><b>Mother's Name ?</b></span></label>
                    <input className="tryinput" type="text"
                            value={mname}
                            onChange={handlemnameInputChange}></input>



                    <button class="loginbutton"   type="submit" onClick={handleSubmitt}>Submit</button>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginstatus}</h1>

                </div>
                </div>
                </div>
</div>


      

    </>
  );
};

export default Try;
