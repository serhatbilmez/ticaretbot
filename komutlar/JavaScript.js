const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "JavaScript"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id645159843052650498)) return message.channel.send("**|◆ Zaten bu role sahipsin :/")
  message.member.addRole(role)
  message.channel.send(`<a:elmas:630303164721135636> **|◆ JavaScript Free rolü başarıyla verildi!!<a:elmas:630303164721135636>**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['JavaScript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};