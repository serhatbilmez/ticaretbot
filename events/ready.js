const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    "🔴 k!yardım | k!davet ",
    "💪 7/24 Sınırsız Hizmet",
    "💪 k!gkanal #kanal",
    " k!canlıdestek | destek talebi !",
    " k!küfür-engel aç | Eklendi ",
    " Küfürlerini İzliyorum🔥🔥🔥",
    " k!sayaç-ayarla | Yepyeni Komut!",
    " k!sunucu-tanıt | Sunucunu Tanıtır ",
    " Güvenli Hizmet Sistemi",
    "7/24 Bot",
    "3,000+ KULLANICI 👦",
    " 110 SUNUCU 🥇"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setGame(oyun[random], "https://www.twitch.tv/yusufoyunda684");
  }, 2 * 9000);
};
