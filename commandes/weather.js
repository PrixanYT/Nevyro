const Discord = require("discord.js")
const weather = require("weather-js")
module.exports.run = async (client, message, ops, args) => {
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
        if (err) message.channel.send("**Veuillez indiquez un lieu ! :x:**");

        // We also want them to know if a place they enter is invalid.
        if (result.length === 0) {
            message.channel.send('**Veuillez indiquez un lieu exsistant ! :x:**') // This tells them in chat that the place they entered is invalid.
            return; // This exits the code so the rest doesn't run.
        }

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output

        // Let's use an embed for this.
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
            .setAuthor(`Weather de ${current.observationpoint}`) // This shows the current location of the weather.
            .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
            .setColor("RANDOM") // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
            .addField('Temp',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
            .addField('Degrés Type' ,location.degreetype, true)// This is the field that shows the degree type, and is inline
            .addField('Température',`${current.temperature} Degrés`, true)
            .addField('Environ',current.winddisplay, true)
            .addField('Himidité', `${current.humidity}%`, true)

            // Now, let's display it when called
            message.channel.send(embed);
    });
    }
    module.exports.help = {
       name: 'weather'
    };