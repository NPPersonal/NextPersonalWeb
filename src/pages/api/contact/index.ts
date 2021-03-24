import { NextApiRequest, NextApiResponse } from "next/types/index";
import nextRequestHandler from "../../../utils/next/NextReqHandler";
import nodemailer from 'nodemailer';
import { MailOptions } from "nodemailer/lib/json-transport";

const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.MAIL_SMTP,
    port: Number(process.env.MAIL_SMTP_PORT) || 0,
    auth: {
        user: process.env.MAIL_SERVICE_USER,
        pass: process.env.MAIL_SERVICE_PASS
    }
})

const SenderMissing = {
    response:{
        status: 400,
        statusText: 'sender parameter is missing value',
        data: {},
        headers: {},
        config: {},
    }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await nextRequestHandler(req, res, async (req) => {
    const successful = await transporter.verify();
    if(successful) console.log('Ready to take mail message');

    const {
        sender,
        name,
        content,
    } = req.body;

    if(!sender) throw SenderMissing;
    
    const message:MailOptions = {
        from: sender,
        to: process.env.MAIL_RECIPIENT,
        subject: `New contact from ${name}`,
        text: content,
        replyTo: sender
    }

    const info = await transporter.sendMail(message);
    return info;
  });
}