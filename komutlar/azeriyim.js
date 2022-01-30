const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "Azeriyem"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id642610662308315137)) return message.channel.send("**|◆ Zaten bu role sahipsin :/")
  message.member.addRole(role)
  message.channel.send(`<a:elmas:630303164721135636> **|◆ Azeri rolü başarıyla verildi!!<a:elmas:630303164721135636>**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Türk'],
  permLevel: 0
};

exports.help = {
  name: 'azeriyim',
  description: 'Türk kanallarına erişim sağlar.',
  usage: 'azeriyim'
};