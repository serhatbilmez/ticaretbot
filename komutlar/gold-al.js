const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (message.author.id != ayarlar.sahip) {
    return message.channel.send("Bu komut sahibime özdür.");
  }

  let nesne = args[0];
  if (!nesne) return message.channel.send("Id gir.");

  db.delete(`gold_${nesne}`);

  message.channel.send(
    `<a:of:638688762976665610>${nesne} Artık Gold Değil !<a:of:638688762976665610>`
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "goldal",
  description: "Napcan?",
  usage: "goldal"
};
