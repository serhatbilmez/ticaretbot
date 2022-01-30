const ayarlar = require("../ayarlar.json")    
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 if(message.author.id != ayarlar.sahip) { return message.channel.send(":x: Sahibimin Komutunu Kullanamazsın")}
  
  let goldlar = db.fetch('goldlar');
  
  if (goldlar == undefined) goldlar = [];
  
  let mesaj = {embed: {
    title: "Goldlar:",
    description: "",
    color: 0xff9000
  }};
  
  Object.keys(goldlar).forEach((kisi) => {
    mesaj.embed.description += `<@${kisi}>\n`;
  });
  
  message.channel.send(mesaj);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldsay"],
  permLevel: 4
};
exports.help = {
  name: 'goldsay',
  description: '[Admin Komutu]',
  usage: 'goldsay'
};

