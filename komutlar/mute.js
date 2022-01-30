const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  if(!msg.member.hasPermission("MANAGE_CHANNELS")) return  msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign: Yetkin Yok !.")
}})
          let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
          if(!susturulacak) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Kimseyi susturmak diye bir kod yok.")
}})

          if(susturulacak.id === msg.author.id) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Kendini susturmaya çalışıyor pezevenge bak hele")
}})
          if(susturulacak.highestRole.position >= msg.member.highestRole.position) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Birde kendisinden üst rolünü susturacak.")
}})
          let role = msg.guild.roles.find(r => r.name === "Cezalı");
          if(!role) {
          try {
              role = await msg.guild.createRole({
                    name: "Susturulmuş",
                    color: "#0b0a0a",
                    permission:[]
            });

            msg.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch(e) {
              console.log(e.stack);
          }

        }

        if(susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Bu kişi zaten susturulmuş.")
}});

        await susturulacak.addRole(role);
        msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("Kişi Başarıyla Susturuldu.")
}})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'Botun pingini gösterir.',
  usage: 'sustur'
};
