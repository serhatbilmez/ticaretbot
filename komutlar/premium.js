const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu sadece \`Sahibim\` kullanabilir.`)
    let id = client.guilds.get(args[0])
    let kanal = '553583991026876447';
    let kanal2 = '553579621136728074';
    if (!id) return message.channel.send(`<:minecrafturkiye:519886397482729473>Sunucu ID'sini girmelisin.`)
 
  db.fetch(`pre_${id.id}`).then(i => {
    
    if (i == null) {
      db.set(`pre_${id.id}`, 'acik')
      message.channel.send(`✔\`${id.name}\` adlı sunucuda premium açıldı.`)
      let embed1 = new Discord.RichEmbed()
      .setColor("BLUE")
      .setAuthor(`${client.user.username} | Premium Açıldı`, client.user.avatarURL)
      .setDescription(`**Sunucu ID :** ${id.id}\n**Sunucu Adı** : ${id.name}\n**Sunucu Sahibi :** ${id.owner}`)
      client.channels.get(kanal).send(embed1)
      client.channels.get(kanal2).send(embed1)
    }
    
    if (i == 'acik') {
      let embed2 = new Discord.RichEmbed()
      .setColor("BLUE")
      .setAuthor(`${client.user.username} | Premium Kapatıldı`, client.user.avatarURL)
      .setDescription(`**Sunucu ID :** ${id.id}\n**Sunucu Adı :** ${id.name}\n**Sunucu Sahibi** : ${id.owner}`)
      client.channels.get(kanal).send(embed2)
      client.channels.get(kanal2).send(embed2)
      db.delete(`pre_${id.id}`)
      db.delete(`bototorol_${id.id}`).then(db.delete(`botrolK_${id.id}`))
      db.delete(`sayacgirism_${id.id}`).then(db.delete(`sayaccikism_${id.id}`))
      message.channel.send(`:x:\`${id.name}\` adlı sunucuda premium kapatıldı.`)
    }
  
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pre',
  description: 'Bir sunucuya premium vermenizi / almanızı sağlar.',
  usage: 'pre <sunucu id>'
};