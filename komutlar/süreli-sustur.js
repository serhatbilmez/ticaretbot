const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

//unutmayın 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Doğru Kullanım: k!süreli-sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya botun yetkisi belirttiğiniz kişiyi susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Muteli");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muteli",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Doğru Kullanım:  .sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> için yazma kapatıldı \nsüresi; ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'süreli-sustur',
  description: 'Sureli Susturur.',
  usage: 'süreli-sustur [Kullanıcı] [Süre]'
};