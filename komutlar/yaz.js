const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Ne Yaziyim Onuda Yazı Ver').then(msg => {
    msg.delete(9000)
  })
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yazyazyaz',
  description: 'Belirtilen Mesajı Bota Yazdırır.',
  usage: 'yaz[mesaj]'
};