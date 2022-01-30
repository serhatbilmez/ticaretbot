const Discord = require("discord.js");

exports.run = async (client, message, args, color) => {
  let start = Date.now();
  message.channel.send("Veriler Hesaplanıyor!").then(message => {
    let pgecikme = Date.now() - start;
    let pAPI = client.ping.toFixed(2);

    let plusklyi = new Discord.RichEmbed()
      .setTitle(`:bell: Pong!`)
      .setColor(0xff2f2f)
      .addField("📶 Mesaj Gecikmesi", `${pgecikme}ms`, true)
      .addField("💻 Bot Gecikmesi", `${pAPI}ms`, true)
      .setFooter(
        "Pingim Yüksek İse 'BilalPasa' ya Bildiriniz!"
      );
    message.edit(plusklyi);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping"
};
