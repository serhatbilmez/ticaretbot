////////// Sadece Glitch De Çalışır //////////////////////////////////////////////
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(` dur!, ufak bir sıkıntı olabilir`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// ///////////////////////////////////////////////////////////////////////////////g
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
require("./util/eventLoader")(client);

let think = client.emojis.get("564885548372590605");
var prefix = ayarlar.prefix;
let hereEngel = JSON.parse(
  fs.readFileSync("././jsonlar/hereEngelle.json", "utf8")
);
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
//Güvenlik
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment(kurulus).format("dddd");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  if (!kanal) return;
  const attachment = new Discord.Attachment(canvas.toBuffer(), "güvenlik.png");
  kanal.send(attachment);
});

//Hg-bb
client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gc = JSON.parse(fs.readFileSync("./ayarlar/gc.json", "utf8"));

  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal);
  if (!hgK) return;
  let username = member.user.username;

  const bg = await Jimp.read(
    "https://cdn.discordapp.com/attachments/597433546868654106/627436322839199755/hg.png"
  );
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 10)
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else if (member.user.tag.length > 0)
    font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 245, 300, member.user.tag);
  await userimg.resize(187, 169); ////boyut
  await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png");
  setTimeout(function() {
    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
  }, 1000);
  setTimeout(function() {
    fs.unlink("./img/" + member.id + ".png");
  }, 10000);
  let hgm = JSON.parse(fs.readFileSync("./ayarlar/hgm.json", "utf8"));
  const hgmK = member.guild.channels.get(hgm[member.guild.id].gkanal);
  var kullanici = member.tag;
  var sunucu = member.guild.name;
  hgmK.send(`${gc[member.guild.id].mesaj}`);
});
client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gc = JSON.parse(fs.readFileSync("./ayarlar/gc.json", "utf8"));
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal);
  if (!hgK) return;
  let username = member.user.username;

  const bg = await Jimp.read(
    "https://cdn.discordapp.com/attachments/597433546868654106/627436724125040664/bb.png"
  );
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 10)
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else if (member.user.tag.length > 0)
    font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 245, 300, member.user.tag);
  await userimg.resize(189, 173); ////boyut
  await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png"); ///sağa sola, yukarı aşşa
  setTimeout(function() {
    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
  }, 1000);
  setTimeout(function() {
    fs.unlink("./img/" + member.id + ".png");
  }, 10000);
});

//Durum
client.on("ready", () => {
  const moment = require("moment");
  require("moment-duration-format");

  setInterval(() => {
    const calismasure = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    let botdurum = client.channels.find(c => c.id === "650767314064637952"); //Botun sürekli mesaj atacağı kanal.
    const botistatistik = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle("= Bot İstatistikleri =")

      .addField(
        `RAM`,
        `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
      )
      .addField(`Çalışma Süresi`, `${calismasure}`)
      .addField(`Ping`, `${client.ping}`)
      .addField(`discord.js`, `v${Discord.version}`)
      .addField(
        `Bilgi`,
        `${client.guilds.size.toLocaleString()} sunucu ve ${
          client.users.array().length
        } kullanıcıya hizmet veriyor.`
      )
      .setTimestamp()
      .setFooter("Yapımcı: BilalPasa");
    //https://c...content-available-to-author-only...k.cf
    botdurum.send(botistatistik);
  }, 3600000); //Milisaniye cinsinden. 1 saniye =  1000 milisaniye. Örnek Olarak 1 saat = 3600000milisaniye
  //https://c...content-available-to-author-only...e.com/tr/u/dönüştürmek/milisaniye/a/saniye Bu siteden hesaplamasını yapabilirsiniz.
});
//İnvite
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);

    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL)
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı kullanıcı sunucuya katıldı , davet eden kullanıcı:** \`\`${davetçi.tag}\`\` (\`\`${invite.uses}\`\` **adet daveti var**)`
      );
    member.guild.channels.get("651462437580570654").send(embed);
  });
});
//KanalDdgos
function vipA() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`☩ | KU-Pİ ∞`);
      vipB();
    }, 3000);
  });
}

function vipB() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`☩ | k!yardım`);
      vipC();
    }, 3000);
  });
}
function vipC() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`🇹🇷 | k!davet`);
      vipA();
    }, 3000);
  });
}

client.on("ready", async message => {
  vipA();
});
//Sayaç
client.on("message", async message => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  if (sayac[message.guild.id]) {
    if (sayac[message.guild.id].sayi <= message.guild.members.size) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `🎗️Tebrikler ${message.guild.name}! Başarıyla **${sayac[message.guild.id].sayi}** kullanıcıya ulaştık! Sayaç sıfırlandı!`
        )
        .setColor(ayarlar.renk)
        .setTimestamp();
      message.channel.send({ embed });
      delete sayac[message.guild.id].sayi;
      delete sayac[message.guild.id];
      fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), err => {
        console.log(err);
      });
    }
  }
});

client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  const channel = member.guild.channels.find("name", "sayaç");
  channel.send(
    `👋**${member.user.tag}** Aramıza Katıldı  **${
      sayac[member.guild.id].sayi
    }** olmamıza son **${sayac[member.guild.id].sayi -
      member.guild.members.size}** üye kaldı!🚀`
  );
});

client.on("guildMemberRemove", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  const channel = member.guild.channels.find("name", "sayaç");
  channel.send(
    `❌**${member.user.tag}** Aramızdan Ayrıldı  **${
      sayac[member.guild.id].sayi
    }** olmamıza son **${sayac[member.guild.id].sayi -
      member.guild.members.size}** üye kaldı!🚀`
  );
});
//Güvenlik
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/güvenlik.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  var kontrol2;
  if (kurulus > 7)
    kontrol = `${client.emojis.get("600973127006289941")} Güvenli!`;
  if (kurulus < 7)
    kontrol = `${client.emojis.get("614768740122230784")} Güvenli Değil!`;

  gözelkanal.send(
    "" +
      member.user.tag +
      "` sunucuya katıldı! Güvenilir mi? **" +
      kontrol +
      "**"
  );
});
//mod log
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  var user = message.author;

  var kanal = await db.fetch(`modlogK_${message.guild.id}`);
  if (!kanal) return;
  var kanal2 = message.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
    .addField("Kullanıcı Tag", message.author.tag, true)
    .addField("ID", message.author.id, true)
    .addField("Silinen Mesaj", "```" + message.content + "```")
    .setThumbnail(message.author.avatarURL);
  kanal2.send(embed);
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  var user = oldMsg.author;

  var kanal = await db.fetch(`modlogK_${oldMsg.guild.id}`);
  if (!kanal) return;
  var kanal2 = oldMsg.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
    .addField("Kullanıcı Tag", oldMsg.author.tag, true)
    .addField("ID", oldMsg.author.id, true)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .setThumbnail(oldMsg.author.avatarURL);
  kanal2.send(embed);
});

client.on("roleCreate", async role => {
  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("roleDelete", async role => {
  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("roleUpdate", async role => {
  if (!log[role.guild.id]) return;

  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  var kanal = await db.fetch(`modlogK_${oldMember.guild.id}`);
  if (!kanal) return;
  var kanal2 = oldMember.guild.channels.find("name", kanal);

  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(
        `**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`
      );
    kanal2.send(embed);
  } else if (newUserChannel === undefined) {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(
        `**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`
      );
    kanal2.send(embed);
  }

  client.on("channelCreate", async (channel, member) => {
    var kanal = await db.fetch(`modlogK_${member.guild.id}`);
    const hgK = member.guild.channels.find("name", kanal);
    if (!hgK) return;
    if (!channel.guild) return;
    if (channel.type === "text") {
      var embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
        .setFooter(`ID: ${channel.id}`);
      embed.send(embed);
    }
    if (channel.type === "voice") {
      var embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
  });

  client.on("channelDelete", async channel => {
    const fs = require("fs");
    var kanal = await db.fetch(`modlogK_${channel.guild.id}`);

    const hgK = channel.guild.channels.find("name", kanal);
    if (!hgK) return;
    if (channel.type === "text") {
      let embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
    if (channel.type === "voice") {
      let embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
  });
});
//FegideDeğişenKanal
function kanaladı1() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`KU-Pİ`);
      kanaladı2();
    }, 10000);
  });
}
function kanaladı2() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`BOT`);
      kanaladı3();
    }, 10000);
  });
}
function kanaladı3() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`GURURLA SUNAR`);
      kanaladı4();
    }, 10000);
  });
}
function kanaladı4() {
  return new Promise(resolve => {
    setTimeout(() => {
      client.channels.get(`635039111719419904`).setName(`Sizin İçin Varız 🎗️`);
      kanaladı1();
    }, 10000); // kanal adının değişme hızı düşürmeyin kasma yaratır !
  });
}
//Müzik
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyCkT_L10rO_NixDHNjoAixUu45TVt0ES-s");
const queue = new Map();

client.on("message", async msg => {
  if (msg.author.bot) return undefined;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];

  if (command === "k!çal") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription("❎ | Lütfen Seli Bir Kanala Giriş Yapınız!")
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Lütfen Seli Bir Kanala Giriş Yapınız!")
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Şarkıyı Çalamıyorum Bu Kanalda Konuşma Yetkim Yok!")
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel
        .sendEmbed(new Discord.RichEmbed())
        .setTitle(`✅** | **${playlist.title}** Adlı Şarkı Kuyruğa Eklendi!**`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;

          msg.channel.sendEmbed(
            new Discord.RichEmbed()
              .setTitle("Şarkı Seçimi")
              .setDescription(
                `${videos
                  .map(video2 => `**${++index} -** ${video2.title}`)
                  .join("\n")}`
              )
              .setFooter(
                "Lütfen 1-10 Arasında Bir Rakam Seçiniz 10 Saniye İçinde Liste İptal Edilecektir!"
              )
              .setFooter("Örnek Kullanım 1")
              .setColor("0x36393E")
          );
          msg.delete(5000);
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.sendEmbed(
              new Discord.RichEmbed()
                .setColor("0x36393E")
                .setDescription(
                  "❎ | **10 Saniye İçinde Şarkı Seçmediğiniz İçin seçim İptal Edilmiştir!**."
                )
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.sendEmbed(
            new Discord.RichEmbed()
              .setColor("0x36393E")
              .setDescription("❎ | YouTubede Böyle Bir Şarkı Yok !**")
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "k!gir") {
    return new Promise((resolve, reject) => {
      const voiceChannel = msg.member.voiceChannel;
      if (!voiceChannel || voiceChannel.type !== "voice")
        return msg.reply("Kanalda Kimse Olmadığından Çıkıyorum!");
      voiceChannel
        .join()
        .then(connection => resolve(connection))
        .catch(err => reject(err));
    });
  } else if (command === "k!geç") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Seli Bir Kanala Giriş Yapınız!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ **Şu An Zaten Şarkı Çalmıyorum!")
      );
    serverQueue.connection.dispatcher.end("**Sıradaki Şarkıya Geçildi!**");
    return undefined;
  } else if (command === "k!durdur") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Seli Bir Kanala Giriş Yapınız!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Şu An Zaten Şarkı Çalmıyorum!")
      );
    msg.channel.send(
      `:stop_button: **${serverQueue.songs[0].title}** Adlı Şarkı Durduruldu`
    );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("**Şarkı Bitti**");
    return undefined;
  } else if (command === "k!ses") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Seli Bir Kanala Giriş Yapınız!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Çalmayan Müziğin Sesine Bakamam")
      );
    if (!args[1])
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle(
            `:loud_sound: Şuanki Ses Seviyesi: **${serverQueue.volume}**`
          )
          .setColor("RANDOM")
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`:loud_sound: Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
        .setColor("RANDOM")
    );
  } else if (command === "k!çalan") {
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("❎ | Şu An Şarkı Çalınmıyor!")
          .setColor("RANDOM")
      );
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Çalan")
        .addField(
          "Başlık",
          `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`,
          true
        )
        .addField(
          "Süre",
          `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`,
          true
        )
    );
  } else if (command === "k!sıra") {
    let index = 0;
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("❎ | **Şarkı Kuyruğunda Şarkı Bulunmamakta**")
          .setColor("RANDOM")
      );
    return msg.channel
      .sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Şarkı Kuyruğu")
          .setDescription(
            `${serverQueue.songs
              .map(song => `**${++index} -** ${song.title}`)
              .join("\n")}`
          )
      )
      .addField("Şu Anda Çalınan: " + `${serverQueue.songs[0].title}`);
  } else if (command === "k!duraklat") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("**:pause_button: Şarkı Durduruldu!**")
          .setColor("RANDOM")
      );
    }
    return msg.channel.send("❎ | **Şarkı Çalmıyor Şu An**");
  } else if (command === "k!devam") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("**:arrow_forward: Şarkı Devam Ediyor!**")
          .setColor("RANDOM")
      );
    }
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle("**❎ | Şu An Şarkı Çalınmıyor!**")
        .setColor("RANDOM")
    );
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(
        `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
      );
      queue.delete(msg.guild.id);
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle(
            `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
          )
          .setColor("RANDOM")
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`✅ | **${song.title}** Adlı Şarkı Kuyruğa Eklendi!`)
        .setColor("RANDOM")
    );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "❎ | **Yayın Akış Hızı Yeterli Değil.**")
        console.log("Şarkı Bitti.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.sendEmbed(
    new Discord.RichEmbed()
      .setTitle("**🎙 Şarkı Başladı**", `https://i.hizliresim.com/RDm4EZ.png`)
      .setThumbnail(
        `https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`
      )
      .addField("\nBaşlık", `[${song.title}](${song.url})`, true)
      .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
      .addField("Süre", `${song.durationm}:${song.durations}`, true)
      .setColor("RANDOM")
  );
}
//Üye Sayısı Sunucu
client.on("guildMemberAdd", member => {
  let Sunucu = client.guilds.get("630289272905269269");
  Sunucu.setName(`KU-Pİ Destek Sunucusu - ${Sunucu.memberCount} Kişi`);
});

client.on("guildMemberRemove", member => {
  let Sunucu = client.guilds.get("630289272905269269");
  Sunucu.setName(`KU-Pİ Destek Sunucusu - ${Sunucu.memberCount} Kişi`);
});
//Seviye
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3);
  }

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    db.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});
//Otorol
client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let arole = otorole[member.guild.id].sayi;
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("Otorol Sistemi")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/648137430913908736/649294444855689216/kupi.gif"
    )

    .setDescription(
      `<a:gel:648155789436911616>Sunucuya hoşgeldin \`@${member.user.tag}\` otomatik rol verildi. `
    )
    .setColor("GREEN")
    .setFooter("Botify", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `<a:gel:648155789436911616> | Sunucuya hoşgeldin \`@${member.user.tag}\` otomatik rol verildi.`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("guildMemberAdd", async member => {
  let autorole = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let role = autorole[member.guild.id].sayi;

  member.addRole(role);
});

//ReklamKick
client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`);
  let kullanici = message.member;
  if (reklamkick == "kapali") return;
  if (reklamkick == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("KU-Pİ Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("KU-Pİ Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam kick sistemi`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("KU-Pİ Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `Reklam ban sistemi`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("KU-Pİ Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});
//Rol Kur Oto
client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "rol-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`
    );
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        " Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir."
      );
    message.channel.awaitMessages(response => response.content === "evet", {
      max: 1,
      time: 10000,
      errors: ["time"]
    });

    message.guild.createRole({
      name: "💎 | Sunucu Sahip",
      color: "ff0000",
      permissions: ["ADMINISTRATOR"]
    });

    message.guild.createRole({
      name: "🌺 | Genel Sorumlu",
      color: "49ff00",
      permissions: [
        "MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES",
        "KICK_MEMBERS"
      ]
    });

    message.guild.createRole({
      name: "💮 | Yönetici",
      color: "ffb400",
      permissions: [
        "MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES"
      ]
    });

    message.guild.createRole({
      name: "🔨 | Partner Sorumlusu",
      color: "#FF4D00"
    });

    message.guild.createRole({
      name: "💸 | Booster",
      color: "#FF77FF"
    });

    message.guild.createRole({
      name: "♾️ | Mustafa Kemal Atatürk",
      color: "#ED9121"
    });

    message.guild.createRole({
      name: "🎑 | Developer",
      color: "#FFCC00"
    });

    message.guild.createRole({
      name: "🌻 | Family",
      color: "#FF8C69"
    });

    message.guild.createRole({
      name: "⚜ | Partner",
      color: "#002FA7"
    });

    message.guild.createRole({
      name: "🔫 | Tek Tabanca",
      color: "#00CCCC"
    });

    message.guild.createRole({
      name: "💖 | Sevgiler",
      color: "#CD00CC"
    });

    message.guild.createRole({
      name: "🌌 | Kız",
      color: "d300ff"
    });

    message.guild.createRole({
      name: "🌃 | Erkek",
      color: "#0000FF"
    });

    message.guild.createRole({
      name: "🛡 | Discord Bot",
      color: "0006ff"
    });

    message.channel.send("⍫ Gerekli Roller 🌹");
  }
});
// Kullanıcı Bilgi
client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "bilgi")) {
    var year = message.author.createdAt.getFullYear();
    var month = message.author.createdAt.getMonth();
    var day = message.author.createdAt.getDate();
    var men = message.mentions.users.first();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "") {
      var z = message.author;
    } else {
      var z = message.mentions.users.first();
    }

    let d = z.createdAt;
    let n = d.toLocaleString();
    let x;
    let y;

    if (z.presence.game !== null) {
      y = `${z.presence.game.name}`;
    } else {
      y = "No Playing...";
    }
    if (z.bot) {
      var w = "BOT";
    } else {
      var w = "MEMBER";
    }
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`**Bilgi** ${z.username}`)
      .addField("`İsim`", `**<@` + `${z.id}` + `>**`, true)
      .addField("`ID`", "**" + `${z.id}` + "**", true)
      .addField("`Durum`", "**" + y + "**", true)
      .addField("`Hesap türü`", "**" + w + "**", true)
      .addField("`Discriminator (Tag)`", "**#" + `${z.discriminator}**`, true)
      .addField("`Hesabın oluşturulma zamanı`", year + "-" + month + "-" + day)
      .addField(
        "`Sunucuyu katıldığı tarih`",
        message.member.joinedAt.toLocaleString()
      )
      .addField("`Last Message`", message.author.lastMessage)

      .setThumbnail(`${z.avatarURL}`)
      .setFooter(message.author.username, message.author.avatarURL);

    message.channel.send({ embed });
    if (!message) return message.reply("**Birşeyler ters gitti ❌ **");
  }
});
//Tag Otorol
client.on("userUpdate", async (eski, yeni) => {
  if (eski.username !== yeni.username) {
    if (
      !yeni.username.includes("KU-Pİ/") &&
      client.guilds
        .get("630289272905269269")
        .members.get(yeni.id)
        .roles.has("645251553438990336")
    ) {
      client.guilds
        .get("630289272905269269")
        .members.get(yeni.id)
        .removeRole("642640146721931283");
      client.channels
        .get("633982737077764126")
        .send(`**${yeni} "KU-Pİ/" tagını çıkardı!Rolü Alındı**`);
    }
    if (
      yeni.username.includes("KU-Pİ/") &&
      !client.guilds
        .get("630289272905269269")
        .members.get(yeni.id)
        .roles.has("645251553438990336")
    ) {
      client.channels
        .get("633982737077764126")
        .send(`**${yeni} "KU-Pİ/" tagını aldı!Rolü Verildi**`);
      client.guilds
        .get("630289272905269269")
        .members.get(yeni.id)
        .addRole("642640146721931283");
    }
  }
});
//Gold
client.on("message", async message => {
  const request = require("node-superfetch");
  let i = await db.fetch(`gold_${message.member.id}`);
  let dakdest = await db.fetch(`goldzzz_${message.member.id}`);
  let timeout = 300000;
  const ms = require("parse-ms");
  if (i == "acik") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (message.member.bot) return;

      if (message.content.length > 1) {
        db.set(`goldzzz_${message.author.id}`, Date.now());

        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setTitle(
            "**<a:goldum:638434275028369418>          Aman Allah'ım Gold Üye !            <a:goldum:638434275028369418>**"
          )
          .setDescription(
            "**<a:goldum:638434275028369418>          📢<a:kalp:630303114154475536>Bir Gold Üye Belirdi!<a:kalp:630303114154475536><a:gold:638434325347696676>       <a:goldum:638434275028369418>**"
          );

        message.channel.send(embed).then(msg => msg.delete(5000));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on("message", async msg => {
  db.fetch(`reklam_${msg.guild.id}`).then(i => {
    if (i == "Açık") {
      const reklam = [
        "discordapp",
        ".com",
        ".net",
        ".xyz",
        ".tk",
        "gulu",
        ".pw",
        ".io",
        ".me",
        ".gg",
        "www.",
        "https",
        "http",
        ".gl",
        ". com"
      ];
      if (reklam.some(word => msg.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();

            return msg
              .reply(`Reklam Tespit Edildi! ${ayarlar.uyarı}`)
              .then(msg => msg.delete(3000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (i == "Kapalı") {
    }
  });
});

client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/540081242285146133/564341071514042368/hg.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 430, 170, member.user.tag);
    await userimg.resize(362, 362);
    await bg.composite(userimg, 43, 26).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/562631556397662218/564447952731504641/bb.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 400, 112, member.user.tag);
    await userimg.resize(101, 104);
    await bg.composite(userimg, 8, 4).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

client.on("guildDelete", guild => {
  let rrrsembed = new Discord.RichEmbed()

    .setColor("RED")
    .setTitle(" 😔 Botu Attılar 🔥 ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("634416523770986536").send(rrrsembed);
});

client.on("guildCreate", guild => {
  let rrrsembed = new Discord.RichEmbed()

    .setColor("GREEN")
    .setTitle(" 🌹 Bot Eklendi ❤")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("634416523770986536").send(rrrsembed);
});
client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let otorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let arole = otorole[member.guild.id].sayi;
  let giriscikis = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("Otorol Sistemi")
    .setDescription(`:inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
    .setColor("GREEN")
    .setFooter("cc", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:inbox_tray: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});
//Kullanıcı sunucudan ayrıldığında ayarlanan kanala mesaj gönderelim.
client.on("guildMemberAdd", async member => {
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let role = autorole[member.guild.id].sayi;

  member.addRole(role);
});

client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(``)
    .setColor("RED")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:inbox_tray: **${member.user.tag}** Adlı Kullanıcı Katıldı. \`${
        sayac[member.guild.id].sayi
      }\` Kişi Olmamıza \`${sayac[member.guild.id].sayi -
        member.guild.memberCount}\` **Kişi Kaldı \`${
        member.guild.memberCount
      }\` Kişiyiz!`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("guildMemberRemove", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(``)
    .setColor("RED")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:outbox_tray: **${member.user.tag}** Adlı Kullanıcı Ayrıldı. \`${
        sayac[member.guild.id].sayi
      }\` Kişi Olmamıza \`${sayac[member.guild.id].sayi -
        member.guild.memberCount}\` Kişi Kaldı \`${
        member.guild.memberCount
      }\` Kişiyiz! `
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3);
  }

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    db.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});

client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **kabul** yazınız.`
    );
    if (!message.member.hasPermission("OWNER"))
      if (message.author.id !== "560073681162731541")
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel
      .awaitMessages(response => response.content === "kabul", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Bot Kanalları|▬▬|", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("「✔」kurallar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「💚」gelen-giden", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「👑」sayaç", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🔥」log-kanalı", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🎃」duyuru-odası", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Genel Kanallar|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`「🎁」şikayet-ve-öneriler`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👥」video-duyurular`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「📷」galeri-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「🤖」bot-komut`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👻」sohbet-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );

        message.guild
          .createChannel(`🌹》Kurucu Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");

            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Ses Kanalları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`👍》Sesli Yönetici Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");
            let role3 = message.guild.roles.find("name", "Yönetici");
            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
            c.overwritePermissions(role3, {
              CONNECT: true
            });
          });

        message.guild
          .createChannel(`💬》Sesli Sohbet Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Oyun Odaları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`🎮》Lol Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Zula Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Counter Strike Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Pubg Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Fortnite Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》MineCraft Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》RobLox Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》WolfTeam Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );

        message.channel.send("Gerekli Herşey Kuruldu Rahatına Bak!");
      });
  }
});
client.on("message", msg => {
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == "acik") {
      const kufur = [
        "oç",
        "amk",
        "ananı sikiyim",
        "ananıskm",
        "piç",
        "amk",
        "amsk",
        "sikim",
        "sikiyim",
        "orospu çocuğu",
        "piç kurusu",
        "kahpe",
        "orospu",
        "mal",
        "sik",
        "yarrak",
        "aq",
        "amcık",
        "amık",
        "yarram",
        "sikimi ye",
        "mk",
        "mq",
        "aq",
        "ak",
        "amq"
      ];
      if (kufur.some(word => msg.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();

            return msg
              .reply(
                "Bu Sunucuda Küfür Filtresi Aktiftir. Küfür Etmene İzin Veremem !❌"
              )
              .then(msg => msg.delete(3000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});

client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "botpanelsil") {
    if (
      !message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Panel ayarlanmamış.");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(" Yetkin bulunmuyor.");
    const a = message.guild.channels
      .find(channel => channel.name === "Bot Kullanımı")
      .delete();
    if (!a) return console.log("guildStats");
    const b = message.guild.channels
      .find(
        channel =>
          channel.name ===
          `Bellek Kullanımı: ${(
            process.memoryUsage().heapUsed /
            1024 /
            1024
          ).toFixed(2)} MB`
      )
      .delete();
    if (!b) return console.log("guildStatsMember");
    const c = message.guild.channels
      .find(
        channel =>
          channel.name ===
          `Kullanıcılar: ${client.guilds
            .reduce((a, b) => a + b.memberCount, 0)
            .toLocaleString()}`
      )
      .delete();
    if (!c) return console.log("guildStatsBot");
    const d = message.guild.channels
      .find(
        channel =>
          channel.name ===
          `Toplam Kanal: ${client.channels.size.toLocaleString()}`
      )
      .delete(); //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
    if (!d) return console.log("guildStatsChannel");
    const e = message.guild.channels
      .find(channel => channel.name === `Ping: ${client.ping}`)
      .delete(); //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
    if (!e) return console.log("guildStatsChannel");
    const f = message.guild.channels
      .find(
        channel =>
          channel.name === `Yapımcım: KU-Pİ/߷ ♔⇝ƐƇƐL!RiseＢＩ̇ＬＡＬＰＡＳ#7094`
      )
      .delete(); //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
    if (!f) return console.log("guildStatsChannel");
    const g = message.guild.channels
      .find(channel => channel.name === `Kütüphanesi: Discord.js`)
      .delete(); //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
    if (!g) return console.log("guildStatsChannel");
    message.channel.send(" Kanallar temizlendi.");
  }
  if (command === "panelkur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`
    );
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(" Yetkin bulunmuyor.");
    message.channel
      .awaitMessages(response => response.content === "evet", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
        message.guild.createChannel("Bot Kullanımı", "category", [
          {
            id: message.guild.id,
            deny: ["SPEAK"],
            deny: ["CONNECT"]
          }
        ]);

        message.guild
          .createChannel(
            `Bellek Kullanımı: ${(
              process.memoryUsage().heapUsed /
              1024 /
              1024
            ).toFixed(2)} MB`,
            "voice"
          )
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(
            `Kullanıcılar: ${client.guilds
              .reduce((a, b) => a + b.memberCount, 0)
              .toLocaleString()}`,
            "voice"
          )
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(
            `Sunucular: ${client.guilds.size.toLocaleString()}  `,
            "voice"
          )
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(
            `Toplam Kanal: ${client.channels.size.toLocaleString()}`,
            "voice"
          )
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(`Ping: ${client.ping}`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(
            `Yapımcım: KU-Pİ/߷ ♔⇝ƐƇƐL!RiseＢＩ̇ＬＡＬＰＡＳ#7094`,
            "voice"
          )
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.guild
          .createChannel(`Kütüphanesi: Discord.js`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "Bot Kullanımı"
              )
            )
          );
        message.channel.send("Bot Bilgi Paneli Ayarlandı!");
      });
  }
});
client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
  if (message.content.toLowerCase() === prefix + "sniper") {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;

    message.channel
      .send("İşleniyor.. Lütfen bekleyiniz. ⏲")
      .then(m => m.delete(1000));

    Jimp.read(user.avatarURL, (err, image) => {
      image.resize(310, 325);
      image.greyscale();
      image.gaussian(3);
      Jimp.read(
        "https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2FPNGPIX-COM-Crosshair-PNG-Transparent-Image.png?1529363625811",
        (err, avatar) => {
          avatar.resize(310, 325);
          image
            .composite(avatar, 2, 0)
            .write(`./img/snip/${client.user.id}-${user.id}.png`);
          setTimeout(function() {
            message.channel.send(
              new Discord.Attachment(
                `./img/snip/${client.user.id}-${user.id}.png`
              )
            );
          }, 1000);
        }
      );
    });
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "saat kaç") {
    var request = require("request");
    request("https://pinnableapi.glitch.me/api/saat", function(
      error,
      response,
      body
    ) {
      if (error) return console.log("Hata:", error);
      else if (!error) {
        var info = JSON.parse(body);
        message.channel.send(
          `** Şuan Türkiye'de Saat ${info.saat}:${info.dakika}:${info.saniye}** :flag_tr:`
        );
      }
    });
  }
});

client.on("guildCreate", guild => {
  const owner = guild.owner;
  let merhaba = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xffffff + 1)))
    .setAuthor(guild.name, guild.iconURL)
    .addField("Beni eklediğin için teşekkürler sayın", `${owner}`)
    .addField(
      "Ben sizlerin sunucusundaki kullanıcılara daha iyi bir hizmet sağlamak için buradayım."
    )
    .addField(
      "**Komutları öğrenmek için**",
      `**k!yardım** yazmanız yeterlidir!`
    );
  owner.send(merhaba);
});

client.on("message", async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = "Burayı silme yoksa hatalı olur";
  else ozelkomutYazi = "" + ozelkomut + "";
  if (msg.content.toLowerCase() === `${ozelkomutYazi}`) {
    let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
    let mesajYazi;
    if (mesaj == null) mesajYazi = "Burayı silme yoksa hatalı olur";
    else mesajYazi = "" + mesaj + "";
    msg.channel.send(mesajYazi);
  }
});

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm"
    ) {
      try {
        return msg.reply();
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

client.on("message", msg => {
  if (msg.content === "<@560073681162731541>") {
    msg.reply(
      "**Hop!Orda Dur Bakalım Sahibimi Etiketleyerek Meşgul Ediyorsun!🔷**"
    );
  }
});

client.on("message", msg => {
  if (!msg.guild) return;
  if (!hereEngel[msg.guild.id]) return;
  if (hereEngel[msg.guild.id].hereEngel === "kapali") return;
  if (hereEngel[msg.guild.id].hereEngel === "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor("Everyone ve Here Engeli!")
          .setDescription(`Bu sunucuda Everyone ve Here yasak!`);
        msg.channel.send(e).then(message => message.delete(5000));
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`);
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`);
});

client.on("message", message => {
  if (!message.author.bot) return;
  db.fetch(`usohbet_${message.channel.id}`).then(usdurum => {
    if (!usdurum || usdurum === "pasif") return;
    else {
      message.delete(5000);
    }
  });
});

client.on("message", async message => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;

  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`
      );
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `${message.author}\`${kullanıcı.tag}\` şu anda AFK. Sebep : \`${sebep}\``
      );
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`
      );
      db.delete(`afk_${message.author.id}`);
    }
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "davetim") {
    /* invites.then(function (a) {
            console.log(a.filter(invite => !invite.maxAge).first().toString());
        }); */
    try {
      const invites = await message.guild.fetchInvites();
      message.author.send(
        invites
          .filter(invite => !invite.maxAge)
          .first()
          .toString()
      );
    } catch (err) {
      message.delete();
      message.author.send("Hiç bir kişiyi davet etmemişsin!");
    }
  }
});

client.on("message", async message => {
  if (!message.guild) return;

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";

  if (message.author.bot) return;

  if (message.content === `<@${client.user.id}>`) {
    message.channel.send(
      `• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`
    );
  }

  if (message.content === `<@${client.user.id}> ${message.content}`) {
    message.channel.send(
      `• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`
    );
  }
});

client.login(ayarlar.token);
