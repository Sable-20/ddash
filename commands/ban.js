const { msg } = require('discord.js');
const Command = require('./command');

module.exports = class extends Command {
  name = 'ban';
  category = "Moderation";
  
  execute(msg, args) {
    if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("You are missing the permission `BAN_MEMBERS`")
    let User = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
    if (!User) return msg.channel.send("User could not be found.")
    if (User.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can\'t ban moderators")
    let banReason = args.join(" ").slice(22);
    if (!banReason) {
        banReason = "None";
    }
    User.send(`You have been banned from the guild for ${banReason}`);
    User.ban({reason: banReason});
  }
}