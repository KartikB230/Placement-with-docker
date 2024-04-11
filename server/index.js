const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    const filename = req.body.filename ? req.body.filename : file.originalname;
    cb(null, filename);
  }
});

// Set up file upload middleware
const upload = multer({ storage: storage });
const fs = require('fs');

// Endpoint for file uploads
app.post('/uploadfile', upload.single('myFile'), (req, res) => {
  console.log(req.file);
  res.send('File uploaded successfully!');
});

// Endpoint for file downloads
app.get('/downloadfile/:filename',cors(), function(req, res) {
  const fileName = req.params.filename;
  const file = __dirname + '/uploads/' + fileName;
  res.download(file, function(err) {
    if (err) {
      console.log('Error downloading file: ' + err);
    } else {
      console.log('File downloaded successfully.');
    }
  });
});

// Endpoint for listing all files in the uploads directory
app.get('/listfiles',cors(), function(req, res) {
  const directoryPath = path.join(__dirname, 'uploads');
  fs.readdir(directoryPath, function(err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    res.send(files);
  });
});

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
