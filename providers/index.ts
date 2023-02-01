import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class DropboxDriverProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { DropboxDriver } = await import('../src/DropboxDriver')

    Ally.extend('Dropboxdriver', (_, __, config, ctx) => {
      return new DropboxDriver(ctx, config)
    })
  }
}
