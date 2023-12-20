import nodemailer from 'nodemailer';

import config from '../config/config.js';

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.userEmail,
        pass: config.userPass,
      },
    })
  }

  sendEmail(to, subject, html, attachments = []) {
    return this.transporter.sendMail({
      from: config.userEmail,
      to,
      subject,
      html,
      attachments,
    });
  }
}

export default new EmailService();