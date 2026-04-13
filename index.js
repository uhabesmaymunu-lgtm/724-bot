const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.on('ready', () => {
  console.log(`${client.user.tag} aktif ve sese giriyor!`);
  

  const channelId = '1492155516317732975'; 
  const guildId = '1492154755324182568';

  joinVoiceChannel({
    channelId: channelId,
    guildId: guildId,
    adapterCreator: client.guilds.cache.get(guildId).voiceAdapterCreator,
    selfDeaf: true
  });
  
  console.log("Sese bağlandım ve 7/24 buradayım!");
});

client.login('MTQ5MjU2MTcxODk3NzQ5NTA3MQ.GWMYwP.jJxStY1uNkjM2FXAJ3dX25kDMIC16WwHv_uKzY');
