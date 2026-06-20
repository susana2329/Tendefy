const chalk = require('chalk').default
module.exports = {
    db: (msg) => console.log(chalk.green(`[DB] ${msg}`)),
    spotify: (msg) => console.log(chalk.magenta(`[SPOTIFY] ${msg}`)),
    auth: (msg) => console.log(chalk.cyan(`[AUTH] ${msg}`)),
    matching: (msg) => console.log(chalk.yellow(`[MATCHING] ${msg}`)),
    server: (msg) => console.log(chalk.blue(`[SERVER] ${msg}`)),
    error: (msg) => console.log(chalk.red(`[ERROR] ${msg}`))
}