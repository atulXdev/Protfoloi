import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `📬 New Message from ${name} | Portfolio`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background: #f4f4f4; border-radius: 12px;">
                <h2 style="color: #222831;">New Portfolio Contact</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr />
                <p><strong>Message:</strong></p>
                <p style="background:#fff; padding: 16px; border-radius:8px; color:#333;">${message}</p>
                <p style="color:#999; font-size:12px;">Sent from your portfolio website</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
