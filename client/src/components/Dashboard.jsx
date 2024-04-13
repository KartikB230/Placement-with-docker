import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [prn, setPrn] = useState(location.state.prn);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]); // Initialize students as an empty array

  const handleInputChange = (event) => {
    setPrn(event.target.value);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create a request body object with the GPA value
    const requestBody = {
      prn: prn,
    };
    // Send a POST request to the server with the request body
     // Empty array indicates the effect runs only once, similar to componentDidMount
  }


  useEffect(() => {
    axios.post("http://localhost:3001/dash", {
        prn: prn,
      })
      .then((response) => response.data) // Adjusted to response.data to directly access the response data
      .then((data) => {
        // Update the state with the response data
        setStudents([data]);
      })
      .catch((error) => console.error(error));
  }, []); // Execute this effect whenever prn changes
  
  
  console.log(students);

  return (
    <>


    <div style={{ display: 'block' }}>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <img class="studentimgg" src="https://photoskart.com/wp-content/uploads/2022/05/graduated-student-icon-vector-stock-photo.jpg"></img>
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
                <a class="nav-link " aria-current="page" onClick={() => navigate('/slogin/sPanel/notifications', { state: { prn: location.state.prn } })} style={{ paddingLeft: "40px", paddingRight: "10px" }}>NOTIFICATIONS</a>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ paddingLeft: "30px", paddingRight: "10px" }}>
                  FEATURES
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" onClick={() => navigate('/slogin/sPanel/jobrolematch', { state: { prn: location.state.prn } })}><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
                  <li><a class="dropdown-item" onClick={() => navigate('/slogin/sPanel/backlogstudd', { state: { prn: location.state.prn } })}><li>COMPANIES HIRING BACKLOG STUDENTS</li></a></li>
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




      <form onMouseMove={handleFormSubmit}>
        <h1 className="backhead">🔸Welcome{students.map((student) => (
            " " + student.name
          ))}🔸
        </h1>
        <hr style={{ borderWidth: "3px", marginTop: "15px" }}></hr>

      </form>



      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px" }}>
        <img style={{ height: "90px", width: "90px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////7+/vq6urn5+f39/f09PTv7+/5+fkiIiLf39+tra3s7OzLy8s3Nzfy8vLFxcXU1NRFRUWLi4tYWFgoKCiDg4NtbW20tLSUlJSqqqrT09MODg6kpKS8vLwVFRU5OTl8fHxPT08sLCyZmZlpaWlhYWEUFBRUVFR2dnZBQUEkJCRra2tJSUk40hfxAAAH/0lEQVR4nO2di3aqMBBFIyJUVARRQUXAZ6tt///3rq/eCmoV5gzELPcPOHupeUwyE1FTHVF1AOy8DJ+fl+Hz8zJ8fko11Iy2rrtOFASR4+q6oZXxoaUZam0rGg/nzWYcij1xbM/GHZP/g0syNDvjzTwWWexhp8H90aUYuuNNEl7oHeiNXOYPL8Fw4s2b1/X2hN+jOuvHsxu6Q/vG1/fruLQYA2A2NId/fH2/fK6nVpcpBFbDbnA5uNxmPXXqb/ggGA0118/hd/i99rxOGx0Gn2G31cspuCf2Ax0bB5uh7g0KCO5o+pGBDITL0F3fGUH/wPaQYyuTobst7Len38GFwmPYSUiCQiwiWCwshpFNFNzRQgXDYejQfqJHQtS3yGDYmQMEhdg6mHDwhm4fIrgbbjC7Drhhew0SFGII2R/DDYcwQdFsIdIcaMMAJyjEHDHzgw2tgku1G3iAHAfW0Mi7m7jDAjDYYA2DT6yhGNNjghrquHH0xIweFNSw9VDKIg89+h8Raah/oQWFoGdvkIYR/CsUgp7UABoaHl5Q0FMaQEMrYTCkz/lAw6B43uI2E3JYOMPGjEFQ0LdQOMM2ZluYISDHhTN0OQQBixqcYcRiuCTHhTPkmCt2uwtyXDhDRPrpkg05Lpihht0Z/rAiBwYzrOc5SHucNTkwmOGERVAmw5byhksewz45MJjhSHlDnulQzMmBwQxZ1t1C9Mh3F2CG4DziDwk5jQEzhKfZjgzIm3yU4RvL3kmIkJwTRhk2eJalQpBP9FGGBuBg+yrko2CUocmz8AZsgWGGDLnSA+TtE8qwzbO12E2I1INgmOE7k2GTmotCGdY5kqUHNsQ5X37DHjEpLL/hgvgzld9QjGiRST/SCDGk3TmRfrYQwlPdMCSmvaVf04hP4j1MlGF3wWVoEw/YYHuLhMtwK8l82PjmMlwTd/koQw11q/SCITEy2TNR4n1KDAxmCLxXmmJBvasge85bfFATpjDDKZMh+Zhb9tM1ebKJtQbPosYnB4Y7x9+wGMp066vDIUg/mAEamhwzIv06DfLmnoNffH8DyhGQ90vhU2KIKClB3hG20CdsG0QvAuhN9gB7eEHdGR6BGr5BF6cxdc19BFtRAh1sVph+GVhDHXgSPAAVkYIru4D3hnxQ5xqwofmBEgxRBevo+kMXVdtFv9B2Al5DiiqxpF9hPwE31DAzhg3rA4av5bYgeUXAkvsE3lCbIg7a6LUyPzB0HLAA42kf14iHwbAB2GMsce34OPpiROS1W1Py7i0uee3mA1u4cRia5KQUoIT7Pyz9aah/xDmy0yCL4ZR45O0hW2GxGBKbKAFbKNWYDE3aYSL1TDQNTycs2h+RXpF3Do+hQ9lDYX+kTIYaZeG2xfZsZepIRymZXWP7fDIZvhF+ptSrCRm4+iYSioSIdxGzcBkSyhGfxNAqfCQcYlLd/+EyLH4LLEQuu2t8hoQ7UrgUzQE2w+IVl0/yPyTcr8Eu2vgMiw+mX9A2wnyG48KGz7Fqo1Q+N2HtZw9wGZpFmnmf8KFdy5kMNUppN/XuehqmXtC0fGICarB7gMHQ6JBvR22lzghbHuCWoo3rro821CLMlfZw7YCOLsCGxhR2zTRpYR67wBrWPWD502IMUYQatmfQKsSBdL2gLfQN0xhxXQFoOGFojQFIncIMjSDBC4pP+sSIMrQ8nkJgauUayrDeYivs+pChKqgbfbFVkNJfZKEbNoIVV1+TI9+04YZqaIznfJX4J5pTyrxIMdRMZ8ZXpH5Of1LcsbBho91ZEvbxOQmHrllQspihYTmjVWl6B5qblluoVU1+Q60+GXsfvIPLVd63s7GbP9OY07AxCUarHvvYcpP5LPfWOIehYUXDVW9Qnd6BQX+ZL5/6qKHe8voLxnk9B+HAzzND3jfc/e+C1WfF31yWxch6tFjhT8NG3Yq8FVevORrxKtAfygHcNGxbTsvrlTOhF8QeOfr9SfK6odkZz6qYEPLyuZreffj6iqExWW7uveErD9vNePLnX/LC8C3aVDjfFaHZm03/mECyhpaPfrKpDGLbj259kRnDOlurIHa2NzLIGUOetgEl0Yuu3YhLG7pyrFoK43cuf6tpQ64WLKVhjy4q+FOGXaZ2xyUSrrOnqynD6Akm+bvYmaxOypApq1sy8bB7yxD/uF9FpIqKzg2dpOrQUPj6dUNqqYtEnD20e2ZoMD1vUAXNQLtiaLGdrlTA2rxi6KgwV/wQu5eGmAplaVheGrafetV9gX9paD3/ku2cpH1h6Dz5viLLJGuocTU+rIoga6jSbHhgkzWsJ1WHBMbOGrpKzRU7QitjqNrfUIhpxpCrD3B1bNKG3fLO5MvCtlKGPG/dVkrcShmi2jvJxFf33FCtRekROzo3fN5s/h/Mur+GOt8TIxXyPfk1ZHontWqmv4ZMb2xWzT6teDRsqJIpzWBPfgwtOe9bkNk3Ij4aknqRyMzQOBmOVNtY/NDXT4bqLbtPxO7RUFcpF5zGORrSm+RJy+hoOFYszXZGX9sbNtQ4Gb1KYuwN6yVf2S6TgbU3RDQclRZHqD3Q7BbfQsk02xmjnaGh6MbiyEwwPEshFeudoZtUHQUntlB4Y3EgFLU3pQeaHTWD69U7Wai1FV7RHFA2g/EfntfEZELJE4sUhOZ4TwLfI7CyYGyrjoAbXeWt0wGn6gDYUX3Ntt8hqo7qq1IhVF+VCsH26rs0KD9ZCHXT3S9evHjx4sXD/AO55KGXaMGhiAAAAABJRU5ErkJggg=="></img>
      </div>
      <div className="dashtable">
        <table >
          <thead className="thead">
            <tr>
              <th className="dashtab" >PRN</th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6", width: "700px ", margin: "10px" }}>
                  <td >{student.prn}</td>
                </td>
              ))}
            </tr>
          </thead>


          <thead>
            <tr>
              <th className="dashtab" >NAME</th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6 " }}>
                  <td s>{student.name}</td>
                </td>
              ))}
            </tr>
          </thead>



          <thead>
            <tr>
              <th className="dashtab" >EMAIL </th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6 " }}>
                  <td s>{student.email}</td>
                </td>
              ))}
            </tr>
          </thead>



          <thead>
            <tr>
              <th className="dashtab" >BATCH</th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6 " }}>
                  <td >{student.batch}</td>
                </td>
              ))}
            </tr>
          </thead>



          <thead>
            <tr>
              <th className="dashtab" >BRANCH</th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6 " }}>
                  <td >{student.branch}</td>
                </td>
              ))}
            </tr>
          </thead>



          {/* <thead>
        <tr>
          <th className="dashtab" >SKILLS</th>
          {students.map((student) => (
          <td key={student.prn} style={{border:"2px solid black",  backgroundColor:"#f9d6d6 "}}>
            <td >{student.skills}</td>
          </td>
        ))}
        </tr>
      </thead> */}



          <thead>
            <tr>
              <th className="dashtab" >GPA</th>
              {students.map((student) => (
                <td key={student.prn} style={{ border: "2px solid black", backgroundColor: "#f9d6d6 " }}>
                  <td>{student.cgpa}</td>
                </td>
              ))}
            </tr>
          </thead>



          {/* <thead>
        <tr>
          <th className="dashtab" >LOCALITY</th>
          {students.map((student) => (
          <td key={student.prn} style={{border:"2px solid black",  backgroundColor:"#f9d6d6 "}}>
            <td>{student.locality}</td>
          </td>
        ))}
        </tr>
      </thead> */}


        </table>
      </div>
    </div>

  </>
  );
};

export default Dashboard;
