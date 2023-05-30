import { createTransport } from 'nodemailer'
import { defineMailer } from '#mail'

export default defineMailer({
  default: 'test',
  mailers: {
    test: createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT as unknown as number,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    }),
  },
})
