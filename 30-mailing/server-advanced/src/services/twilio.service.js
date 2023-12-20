import twilio from 'twilio';

import config from '../config/config.js';

class TwilioService {
  constructor() {
    this.client = twilio(
      config.twilio.accountSID,
      config.twilio.authToken
    );
  }

  sendSMS(to, body) {
    return this.client.messages.create({
      body,
      to,
      from: config.twilio.phoneNumber,
    });
  }
}

export default new TwilioService();