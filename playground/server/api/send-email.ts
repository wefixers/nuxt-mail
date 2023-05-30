import { sendMail, sendMailWith } from '#mail'

export default eventHandler(async () => {
  await sendMail({
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'Testing Nodemailer',
    text: 'Hello from Nodemailer!',
  })

  await sendMailWith('test', {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'Testing Nodemailer',
    text: 'Hello from Nodemailer!',
  })
})
