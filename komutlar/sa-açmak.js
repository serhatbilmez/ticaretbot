const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: .sa-izini aç/kapat`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için `MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`sasa_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`**sa engellendi artık Selamün Aleyküm *Yasak** *.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`sasa_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`**izin verildi sa diyebilirsiniz**`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-izini',
  description: 'sa engelleyici',
  usage: 'sa-izini aç/kapat'
};