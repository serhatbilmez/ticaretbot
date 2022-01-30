const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:BEEhayir:Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let id = message.mentions.channels.first() || message.channel
  let kanal = await db.fetch(`botuncalismamakanali_${id.id}`)
  
      if (kanal == null) {
        db.set(`botuncalismamakanali_${id.id}`, 'calismiyor')
        message.channel.send(`🎗️\`${id.name}\` adlı kanalda artık bot çalışmayacak. Botun çalışmasını açmak için tekrar \`${prefix}çalışmakanal #kanal\` yazmalısın.`)
      }
      
      if (kanal == 'calismiyor') {
        db.delete(`botuncalismamakanali_${id.id}`)
        message.channel.send(`🎗️\`${id.name}\` adlı kanalda artık bot çalışacak. Botun çalışmasını kapatmak için tekrar \`${prefix}çalışmakanal #kanal\` yazmalısın.`)
      }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çalışma-kanal'],
  permLevel: 4,
};

exports.help = {
  name: 'çalışmakanal',
  description: 'Belirttiğiniz kanalda botun çalışmasını engeller.',
  usage: 'çalışmakanal'
};
