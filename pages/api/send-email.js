import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

const clientPromise = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,serverSelectionTimeoutMS: 5000}).connect();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { recipient, subject, body , senderName , smtpUser , smtpPass , host , smtpPort } = req.body;
    console.log(senderName)


    const referenceCode = `REF-${Date.now()}`;


    const subjectWithRef = `${subject} [${referenceCode}]`;

    // Create SMTP transporter with environment variables
    let transporter = nodemailer.createTransport({
        host: host,
        port: smtpPort,
        secure: false, 
        auth: {
            user: smtpUser,
            pass: smtpPass
        }
    });

    // Email options
    let mailOptions = {
        from: `"${senderName}" <${smtpUser}>`, 
        to: recipient,
        subject: subjectWithRef, 
        text: body, 
        html: `<p>${body}</p>` 
    };

    try {

        // Attempt to send the email

        let info = await transporter.sendMail(mailOptions);

        // call to mongo here 
        
        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection('sentEmails');
        
        await collection.insertOne({
            smtpUser: smtpUser,
            senderName,
            recipient,
            subject: subjectWithRef,
            body,
            referenceCode,
            status: 'sent',
            messageId: info.messageId
        });

        res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
        console.error('Error sending email:', error); 
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
