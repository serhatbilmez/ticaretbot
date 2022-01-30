const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: KU-Pİ BOT ",
    url: "https://discord.gg/faHCWvT",
    description: "GELİŞMİŞ TÜRKÇE BOT.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kardeşbot',
  description: 'sponsorları gösterir.',
  usage: 'kardeşbot'
};