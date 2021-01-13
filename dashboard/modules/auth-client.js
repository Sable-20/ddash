const OAuthClient = require('disco-oauth');
const config = require('../../config.json');

const Client = new OAuthClient(config.bot.id, config.bot.secret);
Client.setRedirect(`${config.dashboardURL}/auth`);
Client.setScopes('identify', 'guilds');

module.exports = Client