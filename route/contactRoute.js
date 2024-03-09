const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "shwetakohad22@gmail.com",
      pass: "skih pqog ozal akan",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "shwetakohad22@gmail.com",
    subject: `message from ${data.name}`,
    html: `
  <h3>Informations</h3>
  <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${data.message}</p>
`,
  };
  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ msg: "Failed to send email. Please try again later." });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ msg: "Thank you for contacting Shweta." });
  });
});
module.exports = router;
