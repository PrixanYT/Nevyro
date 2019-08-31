const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
if (!message.member.voiceChannel) return message.channel.send("**Connectez vous à un salon vocal !** :x:")
    if (message.guild.me.voiceChannel) return message.channel.send("**Le bot est déjà connecté à un salon vocal !** :x:")
    const connection = message.member.voiceChannel.join();
    message.channel.send("**J'ai rejoint le vocal ! :white_check_mark:**")
}
module.exports.help = {
   name: 'leave'
};