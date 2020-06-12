const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    var invite = new Discord.RichEmbed()
    .setTitle("**Clique sur le bouton bleu pour inviter Nevyro**")
    .setFooter("[Clique ici..] (https://discordapp.com/api/oauth2/authorize?client_id=700071475117555823&permissions=8&scope=bot)")
    .setColor("RANDOM") 
message.channel.send(invite) 
}

module.exports.help = {
    name: 'invite'
};
