import {useRef} from 'react'



const Home = () => {
    
  return (
    <><div className="homme">
        <h1 style={{marginBottom:"10px"}}>HOME</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        <div className='stylishtext'>
            <h2>Welcome to Student Panel of SIT Placement Cell</h2>    
        </div>
    </div>
    <div className='aboutus'>
        <h1 style={{marginTop:"10px",marginBottom:"10px"}}>ABOUT US</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
    </div>
    <div className='contact'>
        <h1 style={{marginTop:"10px",marginBottom:"10px"}}>CONTACT</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
    </div></>

  )
}

export default Home