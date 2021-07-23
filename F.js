const  Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#00ffff")
  .addField("User has left the server", "fell into the snow and was never seen again. We like to think that our ice tentacle monster got them and has done unspeakably lewd things to them.");

  message.channel.send(helpembed);

  if(message.member.hasPermission("MANAGE_MESSAGES")){


  try{
    await message.author.send(modembed);
  }catch(e){
    message.reply("  ");
  }
}



}

module.exports.help = {
    name: "error"
}