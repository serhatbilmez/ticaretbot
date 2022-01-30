const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Sana YsfTeamS hava yolu ile yolladım :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: v2.0.5 Yapımcı: /YusufOyundaTR/#2255 \n\n_Botumuzun Vote Linki \n\n Eklenicektir  \n\n**:copyright: 2018 YsfTeamS BOT');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy','vote'],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'Botun Vote Linkini Verir',
  usage: 'vote'
};
