const Discord = require('Discord.js');
const prefx = "g!"; 
const messageEmbed = new Discord.MessageEmbed
const config = require("./src/config.json")
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
client.once('ready', () => {
    console.log("Graceland online!");
})

client.on('messageCreate', message => {
    if(message.content.startsWith("g!")){
        const commandwprefix = message.content.split(" ")
        const command = commandwprefix[0].split("g!")
        if(command){
            let commandactual = command[1].toLowerCase()
            console.log(commandactual)
            message.channel.send({
                content: 'Alright!'
            })
        }
       
    }
})
//Message Commands

client.login(config.token)