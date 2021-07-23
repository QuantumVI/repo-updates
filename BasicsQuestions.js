const  Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#00ffff")
  .addField("Basics of asking questions", "If you want to ask something don't ask if someone is willing to help, if you are here then you came here for help and there is always someone with an answer, use the appropriate channels to ask questions that are fit to those channels, if after for a certain amount of time no one answer you can tag the project quantum role.");

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
    name: "BasicsQuestions"
}