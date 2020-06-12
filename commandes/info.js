const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = (client, message, args) => {
    var info = new Discord.RichEmbed()
    .setTitle("**Information du bot**")             
    .addField("Librairie", "discord.js, fs, ffmpeg-binaries,  opusscript, ytdl-core, enmap, ms, speedtest-net, superagent, moment, mathjs")
    .addField("Version du Bot","2.7")
    .addField("Développeur",`How to.. 💸#3447`)
    .addField("Nombre de commandes","67")
    .addField("Le bot à été crée le", moment.utc(client.user.createdAt).format("LLL"))
    .addField(`Le bot est sur`, `${client.guilds.size} serveur`)
    .addField(`Il y à`,`${client.users.size} membres au total sur tous les serveurs`)
    .addField("Hébergeur", "Informations impossible à donné")
    .addField("Serveur support du bot", "[Clique ici..](https://discord.gg/udcQ35J)", true)
    .addField("Invitation du bot", "[Clique ici..] (https://discordapp.com/api/oauth2/authorize?client_id=700071475117555823&permissions=8&scope=bot)", true)
    .setFooter("Merci de partager le bot sur tous vos serveur Discord")
    .setColor("RANDOM") 
message.channel.send(info) 

}

module.exports.help = {
    name: 'info'
};
