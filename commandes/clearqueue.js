const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
    let fetched = ops.active.get(message.guild.id)

    if (!fetched) return message.channel.send("**Il n'y aucune musique en cour ! :x:**")
    let data = ops.active.get(message.guild.id) || {}
    let queue = fetched.queue;
    data.queue = [];
    message.channel.send('**La queue à bien été clear ! :white_check_mark:**');
};



module.exports.help = {
    name: 'clearqueue'
};