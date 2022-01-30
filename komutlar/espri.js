const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri Yükleniyor..').then(message => {
   var espriler = ['Rock yapmayan kişiye ne denir? -Yaprock ' ,'Ben Yedigün içiyorum sen Onbeşgün iç. :D' ,'Sinemada on dakika ara dedi, aradım aradım açmadı.' ,'Yeni yapılmış resimlere ne denir? -Nevresim' ,'Tebrikler kazandınız, şimdi tencere oldunuz! ' ,'İshal olmuş böceğe ne denir? -Cırcır Böceği' ,'keklik askere giderse nolur? -Erkeklik' ,'Bizim CD sürücümüz ehliyeti nerden almış acaba ?! ' ,'Yılanlardan korkma, yılmayanlardan kork.' ,'Kırmızı giyen erkeğe ne denir? -Albay  ' ,'Ben kahve içiyorum, Nurgül Yeşilçay.'  ,'Bak şu karışıdaki uçak PİSTİ , ama bir türlü temizlemediler.'   ,'Top ağlarda, ben ağlamaz mıyım ?'  ,'Burger King, bende vezir  '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  } 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espriyap', 'yapespri', 'yapbiespri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri Yapar',
  usage: 'espri'
};