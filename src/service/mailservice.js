var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    secureConnection:false,
    auth: {
      user: "aniketwani1729@gmail.com",
      pass: "dzmyodoqwnzdmjzj",
    },
    tls:{
        rejectUnauthorized:false,
    }
    
  });

  var mailOptions = {
  
    from: "aniketwani1729@gmail.com",
    to:toEmail,
    subject:subject,
    text: otpText,
  
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}


