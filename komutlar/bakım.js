const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
var pref = "k!"

exports.run = async (client, message, args) => {
//if message.authot.id == ayarlar.sahip
  if (!args[0]) return message.channel.send(`aç yada kapat yazmalısın! Örnek: ${pref}bakımmod aç`)
 // if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    var i = await db.set(`oyun_${client.user.id}`, 'acik')
      message.channel.send('Bakım Modu açık')
    
  }
  if (args[0] == 'kapat') {
    var i = await db.set(`oyun_${client.user.id}`, 'kapali')
      message.channel.send('Bakım Modu kapalı')
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 3,
  kategori: "yapımcı"
};

exports.help = {
  name: 'bakımmod',
  description: 'Bakım Modunu Açar Isek Komut kullandırmaz',
  usage: 'bakımmod [aç\kapat]'
};

