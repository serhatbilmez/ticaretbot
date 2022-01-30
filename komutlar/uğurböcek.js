const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
        .setAuthor('')
        .setColor(255, 165, 0)
        .setImage(`http://www.hareketligifler.net/data/media/567/ugur-bocegi-hareketli-resim-0075.gif`)
        .setDescription(message.author.username + " Yürümeyi Öğrendin Sende")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["uçböcek"],
    permLevel: 0
};

exports.help = {
    name: 'uğurböceği',
    description: 'Uğur Böcekleri Uçar',
    usage: 'uğurböceği uçar'
};