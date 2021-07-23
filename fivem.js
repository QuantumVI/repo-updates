const  fivem = require("fivem-api");
const fs = require('fs');

module.exports.run = async (bot, message, args, prefix) => {

if (message.content === "!fivem") {
  fivem.getServerInfo("136.59.195.249:30120").then((server, err) => {
    var base64Data = server.infos.icon.replace(/^data:image\/png;base64Data,/, "");
    fs.writeFile("out.png", base64Data, 'base64', function(err) {
      message.channel.send('The Server may be down! Maybe give Quantum a ping');
      console.log(err);
    });
    const embed = {
      "title": `__${server.infos.vars.sv_hostname} Details__` ,
      "color": 0x49B3FF,
      "thumbnail": {
        "url": "attachment://out.png"
      },
      "fields": [
        {
          "name": "Max Clients",
          "value": `${server.infos.vars.sv_maxClients}`,
          "inline": false
        },
        {
          "name": "Members Online",
          "value": `${server.players.length} Members`,
          "inline": false
        },
        {
          "name": "Version",
          "value": server.infos.server,
          "inline": true,
        },
      ]
    };
    message.channel.send({ embed, files: [{ attachment: `./out.png`, name: `out.png` }] });
  })
}

}
module.exports.help = {
    name: "fivem"
}