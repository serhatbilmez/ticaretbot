const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Premium Hesap Gönderiliyor .. Bu İşlem Biraz Uzun Sürebilir !').then(message => {
   var hesaplar = ['hesap1' ,'hesap2' ,'hesap3'];
      var premium = hesaplar[Math.floor(Math.random() * hesaplar.length)];
            message.edit(`${premium}`);
 });
  } 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['preal', 'birpreltfn', 'alpre'],
  permLevel: 0
};

exports.help = {
  name: 'preal',
  description: 'Minecraft Premium Hesap Verir',
  usage: 'preal'
};