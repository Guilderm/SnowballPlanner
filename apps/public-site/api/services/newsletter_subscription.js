import axios from 'axios'

export default async (req, res) => {
  const { email_address } = req.body

  if (!email_address) {
    return res.status(400).json({ message: 'Email address is required' })
  }

  try {
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      return res
        .status(500)
        .json({ message: 'MailChimp configuration is missing' })
    }

    const dc = mailchimpApiKey.split('-')[1] // Extract the data center from the API key

    const response = await axios.post(
      `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
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

    console.log('MailChimp Response:', response.data) // Log the response data for debugging

    return res.status(200).json({ message: 'Successfully subscribed' })
  } catch (error) {
    console.error('MailChimp error:', error.response?.data || error.message)
    return res.status(500).json({ message: 'Failed to subscribe' })
  }
}
