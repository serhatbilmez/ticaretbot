const Discord = require('discord.js');

let botid = ('540066893361577984') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Ekstra Komutları`)
    .addField('k!sunucutanıt', 'Destek Sunucusunda Sunucunu Tanıtır.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!tekme-at', 'tekme atarsınız..')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!canlıdestek', 'Yetkililer İle İletişime Geçersiniz.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!vkanal', 'hoşgeldin görüşürüz resimleri ayarlar.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!sayaç(Yapım Aşamasında) (limit) (#kanal)', 'sayaç ayarlar.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!aigara', 'Şakadan Sigara İçersiniz.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!triggered', 'Avatarınıza Trigger Efekti Verir.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!sahip', 'Sahip Komutlarını Gösterir.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!saat', 'Saatinizi Algılar Ve Size Söyler.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!sev', 'birisini Seversiniz.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!rol-ver', 'Kişiye Rol Verir.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k!otorol', 'Otorol Ayarlar.')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=540066893361577984&scope=bot&permissions=805314750) **|** [Destek Sunucusu](https://discord.gg/NS2tVJF) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/540066893361577984/vote) **|** [Web Sitesi](https://ysfteams.glitch.me)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ekstra',
  description: '',
  usage: ''
};


