const Discord = require('discord.js')
const request = require('request');
const client = new Discord.Client()
var olympians;

const commands = [
    // Random
    [
        "Help : Returns all commands.",
        "Uptime : Returns time bot has been online.",
        "Hello : Says hello back.",
        "Ping : Returns 'pong'.", 
        "Info <competitor> : Returns info about a KAO competitor.",
    ]
];

var getKAData = function(message, api, user, callback) {
    request(api + user, function(error, response, body) {
        if (!JSON.parse(body)) {
            message.channel.sendMessage('Error with a **`getKAData`** request.');
            return;
        }
        callback(body);
    });
};

var millisToTime = function(milliseconds) {
    let x = milliseconds / 1000;
    let s = Math.floor(x % 60);
    x /= 60;
    let m = Math.floor(x % 60);
    x /= 60;
    let h = Math.floor(x % 24);
    //x /= 24;
    //let d = Math.floor(x);
    
    return h + ' Hours, ' + m + ' Minutes, ' + s + " Seconds";
};

var totalTime = 0;
var statusNum = 0;

var status = [
    'online',
    'idle',
    'dnd'
];

var greetings = [
    "Hai",
    "Hi",
    "Sup",
    "Hello",
    "Yo, wus up",
];

var colors = [
	'#3257fc', // Blue
	'#3bd918', // Green
	'#aeb2c2', // grey
	'#fa3257', // Red
	'#faed32', // Yellow
	'#9d32fa'  // Purple
];

client.on('ready', () => {
    client.user.setGame('$help');
    client.user.setUsername('KAO bot');
    console.log('I am ready Jett!');

	request('https://www.khanacademy.org/api/labs/scratchpads/5991458534129664', function(error, response, body) {
		olympians = JSON.parse(body).revision.code;
	});
});

client.on('message', message => {
    if (!message.content.startsWith('$')) return;
    if (message.author.id === client.user.id) return;
    if (message.author.bot) return;

    var command = message.content.split(" ")[0];
    command = command.slice('$'.length).toLowerCase();

    var args = message.content.substring(('$info '.length));


    if (command === 'ping') {
        message.channel.sendMessage("Pong!");
    } else
    if (command === 'uptime') {
        message.channel.sendMessage(':clock2: **KAO Bot** has been online for ' + millisToTime(totalTime) + '.');
    } else
    if (command === "hello" || command === 'hi') {
        message.channel.sendMessage(`${greetings[Math.floor(Math.random()*5)]} ${message.author.username}!`);
    } else
    if (command === 'help') {
        let embed = new Discord.RichEmbed(); 
        embed.setColor("#ffff00");
        embed.addField('Help', commands[0]);
        message.channel.sendEmbed(embed);
    } else
    
    
    if (command === 'info') {
        let embed = new Discord.RichEmbed();
        let json = JSON.parse(olympians);
		//message.channel.sendMessage('Olympians length = ' + Object.keys(JSON.parse(olympians)).length + '\nTeam length = ' + JSON.parse(olympians).TRedL.length);
		
        // Loops through `olympians`, checking for a match with the argument.
		
        for (var i = 0; i < Object.keys(json).length; i++) {
            for (var j = 0; j < json.TRedL.length; j++) {
				//var current = json[Object.keys(json)[i]][j].player;
				console.log(Object.keys(json).length + ', ' + json.TRedL.length);
				/*if (current === args || current.toLowerCase() === args) {
					embed.setColor(colors[i]);
					embed.addField(current + "'s Info", "**" + current + "'s** events are:\n```" + json[Object.keys(json)[i]][j].events + "```");
					message.channel.sendEmbed(embed);
                }*/
            }
        }
		/*
		var json = JSON.parse(data.revision.code);
        for (var i = 0; i < teams.length; ++i) {
            // Thanks Moore
            var lengthOfTeam = json[Object.keys(json)[i]].length;      
			for (var j = 0; j < lengthOfTeam; ++j) {
				teams[i].innerHTML += 
				json[Object.keys(json)[i]][j].player + 
				' - ' + 
				json[Object.keys(json)[i]][j].events + 
				((j!==lengthOfTeam-1)?'<li>':'')

			}
        }*/
    }
    
    else {
        let embed = new Discord.RichEmbed();
        embed.setColor('#ff0000');
        embed.addField('Error', ':x: That command is not defined. Use **`$help`** for more.');
        message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN)
