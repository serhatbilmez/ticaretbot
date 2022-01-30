const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()

.setTitle(`Özel Kodlama Bot Bilgisi`)
.addField(`Kodlayan`,`<@560073681162731541>`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL,)
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL) // şş saşlkda guild
.addField(`Botun Kullanıcı Sayısı`,client.users.size) // nası ya sldak neydi ?
.addField(`Botun Olduğu Sunucu Sayısı`,client.guilds.size) // bu varmı böyle bişe hm unutum 1 dk
.addField(`Bottaki Komut Sayısı`,client.commands.size)
//oldumu :D ?
.addField(`Sahip`, `<@560073681162731541>`,true) //imdatt efe dc bak bi haa burda niye hata var
.addField(`Botun Geliştiricisi`,`<@472412484305944576>`,true)
.addField(`Botun Geliştiricisi`,`<@461558194678792194>`,true)
.addField(`Bot Discord.js Versiyon`,Discord.version)
.addField(`Bot İd`,client.user.id) //cilent olan herşey botla ilgimi ? timam
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapıcı"],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: '',
  usage: 'test'
};