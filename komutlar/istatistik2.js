const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `= İSTATİSTİKLER =

[BL] Yazılım.
• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   :: ${duration}
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        :: ${client.guilds.size.toLocaleString()}
• Kanallar         :: ${client.channels.size.toLocaleString()}
• Discord.JS sürüm :: v${Discord.version}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum2', 'i2', 'bi2', 'istatistikler2', 'kullanımlar2', 'botdurum2', 'bd2', 'istatisik2', 'stats2', 'stat2'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik2',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};