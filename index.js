/**********************************************************
 * @INFO
 * Bot Coded by leonx74#9999 | https://discord.gg/team-mind
 * @INFO
 * Please mention him, when using this Code!
 *********************************************************/
const Discord = require("discord.js")
const { Attachment } = require('discord.js')
const client = new Discord.Client({
  //fetchAllMembers: false,
  //restTimeOffset: 0,
  //restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: [ ],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [ 
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MEMBERS,

      //Discord.Intents.FLAGS.GUILD_BANS,
      //Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      //Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
      //Discord.Intents.FLAGS.GUILD_WEBHOOKS,
      //Discord.Intents.FLAGS.GUILD_INVITES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES,
      Discord.Intents.FLAGS.GUILD_PRESENCES,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      //Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
     // Discord.Intents.FLAGS.DIRECT_MESSAGES,
      //Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
      //Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
})

const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
  const fs = require("fs")
  

const prefix = '!' //your Prefix
const bottoken = '' //Your Bot Token 

    client.on('ready', () => {
      console.log(`Log in ${client.user.username}....`)
    })

client.login(bottoken)

 client.on("message", async message => {
   
    const args = message.content.slice().trim().split(/ +/g);
    const user = message.author
    
    if (message.content.startsWith(`${prefix}leonx74test`)) {
      if(user.bot) return;

 message.guild.channels.create((`ticket: ${message.author.tag}`), {
    permissionOverwrites: [
      {
        id: message.author.id,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
       },
       {
        id: message.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
       }
    ],
    type: 'text',
    parent: "932317897827700777"
   }).then(ch => ch.send(`THIS IS YOUR TICKET MADE BY 74`)).then(msg => {
     msg.react('🗑')

     const collector = msg.createReactionCollector((reaction,user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission(`ADMINISTRATOR`),
     { dispose: true }
     );
     
     collector.on('collect',(reaction,user) => {
      if(user.bot) return;
       switch (reaction.emoji.name){
           case "🗑":
                   reaction.message.channel.delete()
     
       }
      
      });

  })

  }})

/**********************************************************
 * @INFO
 * Bot Coded by leonx74#9999 | https://discord.gg/team-mind
 * @INFO
 * Please mention him, when using this Code!
 *********************************************************/
