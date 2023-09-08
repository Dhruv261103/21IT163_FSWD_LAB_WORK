const express = require('express');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use a unique name for each uploaded file
  },
});

const upload = multer({ storage });

// Define the upload route
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ message: 'File uploaded successfully', filename: file.filename });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
