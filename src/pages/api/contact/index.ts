import { NextApiRequest, NextApiResponse } from "next/types/index";
import nextRequestHandler from "../../../utils/next/NextReqHandler";
import sendegrid from "@sendgrid/mail";

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
