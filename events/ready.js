const Discord = require("discord.js")

module.exports = async (client, ready) => {
    console.log("Ayve est allumé avec succès !")
        setInterval(async () => {
      const statuslist = [
        `Prefix .`,
        `Version du bot: 2.7`,
        `${client.guilds.size} serveur`,
        `${client.users.size} membres`,
        `Merci de partager le bot ❤`,
        `Mise a jour le 19 avril à 22h10`
      ];
      const random = Math.floor(Math.random() * statuslist.length);
      
      try {
        await client.user.setPresence({
            game: {
            name: `${statuslist[random]}`
          },
          status: "online"
        });
      } catch (error) {
        console.error(error);
      }
      }, 90000);

}
