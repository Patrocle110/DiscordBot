const Discord = require('discord.js');
const bot  = new Discord.Client();

const token = 'NjUyODUxNTU5Nzg4NTc2Nzgw.XfXx0A.Fm1vfroodQMRxdSJuG4FYv8YCmU';

bot.on('ready', () =>{
    console.log('Botu e online sa moara jaxi');
})

bot.login(token);