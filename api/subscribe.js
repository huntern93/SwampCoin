// api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }

    // Get API details from environment variables (set in Vercel dashboard)
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER || 'us1';

    // Create member data for MailChimp
    const data = {
      email_address: email,
      status: 'subscribed', // 'pending' if you want double opt-in
    };

    try {
      const response = await axios({
        method: 'post',
        url: `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
        data,
        auth: {
          username: 'anystring',
          password: API_KEY
        }
      });

      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed!' 
      });
    } catch (error) {
      // Handle existing members
      if (error.response && 
          error.response.data && 
          error.response.data.title === 'Member Exists') {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already subscribed!' 
        });
      }

      throw error;
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
}