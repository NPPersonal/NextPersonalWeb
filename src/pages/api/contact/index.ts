import { NextApiRequest, NextApiResponse } from "next/types/index";
import nextRequestHandler from "../../../utils/next/NextReqHandler";
// import nodemailer from "nodemailer";
// import { MailOptions } from "nodemailer/lib/json-transport";
import sendegrid from "@sendgrid/mail";

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_SMTP,
//   port: Number(process.env.MAIL_SMTP_PORT) || 0,
//   auth: {
//     user: process.env.MAIL_SERVICE_USER,
//     pass: process.env.MAIL_SERVICE_PASS,
//   },
// });

const SenderMissing = {
  response: {
    status: 400,
    statusText: "sender parameter is missing value",
    data: { message: "sender parameter is missing value" },
    headers: {},
    config: {},
  },
};

sendegrid.setApiKey(process.env.SENDGRID_APIKEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await nextRequestHandler(req, res, async (req) => {
    // const successful = await transporter.verify();
    // if (successful) console.log("Ready to take mail message");

    // const { sender, name, content } = req.body;

    // if (!sender) throw SenderMissing;

    // const message: MailOptions = {
    //   from: sender,
    //   to: process.env.MAIL_RECIPIENT,
    //   subject: `New contact from ${name}`,
    //   text: content,
    //   replyTo: sender,
    // };

    // const info = await transporter.sendMail(message);
    // transporter.close();
    // return info;

    const { sender, name, content } = req.body;

    if (!sender) throw SenderMissing;

    const mailContent = {
      to: process.env.SENDGRID_RECIPIENT,
      from: process.env.SENDGRID_SENDER,
      subject: `New contact from ${name}`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        </head>
        <body>
          <div>
            <h4>From email: ${sender}</h4>
            <br />
            <p style="white-space: pre-line;">${content}</p>
          </div>
        </body>
      </html>
      
      `,
    };

    const info = await sendegrid.send(mailContent);
    return info;
  });
}
