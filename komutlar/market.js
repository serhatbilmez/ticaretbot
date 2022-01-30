const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let istek = args[0]

  let user = message.mentions.users.first() || message.member;
  let gold = await db.fetch(`gold_${message.member.id}`);
  let para = await db.fetch(`para_${message.author.id}`);


 

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "k!";

  try {
    
    if (!istek) {
 
const e = new Discord.RichEmbed()
.setColor('BLACK')
.setDescription(`Mevcut ürünler: Gold Üye - 3.000 Puan!\n\nSatın alma: ${prefix}market gold`)
message.channel.send(e)
      return
    }
    
    if (istek === 'gold') {

      if (gold == 'acik') {
      const embed = new Discord.RichEmbed()
        .setDescription(`Zaten goldsun!`)
    .setColor('BLACK')
      .setTimestamp()
      message.channel.send({embed})
    
    
  } else if (para < 3000) {
        message.channel.send(`Ne yazık ki yeterli puana sahip değilsin!\nGold üye 3.000 Puan!`)
    } else if  (para > 3000) {
message.channel.send(`Artık goldsun!`)
db.add(`para_${message.member.id}`, -3000)
db.set(`gold_${message.member.id}`, 'acik')

    
} else if  (para = 3000) {
  message.channel.send(`Artık goldsun!`)
  db.add(`para_${message.author.id}`, -3000)
db.set(`gold_${message.member.id}`, 'acik')
      }
      return
    }

   
    } catch(err) {
      
    }

    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'market',
  description: 'Eşya',
  usage: 'market'
};