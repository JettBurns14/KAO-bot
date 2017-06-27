const Discord = require('discord.js')
//const request = require('request');
const client = new Discord.Client()


const olympians = [
    /** TBL **/
    [
        "Math Hopper - HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess, Typing",
        "Mystery - HTML/CSS, Chess",
        "legowar - JS (Drawing), JS (Animation), JS (Object Oriented Design), SQL, Chess, Typing",
        "King Winston - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL",
        "Kephas Wallace - JS (Drawing), JS (Animation)",
        "intuitive.tinkerer - JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "PhineasGreene - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "Zidervin - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "chazi - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "R Johnson - JS (Drawing), JS (Animation), HTML/CSS, EP Race, Chess, Typing",
        "TheArchDuke - JS (Drawing), JS (Animation)",
        "Jack S. Gilbert - JS (Drawing), JS (Animation), JS (Object Oriented Design), EP Race",
        "SilverWolf - JS (Drawing), JS (Object Oriented Design), EP Race",
        "pinkpuppy22 - JS (Drawing), HTML/CSS, Typing",
        "Summer - JS (Drawing), HTML/CSS, Math Puzzles, EP Race",
        "nykajak - JS (Drawing), HTML/CSS, Math Puzzles, EP Race, Chess",
        "Barrow-Wight - Math Puzzles, Chess, Typing",
        "WritersBlock52 - JS (Drawing)",
        "aidan01pay - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "reborn128 - JS (Drawing), JS (Animation), Math Puzzles",
        "Sane_Sea - Math Puzzles",
        "Alejandro The Awesome - Math Puzzles, EP Race, Chess",
        "Gimli the Dorf - Math Puzzles, EP Race, Chess",
        "Joshua - HTML/CSS, Math Puzzles, EP Race, Chess, Typing",
        "Orange leaf - JS (Drawing)", "LJG911 - JS (Drawing)",
        "SuperRyan - JS (Drawing), HTML/CSS, Math Puzzles, Chess",
        "ᵀʰᵉ ᴵᶰᶠᶤᶰᶤᵗᵉˢᶤᵐᵃˡ - Math Puzzles, Chess",
        "JoeTheObjectPup - JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess",
        "Aaron Leong - JS (Drawing), JS (Animation), JS (Object Oriented Design), Chess",
        "The #1 Triangle Proponent - JS (Drawing), Math Puzzles, Chess",
        "B.K. - HTML/CSS",
        "white.strawberry - JS (Drawing), Math Puzzles, Chess",
        "Noel Negash - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, Chess",
        "XSwerbensky - JS (Object Oriented Design), HTML/CSS, SQL, Math Puzzles, Energy Point Race, Chess, Typing",
    ],
    /** TGreenL **/
    [
        "WillTheProgrammer - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race",
        "The #1 Planet Proponent - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race",
        "FunkyChicken - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "Illusionist - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles",
        "Mino the Programmer - Math Puzzles",
        "Victym - JS (Drawing), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
        "PlatformerKing - JS (Drawing), JS (Animation)",
        "Cross - Math Puzzles, EP Race, Typing",
        "Starky Programming - JS (Drawing), JS (Animation)",
        "SneakyNugget - JS (Drawing), Chess",
        "torNATO - JS (Drawing), JS (Anaimation), Chess",
        "Ninja Studios - JS (Drawing), HTML/CSS",
        "jacob harrison - Chess",
        "Spiral Studios - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "rhymescheme - JS (Animation), HTML/CSS, Chess",
        "Frustrated Programmer - JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race",
        "FWSGaming - EP Race",
        "Antoine Levesque - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess, Typing",
        "5ˆ₁4¡ - JS (Drawing), HTML/CSS, SQL",
        "Thephantomprogrammer - JS (Drawing), JS (Animation), JS (Object Oriented Design), EP Race, Chess",
        "Lava Studios - JS (Drawing)",
        "DigitalDragon - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "Benedict Bosch - JS (Object Oriented Design), Math Puzzles, Chess",
        "William D. - Chess",
        "Scorpion - JS (Drawing), HTML/CSS, Math Puzzles",
        "PycoPixel - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, Chess",
        "Dipper - JS (Drawing), JS (Animation), Math Puzzles, Chess",
        "Captain Leo - JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles",
        "Jacob - JS (Drawing), HTML/CSS, Chess",
        "Mohammed - HTML/CSS, HTML/CSS/JS/jQuery",
        "murray1 - JS (Drawing), Chess",
        ". - Math Puzzles, EP Race, Typing",
        "dynamic - JS (Object Oriented Design), HTML/CSS, Chess",
        "Fire - JS (Animation), HTML/CSS, Math Puzzles, Chess",
        "Dipper - JS (Drawing), JS (Animation), Math Puzzles, EP Race, Typing",
        "Reborn - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
    ],
    /** TGreyL **/
    [
        "Edward - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
        "Chester Banks - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Typing",
        "Silver Cat - Math Puzzles, Chess",
        "CodingChamp01 - JS (Animation), Math Puzzles",
        "Fire Glider - JS (Drawing), Math Puzzles, Chess",
        "Banana - JS (Drawing), EP Race",
        "opabinia2401 - JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "Daisy - JS (Drawing)",
        "Ranger Studios - JS (Drawing), JS (Animation), Math Puzzles",
        "Mitrue - JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race",
        "Vader2003 - JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess",
        "Jonathan - JS (Animation)",
        "The Inferno Code - JS (Object Oriented Design)",
        "Tanyut Sharma - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "Katelyn - Math Puzzles, EP Race, Chess",
        "Erno - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Chess, Typing",
        "DJS Studios - JS (Drawing), JS (Animation), Chess",
        "Ethan Ball - JS (Drawing), JS (Animation), Math Puzzles, EP Race",
        "SilverWisp - JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess",
        "Garrison - Chess",
        "Torch 13 - JS (Drawing), HTML/CSS, Math Puzzles, Chess",
        "Bluejay - JS (Drawing), EP Race",
        "ThePlanetCoder - JS (Drawing)",
        "Academic Ninja - JS (Drawing), JS (Animation), Math Puzzles, Chess",
        "CodeEnthusiast - JS (Animation), JS (Object Oriented Design), Math Puzzles",
        "FroYo - JS (Drawing), JS (Object Oriented Design), EP Race, Typing",
        "PandaProgrammer - JS (Drawing)",
        "CarverBoldman - JS (Drawing), Chess",
        "panda2003 - Math Puzzles, EP Race",
        "thpie22 - JS (Drawing), Math Puzzles, EP Race, Chess",
        "codemaster - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "InkytheOctopus - JS (Drawing), JS (Animation), Math Puzzles, EP Race",
        "Moody Guy - JS (Drawing), JS (Animation)",
        "Awesomecookie1000 - JS (Drawing), JS (Object Oriented Design), SQL",
        "Yousuf Sharif Ahmed - JS (Drawing), HTML/CSS, Energy Point Race, Chess, Typing",
    ],
    /** TRL **/
    [
        "FowlerProgramming - JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
        "Hopper Is Me - JS (Drawing), EP Race, Typing",
        "Arnakt Fen - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, Chess",
        "DevinDumont - JS (Drawing), HTML/CSS, Chess",
        "Legolas Greenleaf - JS (Drawing), JS (Animation), Typing",
        "~PixelQueen~ - JS (Drawing), EP Race",
        "Kruxe - JS (Drawing), EP Race",
        "Golden Zachary - JS (Drawing), Math Puzzles, EP Race",
        "rebeccahunag2000 - EP Race",
        "Shadow Runner - JS (Drawing), JS (Animation), HTML/CSS, SQL, Chess, Typing",
        "NGurl - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, SQL, Typing",
        "AquaOrchid - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Chess",
        "Pithon - Chess",
        "AlexT - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles",
        "Laurette Kruger - JS (Drawing), JS (Animation), HTML/CSS, EP Race",
        "austynbair - Chess",
        "Crimson - JS (Drawing), HTML/CSS, EP Race",
        "Sunny!!! - JS (Drawing), JS (Object Oriented Design), Math Puzzles, EP Race",
        "Ben Hudson - JS (Animation), JS (Object Oriented Design), SQL, Math Puzzles, Chess",
        "Spenserroger1 - Math Puzzles, Chesss",
        "Jett Burns - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess,",
        "o~---||[})(10204542)({]||>---~o - JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race, Chess, Typing",
        "Happy Snowman - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess, Typing",
        "ryanrohit - JS (Drawing)",
        "eliana5197 - JS (Drawing), Math Puzzles",
        "pointbazaar - JS (Drawing), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race",
        "Peculate - HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess",
        "Percy383 - JS (Drawing), HTML/CSS, Math Puzzles, EP Race, Chess",
        "Anna14Love - Math Puzzles, EP Race",
        "Ben Rivers - JS (Drawing), JS (Animation)",
        "Targmann - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Chess",
        "OutcastOfficial - JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race, Chess",
        "Lava Loom - Math Puzzles",
        "Anonymous - Math Puzzles, EP Race",
        "code-challenger - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, SQL, Math Puzzles"
    ],
    /** TYL **/
    [
        "cheese33 - JS (Animation), Math Puzzles",
        "Mr. Animate - JS (Drawing), JS (Animation), HTML/CSS, EP Race",
        "The_LEGO_Nerd - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Chess, Typing",
        "JPiratesBaseball - Math Puzzles, EP Race, Chess",
        "MatthewX - JS (Drawing), HTML/CSS",
        "SlingBlade - JS (Object Oriented Design)",
        "Watermelon Tourmaline - JS (Drawing), JS (Animation), Chess",
        "Pumpkinator - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
        "Tazal - JS (Drawing), JS (Animation, JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess",
        "jonathanwilliams513 - JS (Drawing), Chess",
        "DragonPharoah - EP Race, Chess",
        "Captain - JS (Drawing), JS (Animation)",
        "TheArchDuke - JS (Drawing), JS (Animation)",
        "Akbaba - JS (Drawing), JS (Animation), EP Race",
        "mustang girl - EP Race",
        "Lünee - JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess",
        "Eagle77 - JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, Chess",
        "Catboy - JS (Drawing)",
        "seann6556 - Math Puzzles, Chess",
        "TectonicHorizon - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery",
        "Jordan - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "Panther Programming - JS (Drawing), JS (Animation), EP Race",
        "a.sonnadjoshi - Math Puzzles, Chess, Typing",
        "Swordtail Productions - JS (Drawing)",
        "DavidPickering - JS (Drawing), Chess",
        "Wild West - JS (Drawing)",
        "Varun Kute - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess",
        "ColorMaster - Math Puzzles, EP Race",
        "Inferno fire - JS (Drawing), EP Race",
        "LJD911 - JS (Drawing)",
        "Jared Emmanuel - JS (Drawing)",
        "Orange Juice Programmer - JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, Chess",
        "Programming Robot - Math Puzzles, EP Race",
        "Python Programming - JS (Drawing)",
        "LoganWeisberg - JS (Drawing), JS (Animation), Math Puzzles, Energy Point Race, Chess, Typing",
        "Let'sHopper - SQL"
    ],
    /** TPL **/
    [
        "Duskpin Ultimate - JS (Animation), JS (Object Oriented Design)",
        "Alex Martin - JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race, Chess",
        "Quantum - SQL, Math Puzzles, EP Race, Chess, Typing",
        "ANC - HTML/CSS, HTML/CSS/JS/jQuery",
        "avmswimmer - JS (Drawing), JS (Animation), EP Race, Chess",
        "Silly Clown - JS (Drawing)","Infinity - JS (Drawing), HTML/CSS, SQL",
        "Paradox Void - JS (Drawing), Chess, Typing",
        "Breck Nave - JS (Aniamtion), JS (Object Oriented Design), Chess",
        "whitelight - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess",
        "Sam Hill - JS (Animation), HTML/CSS",
        "lark - EP Race",
        "da phantom chocolate - JS (Drawing), JS (Animation)",
        "JaketheSnake1571 - JS (Animation), EP Race, Chess",
        "Lexicon - JS (Drawing), Math Puzzles, EP Race, Typing",
        "Panzerkampfwagen - EP Race",
        "LNY - JS (Drawing), JS (Animation), Math Puzzles, Typing",
        "Packfan Pro - JS (Drawing), SQL",
        "Doctor137 - JS (Drawing), JS (Animation), JS (Object Oriented Design), SQL, Math Puzzles, EP Race",
        "SmartCookie - JS (Drawing), HTML/CSS, EP Race",
        "mloges - JS (Object Oriented Design), HTML/CSS/JS/jQuery",
        "DaphneThorpe - JS (Drawing), JS (Animation), HTML/CSS",
        "#2 Joke Proponent - JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess",
        "High Queen Susan - JS (Drawing), EP Race",
        "properprogrammer11 - JS (Drawing)",
        "Leanora - JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess",
        "carol tran - JS (Drawing)",
        "Orange Programmer - JS (Drawing), HTML/CSS, Math Puzzles, EP Race",
        "airplane45w3 - Chess",
        "Noah - JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Typing",
        "SharkFin - JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
        "mrfrodo18 - Math Puzzles, EP Race, Chess",
        "Purvi Koringa - Math Puzzles, EP Race",
        "Aqil - JS (Drawing), JS (Animation), JS (Object Oriented Design)",
        "Blaze - JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles",
    ]
];


const commands = [
    // Random
    [
        "Help : Returns all commands.",
        "Uptime : Returns time bot has been online.",
        "Hello : Says hello back.",
        "Ping : Returns 'pong'.", 
    ]
];

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

client.on('ready', () => {
    client.user.setGame('$help');
    client.user.setUsername('KhanBot');
    console.log('I am ready Jett!');
    
    setInterval(function() {
        totalTime++;
    }, 1);
    setInterval(function() {
        if (statusNum > 2) {
            statusNum = 0;
        } else {
            statusNum++;
        }
        client.user.setStatus(status[statusNum]);
    }, 2000);
});

client.on('message', message => {
    if (!message.content.startsWith('$')) return;
    if (message.author.id === client.user.id) return;
    if (message.author.bot) return;

    var command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length).toLowerCase();

    var args = message.content.split(" ").slice(1);


    if (command === 'ping') {
        message.channel.sendMessage("Pong!");
    } else
    if (command === 'uptime') {
        message.channel.sendMessage(':clock2: **KhanBot** has been online for ' + millisToTime(totalTime) + '.');
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
    
    
    if (command === 'player') {
        if (args[0] === 'Jett' || args[0] === 'Jett Burns') {
            let embed = new Discord.RichEmbed(); 
            embed.setColor("#963c69");
            embed.addField(args[0], 'Jett\'s events');
            message.channel.sendEmbed(embed);
        }
    }
    
    else {
        let embed = new Discord.RichEmbed();
        embed.setColor('#ff0000');
        embed.addField('Error', ':x: That command is not defined. Use **`$help`** for more.');
        message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN)
