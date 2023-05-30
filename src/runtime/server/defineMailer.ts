import type { MailerOptions } from '@fixers/mail'
import { createMailer } from '@fixers/mail'

/**
 * Create a new {@link Mailer} instance.
 *
 * #### Example:
 *
 * ```ts
 * import { createTransport } from 'nodemailer'
 * import { defineMailer } from '#mail'
 *
 * const mailer = defineMailer({
 *   default: 'smtp',
 *   mailers: {
 *     smtp: createTransport({
 *       host: process.env.MAIL_HOST,
 *       port: process.env.MAIL_PORT,
 *       auth: {
 *         user: process.env.MAIL_USERNAME,
 *         user: process.env.MAIL_PASSWORD,
 *       }
 *     })
 *   }
 * })
 * ```
 */
export function defineMailer<const T extends MailerOptions>(options: T) {
  const mailer = createMailer<T>(options)

  ;(mailer as any).__nuxt = true

  return mailer
}
