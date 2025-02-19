import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Imap from 'imap';
import { inspect } from 'util';

const imap = new Imap({
  user: process.env.EMAIL_USER || '',
  password: process.env.EMAIL_PASS || '',
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
});

function openInbox(cb: (err: Error | null, box: any) => void) {
  imap.openBox('INBOX', true, cb);
}

imap.once('ready', function () {
  openInbox(function (err, box) {
    if (err) throw err;
    const f = imap.seq.fetch('1:10', {
      bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
      struct: true,
    });

    f.on('message', function (msg, seqno) {
      console.log('Processing message #%d', seqno);
      let header = '';
      msg.on('body', function (stream, info) {
        stream.on('data', function (chunk) {
          header += chunk.toString('utf8');
        });
      });

      msg.once('end', function () {
        console.log(inspect(Imap.parseHeader(header)));
        const parsedHeader = Imap.parseHeader(header);
        const subject = parsedHeader.subject ? parsedHeader.subject[0] : '';
        const from = parsedHeader.from ? parsedHeader.from[0] : '';

        // Simple spam detection based on keywords
        const spamKeywords = ['spam', 'lottery', 'prize', 'winner'];
        const isSpam = spamKeywords.some(keyword => subject.toLowerCase().includes(keyword));

        if (isSpam) {
          console.log('Spam detected, moving email to spam folder:', from, 'Subject:', subject);
          imap.move(seqno.toString(), 'SPAM', function (err) {
            if (err) {
              console.log('Error moving email to spam folder:', err);
            } else {
              console.log('Email moved to spam folder successfully');
            }
          });
        } else {
          // Process the email normally
          console.log('Email from:', from, 'Subject:', subject);
        }
      });
    });

    f.once('error', function (err) {
      console.log('Fetch error: ' + err);
    });

    f.once('end', function () {
      console.log('Done fetching all messages!');
      imap.end();
    });
  });
});

imap.once('error', function (err: Error) {
  console.log(err);
});

imap.once('end', function () {
  console.log('Connection ended');
});

imap.connect();

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    if (website) {
      return NextResponse.json(
        { error: "Spam detected!" },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      replyTo: email,
      to: "umar@farouqkdesigns.com",
      subject: `New website message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
