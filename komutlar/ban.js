const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
message.delete();
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Kullanıcı giriniz.")
    if(bUser.id === client.user.id) return message.channel.send('Botu banlayamazsın'); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send('Sebep giriniz...')

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Yasaklama")
    .setColor("#bc0000")
    .addField("Yasaklanan Kişi", `${bUser} ID'si ${bUser.id}`)
    .addField("Yetkili", `<@${message.author.id}> ID'si ${message.author.id}`)
    .addField("Sebep", bReason);

  
  
  
  
    let incidentchannel = message.guild.channels.find(`name`, "ceza-takip-listesi");
    if(!incidentchannel) return message.channel.send("`ceza-takip-listesi` kanalını bulamıyorum.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banla'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Botun Atatürk  Sistemi.',
  usage: 'ban'
};