import { readFileSync } from 'node:fs'
import { relative } from 'node:path'

import { addTemplate, createResolver, defineNuxtModule, useLogger } from '@nuxt/kit'
import defu from 'defu'
import fastGlob from 'fast-glob'

import { name, version } from '../package.json'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mail',
  },
  setup(_, nuxt) {
    const logger = useLogger(name)

    logger.info(`\`${name}\` setup...`)

    // // Discover the auth service location
    // logger.info(`\`${name}\` discovering \`defineMailer\`...`);

    const userDefinedServiceLocation = findExportConstDefineMailerSource(nuxt.options.serverDir)
    if (!userDefinedServiceLocation) {
      // logger.error(`\`${name}\` unable to find \`defineMailer\`...`);
      throw new Error(`\`${name}\` unable to find \`defineMailer\`...`)
    }

    const resolver = createResolver(import.meta.url)

    // Resolve the server-side runtime
    const serverRuntime = resolver.resolve('./runtime/server')

    // Resolve the user-defined service
    const userDefinedService = resolver.resolve(userDefinedServiceLocation)

    // Discover the auth service location
    logger.info(`\`${name}\` \`defineMailer\` found \`${relative(nuxt.options.serverDir, userDefinedService)}\``)

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {}

      // Inline module runtime in Nitro bundle
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === 'object' ? nitroConfig.externals : {}, {
          inline: [resolver.resolve('./runtime')],
        })

      nitroConfig.alias['#mail'] = serverRuntime
      nitroConfig.alias['#mail-service'] = userDefinedService
    })

    addTemplate({
      filename: 'types/mail.d.ts',
      getContents: () => {
        return `// Generated by ${name} ${version}

declare module '#mail' {
  /**
   * The MailerType type.
   */
  export type MailerType = typeof import('${userDefinedService}').default

  export const defineMailer: typeof import('${serverRuntime}').defineMailer
  export const sendMail: typeof import('${serverRuntime}').sendMail
  export const sendMailWith: typeof import('${serverRuntime}').sendMailWith
}
`
      },
    })

    nuxt.hook('prepare:types', (options) => {
      options.references.push({
        path: resolver.resolve(nuxt.options.buildDir, 'types/mail.d.ts'),
      })
    })

    logger.success(`\`${name}\` setup done`)
  },
})

function findExportConstDefineMailerSource(root: string) {
  for (const filename of fastGlob.sync('**/*.{js,ts}', { cwd: root, absolute: true })) {
    const fileContent = readFileSync(filename, 'utf8')
    const lines = fileContent.split('\n')

    for (const line of lines) {
      if (/^\s*export\s+default\s+defineMailer/.test(line)) {
        return filename
      }
    }
  }

  return null
}
