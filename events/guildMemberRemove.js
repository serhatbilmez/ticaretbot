module.exports = member => {
  let guild = member.guild;
  member.send(':outbox_tray:Sunucudan Ayrıldı!');
  guild.defaultChannel.send(``);
};