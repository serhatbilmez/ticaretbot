const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args) => {

 
  if(!args[0]) return message.reply("Profilindeki ismini ayarlamam için önekimi kullanarak bir alternatif dene.\n **.isim-ayarla** veya **.isim** ")

    let isim = JSON.parse(fs.readFileSync("././jsonlar/isim.json", "utf8"));

    isim[message.author.id] = {
      isim: args[0]
    };



    fs.writeFile("././jsonlar/isim.json", JSON.stringify(isim), (err) => {
      if (err) console.log(err)
    });



    let sEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("İsminizi başarıyla değiştirdim.")
    .setDescription(`Profilinizde görünecek yeni isim ; **${args[0]}**`);

    message.channel.send(sEmbed);

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["isim"],
    permLevel: `Yetki gerekmiyor.`
  };

  exports.help = {
    name: 'isim-ayarla',
    category: 'profile',
    description: 'Profil bilginizdeki ismi ayarlar.',
    usage: 'isim-ayarla <İsim>'
  };