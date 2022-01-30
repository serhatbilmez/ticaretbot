
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let tag = "!εcεʟ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.channel.send("!εcεʟ TAGINDA🧡 " + tagdakiler + " Üye Var 🌹")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagsay2"]
};

exports.help = {
  name: 'tsay2',
  description: 'Tagı kullanan üyelerin sayısını gösterir!',
  usage: 'tsay2'
};
 