const chalk = require('chalk').default

const time = () =>
  new Date().toLocaleTimeString('es-AR', {
    hour12: false
  })

module.exports = {

  startup: () => {

    const checks = [
      {
  name: "Mongo Config",
  ok:
    !!process.env.USER_DB_MONGO_DB &&
    !!process.env.PASSWORD_DB_MONGO_DB &&
    !!process.env.NAME_DB_MONGO_DB
},
      {
        name: "Spotify Client ID",
        ok: !!process.env.SPOTIFY_CLIENT_ID
      },
      {
        name: "Spotify Secret",
        ok: !!process.env.SPOTIFY_CLIENT_SECRET
      },
      {
        name: "JWT Secret",
        ok: !!process.env.JWT_SECRET
      },
      {
        name: "Mail API Key",
        ok: !!process.env.SENDGRID_API_KEY
      }
    ]

    console.clear()

    console.log(chalk.hex('#ff0095')(`
████████╗███████╗███╗   ██╗██████╗ ███████╗███████╗██╗   ██╗
╚══██╔══╝██╔════╝████╗  ██║██╔══██╗██╔════╝██╔════╝╚██╗ ██╔╝
   ██║   █████╗  ██╔██╗ ██║██║  ██║█████╗  █████╗   ╚████╔╝
   ██║   ██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══╝    ╚██╔╝
   ██║   ███████╗██║ ╚████║██████╔╝███████╗██║        ██║
   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝        ╚═╝
`))

    console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))

    checks.forEach(check => {
      if (check.ok) {
        console.log(chalk.green(`✓ ${check.name}`))
      } else {
        console.log(chalk.red(`✗ ${check.name}`))
      }
    })

    console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))

    console.log(chalk.cyan(`
NODE : ${process.version}
ENV  : ${process.env.NODE_ENV || 'development'}
PORT : ${process.env.PORT}
`))
  },

  db: (msg) =>
    console.log(chalk.green(`[${time()}] [DB] ${msg}`)),

  spotify: (msg) =>
    console.log(chalk.magenta(`[${time()}] [SPOTIFY] ${msg}`)),

  auth: (msg) =>
    console.log(chalk.cyan(`[${time()}] [AUTH] ${msg}`)),

  matching: (msg) =>
    console.log(chalk.yellow(`[${time()}] [MATCHING] ${msg}`)),

  server: (msg) =>
    console.log(chalk.blue(`[${time()}] [SERVER] ${msg}`)),

  error: (msg) =>
    console.log(chalk.red(`[${time()}] [ERROR] ${msg}`)),

  debug: (msg) =>
    console.log(chalk.gray(`[${time()}] [DEBUG] ${msg}`))
}