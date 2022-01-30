const Discord = require("discord.js");
const client = new Discord.Client();
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  
  	if (args[0] === '1') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance1/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance1/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '2') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance2&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance2/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance2/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '3') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance3&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance3/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance3/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '4') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance4&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance4/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance4/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '5') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance5&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance5/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance5/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '6') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance6&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance6/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance6/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '7') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance7&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance7/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance7/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '8') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance8&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '9') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance9&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./avatar/balance9/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./avatar/balance9/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
} 
  
    if (!args[0]) return message.channel.send('**Bu Komutta Toplam 9 Tane Çerçeve Var** `(Lütfen 1den 9a Kadar Bir Sayı Seç)`');
    if (args[0] < 1) return message.channel.send('**Bu Komutta Toplam 9 Tane Çerçeve Var** `(Lütfen 1den 9a Kadar Bir Sayı Seç)`');
    if (args[0] > 9) return message.channel.send('**Bu Komutta Toplam 9 Tane Çerçeve Var** `(Lütfen 1den 9a Kadar Bir Sayı Seç)`');
    if (isNaN(args[0])) return message.channel.send('**Bu Komutta Toplam 9 Tane Çerçeve Var** `(Lütfen 1den 9a Kadar Bir Sayı Seç)`');
 };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "eğlence"
  };
  
  exports.help = {
    name: 'balance',
    description: 'Avatariniza Balance Efekti Ekler.',
    usage: 'balance <rakam>'
  };