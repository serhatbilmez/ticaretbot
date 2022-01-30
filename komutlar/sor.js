const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const Cleverbot = require('cleverbot.io');
var bot = new Cleverbot('kvISf25WAVOV1H0i','CpkqsZcDKitBygg8kIf38qA3KmmNLwqm');

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "yukleniyorum").toString())  
bot.setNick('Valley');
let yazi = params.slice(0).join(' ');
 if (yazi.length < 1) return message.reply('**Bana Ney Sormak İstersin?**');
  message.channel.send(`**${emoji} Ne Söylesem Diye Düşünüyorum** 🤔 `).then(msg => msg.delete(10000));
bot.create(function (err, session) {
    bot.ask(yazi, function (err, response) {
        console.log(response)
    
        message.channel.send(response)
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['<@540066893361577984>'],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};