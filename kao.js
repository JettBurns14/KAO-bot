const Discord = require('discord.js')
//const request = require('request');
const client = new Discord.Client()


const olympians = [
    /** Blue */
    [
        {
            player: 'Math Hopper',
            events: 'HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: 'Mystery',
            events: 'HTML/CSS, Chess'
        },
        {
            player: 'legowar',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), SQL, Chess, Typing'
        },
        {
            player: 'King Winston',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL'
        },
        {
            player: 'Kephas Wallace',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'intuitive.tinkerer',
            events: 'JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'PhineasGreene',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'Zidervin',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'chazi',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'R Johnson',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, EP Race, Chess, Typing'
        },
        {
            player: 'TheArchDuke',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'Jack S. Gilbert',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), EP Race'
        },
        {
            player: 'SilverWolf',
            events: 'JS (Drawing), JS (Object Oriented Design), EP Race'
        },
        {
            player: 'pinkpuppy22',
            events: 'JS (Drawing), HTML/CSS, Typing'
        },
        {
            player: 'Summer',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, EP Race'
        },
        {
            player: 'nykajak',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Barrow-Wight',
            events: 'Math Puzzles, Chess, Typing'
        },
        {
            player: 'WritersBlock52',
            events: 'JS (Drawing)'
        },
        {
            player: 'aidan01pay',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'reborn128',
            events: 'JS (Drawing), JS (Animation), Math Puzzles'
        },
        {
            player: 'Sane_Sea',
            events: 'Math Puzzles'
        },
        {
            player: 'Alejandro The Awesome',
            events: 'Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Gimli the Dorf',
            events: 'Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Joshua',
            events: 'HTML/CSS, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: 'Orange leaf',
            events: 'JS (Drawing)'
        },
        {
            player: 'LJG911',
            events: 'JS (Drawing)'
        },
        {
            player: 'SuperRyan',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, Chess'
        },
        {
            player: 'ᵀʰᵉ ᴵᶰᶠᶤᶰᶤᵗᵉˢᶤᵐᵃˡ',
            events: 'Math Puzzles, Chess'
        },
        {
            player: 'JoeTheObjectPup',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Aaron Leong',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Chess'
        },
        {
            player: 'The #1 Triangle Proponent',
            events: 'JS (Drawing), Math Puzzles, Chess'
        },
        {
            player: 'B.K.',
            events: 'HTML/CSS'
        },
        {
            player: 'white.strawberry',
            events: 'JS (Drawing), Math Puzzles, Chess'
        },
        {
            player: 'Noel Negash',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, Chess'
        },
        {
            player: 'XSwerbensky',
            events: 'JS (Object Oriented Design), HTML/CSS, SQL, Math Puzzles, Energy Point Race, Chess, Typing'
        },
    ],
    
    /** Green */
    [
        {
            player: 'WillTheProgrammer',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race'
        },
        {
            player: 'The #1 Planet Proponent',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race'
        },
        {
            player: 'FunkyChicken',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Illusionist',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles'
        },
        {
            player: 'Mino the Programmer',
            events: 'Math Puzzles'
        },
        {
            player: 'Victym',
            events: 'JS (Drawing), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        },
        {
            player: 'PlatformerKing',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'Cross',
            events: 'Math Puzzles, EP Race, Typing'
        },
        {
            player: 'Starky Programming',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'SneakyNugget',
            events: 'JS (Drawing), Chess'
        },
        {
            player: 'torNATO',
            events: 'JS (Drawing), JS (Anaimation), Chess'
        },
        {
            player: 'Ninja Studios',
            events: 'JS (Drawing), HTML/CSS'
        },
        {
            player: 'jacob harrison',
            events: 'Chess'
        },
        {
            player: 'Spiral Studios',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'rhymescheme',
            events: 'JS (Animation), HTML/CSS, Chess'
        },
        {
            player: 'Frustrated Programmer',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race'
        },
        {
            player: 'FWSGaming',
            events: 'EP Race'
        },
        {
            player: 'Antoine Levesque',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: '5ˆ₁4¡',
            events: 'JS (Drawing), HTML/CSS, SQL'
        },
        {
            player: 'Thephantomprogrammer',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), EP Race, Chess'
        },
        {
            player: 'Lava Studios',
            events: 'JS (Drawing)'
        },
        {
            player: 'DigitalDragon',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'Benedict Bosch',
            events: 'JS (Object Oriented Design), Math Puzzles, Chess'
        },
        {
            player: 'William D.',
            events: 'Chess'
        },
        {
            player: 'Scorpion',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles'
        },
        {
            player: 'PycoPixel',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, Chess'
        },
        {
            player: 'Dipper',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, Chess'
        },
        {
            player: 'Captain Leo',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles'
        },
        {
            player: 'Jacob',
            events: 'JS (Drawing), HTML/CSS, Chess'
        },
        {
            player: 'Mohammed',
            events: 'HTML/CSS, HTML/CSS/JS/jQuery'
        },
        {
            player: 'murray1',
            events: 'JS (Drawing), Chess'
        },
        {
            player: '.',
            events: 'Math Puzzles, EP Race, Typing'
        },
        {
            player: 'dynamic',
            events: 'JS (Object Oriented Design), HTML/CSS, Chess'
        },
        {
            player: 'Fire',
            events: 'JS (Animation), HTML/CSS, Math Puzzles, Chess'
        },
        {
            player: 'Dipper',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race, Typing'
        },
    ],
    
    /** Grey */
    [
        {
            player: 'Edward',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        },
        {
            player: 'Chester Banks',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Typing'
        },
        {
            player: 'Silver Cat',
            events: 'Math Puzzles, Chess'
        },
        {
            player: 'CodingChamp01',
            events: 'JS (Animation), Math Puzzles'
        },
        {
            player: 'Fire Glider',
            events: 'JS (Drawing), Math Puzzles, Chess'
        },
        {
            player: 'Banana',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'opabinia2401',
            events: 'JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Daisy',
            events: 'JS (Drawing)'
        },
        {
            player: 'Ranger Studios',
            events: 'JS (Drawing), JS (Animation), Math Puzzles'
        },
        {
            player: 'Mitrue',
            events: 'JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race'
        },
        {
            player: 'Vader2003',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Jonathan',
            events: 'JS (Animation)'
        },
        {
            player: 'The Inferno Code',
            events: 'JS (Object Oriented Design)'
        },
        {
            player: 'Tanyut Sharma',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Katelyn',
            events: 'Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Erno',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Chess, Typing'
        },
        {
            player: 'DJS Studios',
            events: 'JS (Drawing), JS (Animation), Chess'
        },
        {
            player: 'Ethan Ball',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race'
        },
        {
            player: 'SilverWisp',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Garrison',
            events: 'Chess'
        },
        {
            player: 'Torch 13',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, Chess'
        },
        {
            player: 'Bluejay',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'ThePlanetCoder',
            events: 'JS (Drawing)'
        },
        {
            player: 'Academic Ninja',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, Chess'
        },
        {
            player: 'CodeEnthusiast',
            events: 'JS (Animation), JS (Object Oriented Design), Math Puzzles'
        },
        {
            player: 'FroYo',
            events: 'JS (Drawing), JS (Object Oriented Design), EP Race, Typing'
        },
        {
            player: 'PandaProgrammer',
            events: 'JS (Drawing)'
        },
        {
            player: 'CarverBoldman',
            events: 'JS (Drawing), Chess'
        },
        {
            player: 'panda2003',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'thpie22',
            events: 'JS (Drawing), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'codemaster',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'InkytheOctopus',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race'
        },
        {
            player: 'Moody Guy',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'Awesomecookie1000',
            events: 'JS (Drawing), JS (Object Oriented Design), SQL'
        },
        {
            player: 'Yousuf Sharif Ahmed',
            events: 'JS (Drawing), HTML/CSS, Energy Point Race, Chess, Typing'
        },
    ],
    
    /** Red */
    [
        {
            player: 'FowlerProgramming',
            events: 'JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        },
        {
            player: 'Hopper Is Me',
            events: 'JS (Drawing), EP Race, Typing'
        },
        {
            player: 'Arnakt Fen',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, Chess'
        },
        {
            player: 'DevinDumont',
            events: 'JS (Drawing), HTML/CSS, Chess'
        },
        {
            player: 'Legolas Greenleaf',
            events: 'JS (Drawing), JS (Animation), Typing'
        },
        {
            player: '~PixelQueen~',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'Kruxe',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'Golden Zachary',
            events: 'JS (Drawing), Math Puzzles, EP Race'
        },
        {
            player: 'rebeccahunag2000',
            events: 'EP Race'
        },
        {
            player: 'Shadow Runner',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, SQL, Chess, Typing'
        },
        {
            player: 'NGurl',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, SQL, Typing'
        },
        {
            player: 'AquaOrchid',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Chess'
        },
        {
            player: 'Pithon',
            events: 'Chess'
        },
        {
            player: 'AlexT',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles'
        },
        {
            player: 'Laurette Kruger',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, EP Race'
        },
        {
            player: 'austynbair',
            events: 'Chess'
        },
        {
            player: 'Crimson',
            events: 'JS (Drawing), HTML/CSS, EP Race'
        },
        {
            player: 'Sunny!!!',
            events: 'JS (Drawing), JS (Object Oriented Design), Math Puzzles, EP Race'
        },
        {
            player: 'Ben Hudson',
            events: 'JS (Animation), JS (Object Oriented Design), SQL, Math Puzzles, Chess'
        },
        {
            player: 'Spenserroger1',
            events: 'Math Puzzles, Chesss'
        },
        {
            player: 'Jett Burns',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess,'
        },
        {
            player: 'o~---||[})(10204542)({]||>---~o',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: 'Happy Snowman',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: 'ryanrohit',
            events: 'JS (Drawing)'
        },
        {
            player: 'eliana5197',
            events: 'JS (Drawing), Math Puzzles'
        },
        {
            player: 'pointbazaar',
            events: 'JS (Drawing), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race'
        },
        {
            player: 'Peculate',
            events: 'HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Percy383',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Anna14Love',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'Ben Rivers',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'Targmann',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Chess'
        },
        {
            player: 'OutcastOfficial',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Lava Loom',
            events: 'Math Puzzles'
        },
        {
            player: 'Anonymous',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'code-challenger',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, SQL, Math Puzzles'
        },
    ],
    
    /** Yellow */
    [
        {
            player: 'cheese33',
            events: 'JS (Animation), Math Puzzles'
        },
        {
            player: 'Mr. Animate',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, EP Race'
        },
        {
            player: 'The_LEGO_Nerd',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Chess, Typing'
        },
        {
            player: 'JPiratesBaseball',
            events: 'Math Puzzles, EP Race, Chess'
        },
        {
            player: 'MatthewX',
            events: 'JS (Drawing), HTML/CSS'
        },
        {
            player: 'SlingBlade',
            events: 'JS (Object Oriented Design)'
        },
        {
            player: 'Watermelon Tourmaline',
            events: 'JS (Drawing), JS (Animation), Chess'
        },
        {
            player: 'Pumpkinator',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        },
        {
            player: 'Tazal',
            events: 'JS (Drawing), JS (Animation, JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'jonathanwilliams513',
            events: 'JS (Drawing), Chess'
        },
        {
            player: 'DragonPharoah',
            events: 'EP Race, Chess'
        },
        {
            player: 'Captain',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'TheArchDuke',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'Akbaba',
            events: 'JS (Drawing), JS (Animation), EP Race'
        },
        {
            player: 'mustang girl',
            events: 'EP Race'
        },
        {
            player: 'Lünee',
            events: 'JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Eagle77',
            events: 'JS (Drawing), JS (Animation), HTML/CSS, Math Puzzles, Chess'
        },
        {
            player: 'Catboy',
            events: 'JS (Drawing)'
        },
        {
            player: 'seann6556',
            events: 'Math Puzzles, Chess'
        },
        {
            player: 'TectonicHorizon',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery'
        },
        {
            player: 'Jordan',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'Panther Programming',
            events: 'JS (Drawing), JS (Animation), EP Race'
        },
        {
            player: 'a.sonnadjoshi',
            events: 'Math Puzzles, Chess, Typing'
        },
        {
            player: 'Swordtail Productions',
            events: 'JS (Drawing)'
        },
        {
            player: 'DavidPickering',
            events: 'JS (Drawing), Chess'
        },
        {
            player: 'Wild West',
            events: 'JS (Drawing)'
        },
        {
            player: 'Varun Kute',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, SQL, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'ColorMaster',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'Inferno fire',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'LJD911',
            events: 'JS (Drawing)'
        },
        {
            player: 'Jared Emmanuel',
            events: 'JS (Drawing)'
        },
        {
            player: 'Orange Juice Programmer',
            events: 'JS (Drawing), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, Chess'
        },
        {
            player: 'Programming Robot',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'Python Programming',
            events: 'JS (Drawing)'
        },
        {
            player: 'LoganWeisberg',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, Energy Point Race, Chess, Typing'
        },
    ],
    
    /** Purple */
    [
        {
	        player: 'Duskpin Ultimate',
	        events: 'JS (Animation), JS (Object Oriented Design)'
        },
        {
	        player: 'Alex Martin',
	        events: 'JS (Animation), JS (Object Oriented Design), HTML/CSS, EP Race, Chess'
        },
        {
            player: 'Quantum',
            events: 'SQL, Math Puzzles, EP Race, Chess, Typing'
        },
        {
            player: 'ANC',
            events: 'HTML/CSS, HTML/CSS/JS/jQuery'
        },
        {
            player: 'avmswimmer',
            events: 'JS (Drawing), JS (Animation), EP Race, Chess'
        },
        {
            player: 'Silly Clown',
            events: 'JS (Drawing)'
        },
        {
            player: 'Infinity',
            events: 'JS (Drawing), HTML/CSS, SQL'
        },
        {
            player: 'Paradox Void',
            events: 'JS (Drawing), Chess, Typing'
        },
        {
            player: 'Breck Nave',
            events: 'JS (Aniamtion), JS (Object Oriented Design), Chess'
        },
        {
            player: 'whitelight',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Sam Hill',
            events: 'JS (Animation), HTML/CSS'
        },
        {
            player: 'lark',
            events: 'EP Race'
        },
        {
            player: 'da phantom chocolate',
            events: 'JS (Drawing), JS (Animation)'
        },
        {
            player: 'JaketheSnake1571',
            events: 'JS (Animation), EP Race, Chess'
        },
        {
            player: 'Lexicon',
            events: 'JS (Drawing), Math Puzzles, EP Race, Typing'
        },
        {
            player: 'Panzerkampfwagen',
            events: 'EP Race'
        },
        {
            player: 'LNY',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, Typing'
        },
        {
            player: 'Packfan Pro',
            events: 'JS (Drawing), SQL'
        },
        {
            player: 'Doctor137',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), SQL, Math Puzzles, EP Race'
        },
        {
            player: 'SmartCookie',
            events: 'JS (Drawing), HTML/CSS, EP Race'
        },
        {
            player: 'mloges',
            events: 'JS (Object Oriented Design), HTML/CSS/JS/jQuery'
        },
        {
            player: 'DaphneThorpe',
            events: 'JS (Drawing), JS (Animation), HTML/CSS'
        },
        {
            player: '#2 Joke Proponent',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'High Queen Susan',
            events: 'JS (Drawing), EP Race'
        },
        {
            player: 'properprogrammer11',
            events: 'JS (Drawing)'
        },
        {
            player: 'Leanora',
            events: 'JS (Drawing), JS (Animation), Math Puzzles, EP Race, Chess'
        },
        {
            player: 'carol tran',
            events: 'JS (Drawing)'
        },
        {
            player: 'Orange Programmer',
            events: 'JS (Drawing), HTML/CSS, Math Puzzles, EP Race'
        },
        {
            player: 'airplane45w3',
            events: 'Chess'
        },
        {
            player: 'Noah',
            events: 'JS (Animation), JS (Object Oriented Design), HTML/CSS, Math Puzzles, Typing'
        },
        {
            player: 'SharkFin',
            events: 'JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        },
        {
            player: 'mrfrodo18',
            events: 'Math Puzzles, EP Race, Chess'
        },
        {
            player: 'Purvi Koringa',
            events: 'Math Puzzles, EP Race'
        },
        {
            player: 'Aqil',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design)'
        },
        {
            player: 'Blaze',
            events: 'JS (Drawing), JS (Animation), JS (Object Oriented Design), HTML/CSS, HTML/CSS/JS/jQuery, Math Puzzles'
        }
    ]
];


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
    client.user.setUsername('KAO bot');
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
    command = command.slice('$'.length).toLowerCase();

    var args = message.content.split(" ")[1];


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
    
    
    if (command === 'info') {
        let embed = new Discord.RichEmbed(); 
        embed.setColor("#963c69");
        
        message.channel.sendMessage(args);
        
        // Loops through `olympians`, checking for a match with the argument.
        for (var i = 0; i < olympians.length; i++) {
            for (var j = 0; j < olympians[0].length; j++) {
                if (olympians[i][j].player === args[0]) {
                    embed.addField(args[0] + "'s Info", "**" + args[0] + "'s** events are:\n```" + olympians[i][j].events + "```");
                    message.channel.sendEmbed(embed);
                }
            }
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
