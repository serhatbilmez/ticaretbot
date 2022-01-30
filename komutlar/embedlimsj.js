const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')
exports.run = (client, message, args) => {

  let cp = args.slice().join(' ')
  const Mesaj = new RichEmbed()
    .setColor('RANDOM')
    .setDescription(cp)

  message.delete(`Mesaj_${message.author.id}`)
  
message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'embedyaz'
}