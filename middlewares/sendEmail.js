

const nodemailer = require("nodemailer");
require('dotenv').config()



exports.sendEmail = async (options) => {

    console.log(process.env.HOST)
    console.log(process.env.MAILPORT)
    console.log(process.env.USER)

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.MAILPORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};



// class EmailService {
//     constructor() {
//         this.transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: 'masaischoolproject@gmail.com',
//                 pass: 'pssmfzaekhcypqlj',
//             }
//         });
//     }

//     async sendEmail(emailOption) {
//         const mailOptions = {
//             from: 'masaischoolproject@gmail.com',
//             to: emailOption.email,
//             subject: emailOption.subject,
//             text: emailOption.text,
//         };

//         try {
//             await this.transporter.sendMail(mailOptions);
//             // console.log("Email sent successfully");
//         } catch (error) {
//             console.error("Error sending email:", error);
//             throw error;
//         }
//     }
// }

// module.export = { EmailService };