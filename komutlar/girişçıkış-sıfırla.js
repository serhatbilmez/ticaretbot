const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bu komutu kullanmak için **`Kanalları Yönet`** yetkisine sahip olman lazım! <:lahmacunhayir:533987770130104320>');
      let girişçıkış = JSON.parse(fs.readFileSync("././ayarlar/glog.json", "utf8"));
        let otorolkapat = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
        if(!girişçıkış[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Giriş Çıkış kanalını ayarlamadan sıfırlayamazsınız!`)
                .setColor("RED")
            message.channel.send({embed})
            return
        }
        delete girişçıkış[message.guild.id]
        fs.writeFile("./ayarlar/glog.json", JSON.stringify(girişçıkış), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`Giriş Çıkış kanalı başarıyla sıfırlandı! <:lahmacunevet:533987840720240640>`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kapat girişçıkış","kapat giriş-çıkış"],
  permLevel: 0
};

exports.help = {
  name: 'giriş-çıkış-sıfırla',
  description: 'Slots oyunu oynar',
  usage: 'otorolkapat'
};
   