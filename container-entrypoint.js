const { entrypoint } = require('@exodus/secrets-manager') // eslint-disable-line @typescript-eslint/no-var-requires

entrypoint()
  .then(() => require('./bot.js')) // eslint-disable-line promise/catch-or-return
