const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
      let kuser = message.mentions.users.first() || message.author;
      
   var embed = new Discord.RichEmbed()
 .setDescription(`Yeni Kralınız ${kuser.username}`)
 .setColor("ffe600")
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 320)
    Jimp.read("https://cdn.discordapp.com/attachments/527578187660525640/528210029795344394/KRAL.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
          message.channel.send(embed)
 return message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
                                       
            
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kralol',
    description: 'kralol',
    usage: 'kralol'
  };