var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

router.route('/')
    .post((req, res)=>{
        const emailData=req.body;
        let transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_ID, // generated ethereal user
                pass: process.env.EMAIL_PASS, // generated ethereal password
            },
            tls:{rejectUnauthorized: false}
        });
        
        let info = transporter.sendMail({
            from: process.env.EMAIL_ID, // sender address
            to: process.env.EMAIL_ID, // list of receivers
            subject: "Quenegenesis: contact message", // Subject line
            text: `
                From: ${emailData.fName} ${emailData.lName}
                Email: ${emailData.email}
                Phone: ${emailData.phone}
                Message: ${emailData.message}`, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });
        
        // console.log("Message sent: %s", info.messageId);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // verify connection configuration
        transporter.verify(function(err, success) {
            if (err) {
                res.send('There is a problem in the server, please try again later '+ err);
            } 
            else {
                res.send('Your message was sent successfully.');
            }
        });
        
 
        
    })

module.exports = router;