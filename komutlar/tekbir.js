const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (bot , msg , params) => {

exports.run = (bot, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bunu Özel Mesajda Kullanaman Aslanım.**')
return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()

.setAuthor ('Allahu Akbaaar!!')
.setColor(3447003)
.setTimestamp()
    .setDescription('')

 .setImage(`https://media1.tenor.com/images/47e5198ff81b4e0b3c2fc48e108ce7b4/tenor.gif?itemid=13426138`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tekbir',
  description: 'Allahu Akbaaar!!!',
  usage: 'tekbir'
};