const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');

exports.run = async function(client, message, args) {
  
 //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  var x = args.slice(0).join(' ')
  
  if (!x) return message.reply("<a:yrdm:634100954735837225> **◆ Kaç Adet Mesaj Sileceğimi Yaz | Örneğin: k!temizle 50 **")
  
  if (isNaN(x)) return message.reply("<a:yrdm:634100954735837225> **◆ Kaç Adet Mesaj Sileceğimi Yaz |Örnegin k!temizle 50 **")
  
  if (x < 1) return message.reply("<a:no:634100898674507791> **◆ ``1`` Adetten Az Mesaj Silemem**")
  if (x > 100) return message.reply("<a:no:634100898674507791> **◆ ``100`` Adetten Fazla Mesaj Silemem**")
  
  let fetched = await message.channel.fetchMessages({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
  
  message.channel.send(`<a:tok:646575787683610645> **|◆ ${args[0]} adet mesaj başarıyla silindi!**`).then(msg => {
	msg.delete(3000)
})
  
	message.delete();
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'temizle',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};