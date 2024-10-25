import axios from 'axios'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email_address } = body

  if (!email_address) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Email address is required',
      })
    )
  }

  try {
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      return sendError(
        event,
        createError({
          statusCode: 500,
          statusMessage: 'MailChimp configuration is missing',
        })
      )
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

    return { message: 'Successfully subscribed' }
  } catch (error) {
    console.error('MailChimp error:', error.response?.data || error.message)
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Failed to subscribe' })
    )
  }
})
