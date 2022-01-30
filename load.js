
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kanka!**');
  }
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });