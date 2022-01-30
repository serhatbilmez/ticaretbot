const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Yeniden başlıyayımmı Sahip?Lütfen yenilen Yaz Yeniden Başlamamı İstiyorsan**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "yenilen", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Hemen Yeniden Başlıyorum!Sahibim Bu Komutu 1 Dakkada 1 Kez Kullan**   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlıyor!**Bu Komutu 1 Dakka Arayla Kullanınız**`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Onaylamalı Reboot İşte',
  usage: 'reboot'
};