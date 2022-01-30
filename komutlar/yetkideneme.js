module.exports.run = async (bot, message, args) => {
const { RichEmbed } = require('discord.js')
  if (message.author.id != '532971584961642506') return message.channel("Beni kandıramazsın")
let embed = new RichEmbed()
  .setDescription("Yazma İşlemi Başladı.")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setColor(0x1D82B6)
message.channel.send(embed)
      message.channel.startTyping();
  
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['yaz'],
  permLevel: 4 
};

exports.help = {
  name: 'yazıyor', 
  description: 'Yazıyor Yazıyor...',
  usage: 'yazıyor'
};