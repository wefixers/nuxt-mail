import type { MailerProvider, SendMailOptions } from '@fixers/mail'
import type { MailerType } from '#mail'

// @ts-expect-error, internal module
import _mailer from '#mail-service'

type inferConfig<T> = T extends MailerProvider<infer U, any> ? U : never
type MailerKey = keyof inferConfig<MailerType>

/**
 * Sends an email.
 */
export async function sendMail(email: SendMailOptions) {
  return await (_mailer as MailerType).sendMail(email)
}

/**
 * Sends an email with a specific mailer.
 */
export async function sendMailWith(mailer: MailerKey, email: SendMailOptions) {
  return await (_mailer as MailerType).sendMailWith(mailer, email)
}
