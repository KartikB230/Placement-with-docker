import axios from 'axios';
import React, { Component } from 'react';


import { connect } from "react-redux";
import moment from "moment";
class SstudentPanel extends React.Component {

  state = {
    fileList: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/listfiles').then(res => {
      this.setState({ fileList: res.data });
    });
  }

  handleDownloadFile = (fileName) => {
    axios({
      url: `http://localhost:3001/downloadfile/${fileName}`,
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    });
  };

  render() {
    const { fileList } = this.state;
    return (
      
      // <div style={{position:"relative"}}>
      // <img className='mainimg' src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_360,q_100,w_1140/v1/gcs/platform-data-dsc/chapter_banners/Untitled%20design%20%281%29_A0KynvM.png'></img>
        <>
        
        <div className="nn">

          {this.props.notifications.map((notification, index) => (


            <div className="newnoti">
              <span style={{ padding: "100px" }}>
                <img style={{ height: "50px", width: "50px", position: "relative", float: "left" }} src='data:image/jpeg;base64,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' />
                <h3 style={{ display: "inline", position: "relative" }}>ANNOUNCEMENT</h3>

              </span>
              <hr className="hhrr"></hr>
              <p key={index}>{notification}</p>

              <h6>{moment().format('MMMM Do YYYY, h:mm a')}</h6>

            </div>
          ))}
        </div>
        
        <div>

          <h3>File List</h3>
          {fileList.length > 0 ? (
            <p>
              {fileList.map((file, index) => (
                <p key={index}>
                  <button onClick={() => this.handleDownloadFile(file)}>{file}</button>
                </p>
              ))}
            </p>
          ) : (
            <p>No files found.</p>
          )}
        </div></>
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    
  };
};






export default connect(mapStateToProps)(SstudentPanel);