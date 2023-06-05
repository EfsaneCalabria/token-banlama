client.on('ready', () => {

  setInterval(() => {
    const sunucu = client.guilds.cache.get('sunucu_ıd'); // Sunucu ID gir

    if (!sunucu) return; 

    const kullanıcıadı = 'blabla'; // Banlamak istediğiniz kullanıcı adı

    sunucu.uye.fetch().then((uye) => {
      uye.forEach((member) => {
        if (member.user.username.includes(kullanıcıadı)) {
          member.ban({ reason: 'Token Hesap Banlandı!' })
            .then(() => {
              console.log(`${member.user.tag} başarıyla banlandı.`);
            })
            .catch((error) => {
              console.error(`Banlama hatası: ${error}`);
            });
        }
      });
    });
  }, 10000);
});
