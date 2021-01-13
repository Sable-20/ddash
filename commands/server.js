const Command = require("./command");

module.exports = class extends Command {
    name = "server";
    category = "General";

    execute(msg) {
        const embed = new Discord.MessageEmbed()
            .setColor('DARK_NAVY')
            .setTitle("Server Stats")
            .addFields(
                { name: "Server Name", value: `${msg.guild.name}`, inline: true },
                { name: "Member Count", value: `${msg.guild.memberCount}`, inline: true }
            )
            .setTimestamp()
            .setFooter("Powered by your mom")

        msg.channel.send(embed);
    }
}