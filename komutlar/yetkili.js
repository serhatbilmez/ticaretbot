const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("** ⚠ Sunucu Yetkili Komutları ⚠ **", `k!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nk!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk!unban = İstediğiniz Kişinin Yasağını Açar. \nk!sustur = İstediğiniz Kişiyi Susturur. \n k!sunucu-tanıt = Sunucunu Destek Sunucumda Tanıtır \n k!otorol = Sunucuya Giren Kişiye OtoRol Verir \n k!sayaç = Sunucuya Limitli Sayaç Koyar \n k!vkanal #kanal = belirtilen kanalda hoşgeldin güle güle resimleri atar \n k!rol-kur = Sunucuda Hazır Rol Kurar \n k!sunucu-kur = Hazır Sunucu Kurar `)
    message.channel.send(embedyardim);
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilik'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Sunucu Yetkilisi Komutlarını Gösterir',
  usage: 'yetkili [komut]'
};