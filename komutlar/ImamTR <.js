 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://i.imgur.com/XRz2ied.jpg", "http://i.hurimg.com/i/hurriyet/75/750x422/5b7ba7772269a223a416a033.jpg", "https://previews.123rf.com/images/gorkemdemir/gorkemdemir1410/gorkemdemir141000025/32450434-turkish-kokorec-lamb-intestine-food-sandwich-with-midye-dolma.jpg", "http://i.hurimg.com/i/hurriyet/75/0x0/5c0fa7c8c03c0e11a005edaf.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("CANINMI ÇEKTİ ULENN.. <a:yum:553341691822866442>")
        .setColor("#FF69B4")
        .setFooter(`Tabiki İmam Olmak Lezetlli!`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'karadenizliimam',
  description: 'karadenizliimam (ciddiye almayın)',
  usage: 'karadenizliurfalı'
};