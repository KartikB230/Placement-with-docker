import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {

  state = {
    selectedFile: null
  };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    formData.append('filename', this.state.selectedFile.name);

    axios.post("http://localhost:3001/uploadfile", formData);
    alert("File uploaded successfully");
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
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
      <h1 className='headfont' style={{marginBottom:"10px",color:"white"}}>UPLOAD FILE</h1>
      <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        <div>
          <input className='buttonn' type="file" onChange={this.onFileChange} />
          <button className='buttonn' onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
      </>
    );
  }
}

export default App;
