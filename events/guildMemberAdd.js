module.exports = member => {
    let username = member.user.username;
    member.send('__Sunucuya Hoş Geldin!__' + username );
    member.guild.defaultChannel.send('');
};