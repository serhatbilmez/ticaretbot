const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
module.exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("AE-AT Diyorki;")
  .addField(`sahip bey dmden davet gönderdim 😜`)
  .addField(`:inbox_tray: Toplam Komutum`,client.commands.size)
  .setFooter(`AE-AT BOT`, client.user.avatarURL)
    if (message.author.id !== "532971584961642506") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Botun Ekli Olan Sunucu ID Giriniz`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'davet sistemi .',
  usage: 'invite'
};