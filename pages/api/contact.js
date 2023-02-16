import nodemailer from 'nodemailer'
export default async function (req, res) {

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.email_test,
      },
      secure: true,
    });
    try{
      await transporter.sendMail({
        from: 'tiwari.abhishektiwari23@gmail.com',
      to: 'tiwari.abhishektiwari23@gmail.com',
      subject: `Message From ${req.body.first + req.body.last}`,
      text:  " Email: " + req.body.email,
      html: `
      <p>Name : ${req.body.first + " " + req.body.last}</p>
      <p>Subject : ${req.body.mailsubject}</p>
      <p>Message : ${req.body.content}</p>
      <p>Email : ${req.body.email}</p>`
      });}catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
      }
      try{
        await transporter.sendMail({
          from: 'tiwari.abhishektiwari23@gmail.com',
        to: req.body.email,
        subject: `Message From Abhishek Tiwari`,
        text:  " Email: " + req.body.email,
        html: `<p>Hi ${req.body.first + req.body.last}, </p>
        <p>Abhishek has received your mail and will respond to you soon, mean while you can conect him over his socils </p>`
        });}catch (error) {
          return res.status(500).json({ error: error.message || error.toString() });
        }
      return res.status(200).json({ error: "lll" });
  };

  
  
  
  