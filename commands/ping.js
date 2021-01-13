const Command = require('./command');
const bot = require('../bot');

module.exports = class extends Command {
  name = 'ping';
  
  execute(msg) {
    msg.channel.send(`Pong! ${bot.ws.ping}`);
  }
}