const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
   message.delete()
   if (!args[0]) return message.reply("**Entrez une question !** :x:")
    let replies = ["Oui", "Non", "Je ne pense pas", "Tu es fou", "C'est possible", "Pas du tout", "Sûrement pas", "C'est logique", "Bah ouai", "C'est pas le cas", "Ta fait pipi dans ta tête", "Je suis fatigué pour répondre à cette question", "Ne me parle pas tout de suite", "Je suis fatigué pour te répondre à cette question", "Change de disque","Arrête de me poser toujour la même question", "Un autre jour"]
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setColor("#cb4b16")
    .addField(`Questions de ${message.author.username}`, question)
    .addField("Réponse du bot", replies[res]);
    message.channel.send(askEmbed)
    console.log(`Commande 8ball exécuté par ${message.author.username}`)
}          


module.exports.help = {
    name: '8ball'
};
