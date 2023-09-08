const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', // Use your email service provider
    port:587,
    auth: {
      user: 'keagan.reichert@ethereal.email', // Replace with your email address
      pass: 'dUkn8dbQcgT1VsHCac', // Replace with your email password
    },  
  });
  
  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Define email data
    const mailOptions = {
      from: email,
      to: 'keagan.reichert@ethereal.email', // Replace with the admin's email address
      subject: 'Contact Us Inquiry',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
