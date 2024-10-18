// C:\Repository\DebtFreePlanner\apps\public-site\api\services\newsletter_subscription.js
import axios from 'axios'

export default async (req, res) => {
  const { email_address } = req.body

  if (!email_address) {
    return res.status(400).json({ message: 'Email address is required' })
  }

  try {
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

    const response = await axios.post(
      `https://<dc>.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
      {
        email_address,
        status: 'subscribed',
      },
      {
        auth: {
          username: 'anystring', // Mailchimp API requires any string as the username
          password: mailchimpApiKey,
        },
      }
    )

    return res.status(200).json({ message: 'Successfully subscribed' })
  } catch (error) {
    console.error('MailChimp error:', error.response?.data)
    return res.status(500).json({ message: 'Failed to subscribe' })
  }
}
