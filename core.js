var Decks = [
    { //First Deck - Sex
      Name: "Sex",
      Description: "Basic, vanilla sexual acts.  Includes things like kissing, groping, masturbation, oral, vaginal, anal, and multiple-participate sex acts.  May also include common sex toys like vibrators, dildos, and butt plugs.",
      Cards: [ 
        { //card 1
          Name: "Kiss",
          Copies: 1,  //How many copies of the card to put in the playing deck
          Requirements: { },  //what toys this card requires 
                              //(also if target needs a Penis/Vagina = true)
          Activities: { Kissing: true },  //activities the card contains
          Permanent: false,  //is card a permanent rule
          Random: "(30|60)",  //Uses a number, can be random using Xtoy's format
          Timer: true,  //Is random a timer?
          Secret: false, //Is the action to be hidden from the target?
          SecretText: null, //the text to instruct the target to be completed before 
                            //continuing to the text below, often involving being 
                            //blindfolded.  Uses the same replacements codes below.
          /*
          Below is the text for the actions.  
          "TopVaginaText" is for if the text will differ 
          if the top player has a Penis or Vagina.  
            -[top] for the top player's name
            -[tar] for the target player's name
            -[rnd] for the number from Random
          */
          TopPenisText: "[top] will approach [tar] and kiss them for [rnd] seconds.",
          TopVaginaText: null,
        }, 
        { //card 2
          Name: "Grope",
          Copies: 1,
          Requirements: { },
          Activities: { Groping: true },
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "[top] will approach [tar] and grope them for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 3
          Name: "Suckle",
          Copies: 1,
          Requirements: { },
          Activities: { Kissing: true },
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "[top] will spend [rnd] seconds focusing their oral attention on [tar]'s nipples and breasts.",
          TopVaginaText: null,
        },
        { //card 4
          Name: "Nibble",
          Copies: 1,
          Requirements: { },
          Activities: { Kissing: true },
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will nibble from [tar]'s collarbones, up their neck and to their ears.",
          TopVaginaText: null,
        },
        { //card 5
          Name: "Oral Tease",
          Copies: 1,
          Requirements: { },
          Activities: { Kissing: true, Groping: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will sit, and [top] will kneel between their legs.  For the next [rnd] seconds, [top] will use their hands and mouth to tease [tar], touching, kissing, and fondling from [tar]'s lower abdomen to their inner thighs, but will refrain from directly stimulating [tar]'s genitals.",
          TopVaginaText: null,
        },
        { //card 6
          Name: "Dry Grind",
          Copies: 1,
          Requirements: { },
          Activities: { Grinding: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will stand or sit as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their penis against [tar]'s thigh, hip, or ass.  If the ass is used, [top] will not be allowed to rub between both asscheeks; this is to be a dry hump.",
          TopVaginaText: "[tar] will stand or sit as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their vagina against [tar]'s thigh, hip, or ass.  This is to be a 'dry hump'.",
        },
        { //card 7
          Name: "Chest Grind",
          Copies: 1,
          Requirements: { },
          Activities: { Grinding: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will stand, sit, or lie as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their penis against [tar]'s chest and breasts.  The breasts, if possible, can be pushed together at the discretion of [top].",
          TopVaginaText: "[tar] will stand, sit, or lie as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their vagina against [tar]'s chest and breasts.  The breasts, if possible, can be pushed together or in any other manner at the discretion of [top].",
        },
        { //card 8
          Name: "Minutes in Heaven",
          Copies: 1,
          Requirements: { },
          Activities: { Kissing: true, Groping: true, Grinding: true },
          Permanent: false,
          Random: "(120|240|360|420)",
          Timer: true,
          TopPenisText: "[top] will take [tar] into the closet or just out of sight of the rest of the players.  They will then have [rnd] seconds in 'heaven' to enjoy and stimulate each others bodies, as long as no actual 'sex' happens. At the end of the timer, the other players will open the closet or otherwise interrupt the [top] and [tar]'s play without warning.",
          TopVaginaText: null,
        },
        { //card 9
          Name: "Handjob",
          Copies: 1,
          Requirements: { Penis: true },
          Activities: { Groping: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[top] will stroke [tar]'s penis for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 10
          Name: "Vaginal Fingering",
          Copies: 1,
          Requirements: { Vagina: true },
          Activities: { Groping: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[top] will finger [tar]'s vagina for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 11
          Name: "Blowjob",
          Copies: 1,
          Requirements: { Penis: true},
          Activities: { Oral: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will suck [tar]'s dick.",
          TopVaginaText: null,
        },
        { //card 12
          Name: "Eating at the Y",
          Copies: 1,
          Requirements: { Vagina: true},
          Activities: { Oral: true },
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will eat [tar]'s pussy.",
          TopVaginaText: null,
        },
        { //card 13
          Name: "69.  Nice.",
          Copies: 1,
          Requirements: { },
          Activities: { Oral: true },
          Permanent: false,
          Random: "120",
          Timer: true,
          TopPenisText: "[tar] will lay down.  [top] will get on top of them, and for the next [rnd] seconds, they will 69 each other.",
          TopVaginaText: null,
        },
        { //card 14
          Name: "Mutual Masturbation",
          Copies: 1,
          Requirements: { },
          Activities: { Masturbation: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] and [top] will sit or lie down next to each other ([top]'s choice). They will both begin to masturbate next to each other. They can use their hand to explore or assist the other as long as they don't stop masturbating.  The player who orgasms first wins, and the loser will clean up the mess.",
          TopVaginaText: null,
        },
        { //card 14
          Name: "Oral",
          Copies: 1,
          Requirements: { },
          Activities: { Oral: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then give [tar] oral until [tar] reaches climax.",
          TopVaginaText: null,
        },
        { //card 15
          Name: "Rough Oral",
          Copies: 1,
          Requirements: { },
          Activities: { Oral: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then fuck [tar]'s face until they cum.",
          TopVaginaText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then ride [tar]'s face until they cum.",
        },
        { //card 16
          Name: "Oral Assistant",
          Copies: 2,
          Requirements: { },
          Activities: { Oral: true },
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "Any time someone receives an oral sex task, [tar] will use their mouth, tongue, and lips to assist in the oral task.",
          TopVaginaText: null,
        },
        { //card 17
          Name: "Solo Vibrator",
          Copies: 1,
          Requirements: { Vibrator: true },
          Activities: { Masturbation: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [tar] will use a vibrator on their genitals.",
          TopVaginaText: null,
        },
        { //card 18
          Name: "Vibrator Assistant",
          Copies: 1,
          Requirements: { Vibrator: true },
          Activities: { Masturbation: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will use a vibrator on [tar]'s genitals.",
          TopVaginaText: null,
        },
        { //card 19
          Name: "Mock Blowjob",
          Copies: 1,
          Requirements: { Dildo: true },
          Activities: { Oral: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [tar] will use a dildo and act like they are giving it the best blowjob they can for everyone to see.",
          TopVaginaText: null,
        },
        { //card 20
          Name: "Self Butt Plug",
          Copies: 1,
          Requirements: { ButtPlug: true },
          Activities: { Anal: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will select a butt plug and insert it in their ass in front of everyone.  It will be worn until it gets in the way of another task or the game ends.",
          TopVaginaText: null,
        },
        { //card 21
          Name: "Duo Butt Plug",
          Copies: 1,
          Requirements: { ButtPlug: true },
          Activities: { Anal: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will kneel and bend over with their ass in the air.  [top] will select a butt plug, lube it, and insert it into [tar]'s asshole. ",
          TopVaginaText: null,
        },
        { //card 22
          Name: "Doggy Style",
          Copies: 1,
          Requirements: { Vagina: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will kneel and bend over.  [top] will use their penis to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
          TopVaginaText: "The [tar] will kneel and bend over.  [top] will use a strap-on (if available), a dildo, or their hands to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
        },
        { //card 23
          Name: "Cum Doggy",
          Copies: 1,
          Requirements: { Vagina: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel and bend over.  [top] will use their penis to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
          TopVaginaText: "The [tar] will kneel and bend over.  [top] will use a strap-on (if available), a dildo, or their hands to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
        },
        { //card 24
          Name: "Doggy Style",
          Copies: 1,
          Requirements: { Penis: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will kneel upright.  [top] will kneel and back up onto [tar]'s penis, riding it doggy-style for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 25
          Name: "Cum Doggy",
          Copies: 1,
          Requirements: { Penis: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel upright.  [top] will kneel and back up onto [tar]'s penis, riding it doggy-style until the [tar] cums.",
          TopVaginaText: null,
        },
        { //card 26
          Name: "Missionary Cum",
          Copies: 1,
          Requirements: { Vagina: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will lay on their back with their legs open.  [top] will fuck [tar] until someone cums.",
          TopVaginaText: null,
        },
        { //card 27
          Name: "Missionary",
          Copies: 1,
          Requirements: { Vagina: true },
          Activities: { Sex: true },
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will lay on their back with their legs open.  [top] will fuck [tar] for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 28
          Name: "Prone Anal Cum",
          Copies: 1,
          Requirements: { },
          Activities: { Anal: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will lay on their stomach with their ass raised.  [top] will fuck [tar]'s ass until someone cums.",
          TopVaginaText: null,
        },
        { //card 29
          Name: "Prone Anal",
          Copies: 1,
          Requirements: { },
          Activities: { Anal: true },
          Permanent: false,
          Random: "(120|240|360)",
          Timer: true,
          TopPenisText: "The [tar] will lay on their stomach with their ass raised.  [top] will fuck [tar]'s ass for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 30
          Name: "Doggy Anal Cum",
          Copies: 1,
          Requirements: { },
          Activities: { Anal: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel with their ass up.  [top] will fuck [tar]'s ass until someone cums.",
          TopVaginaText: null,
        },
        { //card 31
          Name: "Doggy Anal",
          Copies: 1,
          Requirements: { },
          Activities: { Anal: true },
          Permanent: false,
          Random: "(120|240|360)",
          Timer: true,
          TopPenisText: "The [tar] will kneel with their ass up.  [top] will fuck [tar]'s ass for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 32
          Name: "Bukakke",
          Copies: 1,
          Requirements: { },
          Activities: { Facial: true },
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "Anytime someone gets a task where they may cum, you must be nearby, so that if the person cumming wants to, they may cum on your face. You are to wear this cum until the game ends.  -ILikeBukakke.gif-",
          TopVaginaText: null,
        },        
        { //card 33
          Name: "Center of Attention",
          Copies: 1,
          Requirements: { },
          Activities: { Oral: true, Groping: true },
          Permanent: false,
          Random: "(4-8)",
          Timer: false,
          TopPenisText: "[tar] will present themselves to all the players. Everyone may use whatever they want (vibrators, dildos, hands, mouths, tongues, their genitals, or whatever else) to make [tar] the center of attention.  This lasts until [tar] achieves [rnd] orgasms.",
          TopVaginaText: null,
        },
        { //card 34
          Name: "Denial",
          Copies: 1,
          Requirements: { },
          Activities: { Denial: true },
          Permanent: true,
          Random: "(5-10)",
          Timer: false,
          TopPenisText: "[tar] is hereby denied being allowed to orgasm until at least [rnd] orgasms are reached by other players.  Any activities which require them to cum must be re-rolled (activities which only one participant must cum are still in play).  If they cum before they are freed from this rule, the count is reset and doubled.",
          TopVaginaText: null,
        },        
        { //card 35
          Name: "New Couple",
          Copies: 1,
          Requirements: { },
          Activities: { Groping: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] and [top] are now 'together'.  They will cuddle and will casually be affectionate to each other (idle caresses, kisses, gropes, etc) until an activity calls for one of them to play with someone else.",
          TopVaginaText: null,
        },        
        { //card 36
          Name: "Sexy Dance",
          Copies: 1,
          Requirements: { },
          Activities: { Dancing: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will pick a song and (try) to do a sexy dance performance to the song for the rest of the players.",
          TopVaginaText: null,
        },                
        { //card 37
          Name: "Lap Dance",
          Copies: 1,
          Requirements: { },
          Activities: { Dancing: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will pick a song and sit down in a chair.  [top] will then proceed to dance to the song for [tar], culminating in a lapdance.",
          TopVaginaText: null,
        },        
        { //card 38
          Name: "Public Toy",
          Copies: 1,
          Requirements: { },
          Activities: { Sex: true, Oral: true },
          Permanent: false,
          Random: "(300|600|900)",
          Timer: true,
          TopPenisText: "[tar] is now a free use sex toy for anyone wanting to use them.  Each player can have up to [rnd] seconds with [tar]'s body to attempt to get themselves off. [top] gets first dibs, but may pass if they wish to enjoy themselves after someone else.  Players may choose to share (with their timers running at the same time, or run [tar] as more of a train, getting their full time for themselves.  This lasts until all players but [tar] have cum, used up their time, or declined to participate.",
          TopVaginaText: null,
        },
        { //card 38
          Name: "Oral Cock Warmer",
          Copies: 1,
          Requirements: { Penis: true },
          Activities: { Oral: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[top] is now a cockwarmer for [tar].  [top] will take [tar]'s cock in their mouth and keep it warm for [tar] until another task requires one of them.",
          TopVaginaText: null,
        },
        { //card 39
          Name: "Anal Cock Warmer",
          Copies: 1,
          Requirements: { Penis: true },
          Activities: { Anal: true },
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[top] is now an anal cockwarmer for [tar].  [top] will sit on [tar's] lap with [tar]'s penis in their ass to keep it warm until another tasks requires one of you.",
          TopVaginaText: "[top] is now a cockwarmer for [tar].  [top] will sit on [tar's] lap with [tar]'s penis in their ass to keep it warm until another tasks requires one of you.  [tar] may, at their request, use your vagina for a cockwarmer instead.",
        },
        { //card 40
          Name: "Fluffer",
          Copies: 1,
          Requirements: { },
          Activities: { Oral: true },
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] is now a party fluffer.  Any time someone wants to get aroused, they may request use of [tar]'s mouth and hands to do so. Priority for fluffing goes for those about to engage in game-directed tasks, but fluffing can otherwise be requested by anyone playing at any time. The fluffing lasts for as long as it takes to cause a significant increase in arousal (full hard-on, noticeable increase in wetness, etc).",
          TopVaginaText: null,
        },
      ],
    },
    { //Second Deck  -Sexless BDSM
      Name: "BDSM - CURRENTLY EMPTY",
      Description: "BDSM tasks, including things like impact, bondage, light sadism, blindfolds and other sensory derivation, collar/leash, clamps/pegs, slapping, and other similar activities.  Nothing involved should involve sex or penetration.",
      Cards: [ 
        { //card 1
          Name: "Kiss",
          Copies: 1,  //How many copies of the card to put in the playing deck
          Requirements: { },  //what toys this card requires 
                              //(also if target needs a Penis/Vagina = true)
          Activities: { Kissing: true },  //activities the card contains
          Permanent: false,  //is card a permanent rule
          Random: "(30|60)",  //Uses a number, can be random using Xtoy's format
          Timer: true,  //Is random a timer?
          Secret: false, //Is the action to be hidden from the target?
          SecretText: null, //the text to instruct the target to be completed before 
                            //continuing to the text below, often involving being 
                            //blindfolded.  Uses the same replacements codes below.
          /*
          Below is the text for the actions.  
          "TopVaginaText" is for if the text will differ 
          if the top player has a Penis or Vagina.  
            -[top] for the top player's name
            -[tar] for the target player's name
            -[rnd] for the number from Random
          */
          TopPenisText: "[top] will approach [tar] and kiss them for [rnd] seconds.",
          TopVaginaText: null,
        },
      ],
    },
  ];
  
var CustomCards = getVariable("CustomDeck");
try {
  CustomCards = JSON.parse(CustomCards);
  for (var key in CustomCards) {
    if (CustomCards.hasOwnProperty(key) && key.charAt(0) === '_') {
      delete CustomCards[key];
    }
  }
} catch (e) {
  console.log("An error occured trying to parse Custom Cards.");
  CustomCards = null;
}

if (Array.isArray(CustomCards)) {
  var CustomDeck = {
    Name: "Custom Deck",
    Description: "If you added any custom cards to the option at the start of the Tease, they are found in this deck.",
    Cards: CustomCards,
  };
  Decks.push(CustomDeck);
}

var Players = [];  //Array holding the details of all players.
/*
Players[#].Name        --Player Name
Players[#].Penis       --True if they have a penis
Players[#].Vagina      --True if they have a vagina
Players[#].Rules[...]  --place to save any perm rules they receive
*/
var GameDeck = [];  //Array holding all the cards to be played with.
var Requirements = []; //Array holding the requirements from all cards.
var Activities = []; //Array holding the activiities from all cards.

function getPlayerDetails() {
  var PlayerCount = getVariable("PlayerCount");
  for (var i = 0; i < PlayerCount; i++){
    Players[i] = {};
    Players[i].Rules = [];
    //Ask each Player for their name and save it
    callAction({
      "type":"updateTease",
      "part":"text",
      "location":"main",
      "delay":"none",
      "text":{
        "ops":[{
          "insert":"Player " + i + ". What is your name?"},{
          "attributes":{"align":"center"},
          "insert":"\n"}
        ]},
      "clear":true}
    );
    callAction({
      "part":"input",
      "type":"updateTease",
      "inputType":"text",
      "variable":"Name"
      }, true);
      console.log("Player " + i + " Name Given");
    Players[i].Name = getVariable("Name");
    
    //resets Penis/Vag variables, and asks the player which they have, then saves it.
    setVariable("Penis", false);
    setVariable("Vagina", false);
    callAction({
      "type":"updateTease",
      "part":"text",
      "location":"main",
      "delay":"none",
      "text":{
        "ops":[{
          "insert":Players[i].Name + ", What do you have?"},
          {"attributes":{
            "align":"center"},
            "insert":"\n"
          }
        ]}
      });
    callAction({
      "type":"updateTease",
      "part":"input",
      "inputType":"buttons",
      "buttons":[{
        "name":"Penis",
        "action":null,
        "setVariable":true,
        "variable":"Penis",
        "variableValue":"true",
        "parsedName":"Penis"},
        {"name":"Vagina",
        "action":null,
        "setVariable":true,
        "variable":"Vagina",
        "variableValue":"true",
        "parsedName":"Vagina"}
      ]
    }, true);
    var penis = getVariable("Penis");
    var vag = getVariable("Vagina");
    if (penis) {Players[i].Penis = true;}
    if (vag) {Players[i].Vagina = true;}
    callAction({
      "type":"updateTease",
      "part":"text",
      "location":"main",
      "delay":"none",
      "text":{
        "ops":[{
          "attributes":{"align":"center"},
          "insert":"\n"
        }]
      },
      "clear":true
    });
  }
  /* //Debugging Code
  for (var i = 1; i <= Players.length; i++) {
    var parts = "";
    if (Players[i].Penis) {parts = "Penis ";}
    if (Players[i].Vagina) {parts = parts + "Vagina";}
    console.log("P"+i+ ": " + Players[i].Name + " " + parts);
  }*/
}

function getRandom(input) {
  //Processes the numbers through Xtoys for randomization and such
  setVariable("num", input);
  callAction({
    "type":"updateJob",
    "job":"ProcessNumber",
    "action":"start",
    "restart":true});
  return getVariable("num");
}

function chooseDecks() {  
  var Deck = "InProgress";
  
  while (Deck !== "Complete") {    
    displayDecks(Deck);
    
    var buttonsText = "";
    for (i = 0; i < Decks.length; i++) {
      if (Decks[i] && typeof Decks[i].Name === "string") {
        buttonsText = buttonsText + '{"name":"' + Decks[i].Name + '",' +
            '"action":null,"setVariable":true,"variable":"Deck",' +
            '"variableValue":"' + i + '"},';
      }
    }
    
    var jsonString = '{"type":"updateTease","part":"input","inputType":"buttons","buttons":[' +
    buttonsText + 
    '{"name":"Finished","action":null,"setVariable":true,"variable":"Deck",' +
    '"variableValue":"Completed"}]}';
    callAction(JSON.parse(jsonString), true);
    console.log("ran this code");
    Deck = getVariable("Deck");
    updateDeckChoice(Deck);
    
  }
}

function updateDeckChoice(DeckNum) {
  DeckNum = Number(DeckNum);
  if (Number.isInteger(DeckNum)) {
    Decks[DeckNum].Active = !Decks[DeckNum].Active;
  }
}

function displayDecks(deckDescription) {
  var found = false;
  var DeckList = "Active Decks: ";
  for (i = 0; i < Decks.length; i++) {
    if (Decks[i].Active) {
      found = true;
      DeckList = DeckList + Decks[i].Name + ", ";
    }
    DeckList = DeckList.slice(0, -2);
  }
  canvas.clearRect(0, 0, 1500, 1000);
  canvas.font = "48px serif";
  canvas.textAlign = "center";
  canvas.fillStyle = "white";
  //canvas.textBaseline = "top"; 
  if (found) {  
    console.log("decks found");
    canvas.fillText(DeckList, 1500/2, 1000/2);
  } else {
    console.log("no decks");
    canvas.fillText("No Decks Chosen", 1500/2, 1000/2);
  }
  canvas.font = "24px serif";
  canvas.textBaseline = "middle";
  if (deckDescription) {
    wrapText(Decks[deckDescription].Description, 1500/2, 1000/2, 1450, 28);
  } else {
    wrapText("Please choose a deck to continue.", 1500/2, 1000/2, 1450, 28);
  }
}

function wrapText(text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';
  var testLine = '';
  var testWidth = 0;
  var currentY = y;

  for (n = 0; n < words.length; n++) {
    testLine = line + words[n] + ' ';
    testWidth = canvas.measureText(testLine).width;
    if (testWidth > maxWidth && n > 0) {
      canvas.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  canvas.fillText(line, x, currentY);
}

function makeGameDeck() {
  for (i = 0; i < Decks.length; i++) {
    if (Decks[i].Active) {
      var Cards = Decks[i].Cards;
      for (c = 0; c < Cards.length; c++) {
        if (Cards[c]) {
          var copies = Cards[c].Copies || 1;
          for (count = 0; count < copies; count++) {
            GameDeck.push(Cards[c]);
          }
        } 
      }
    }
  }
  packReqsAndActivities();
}

function packReqsAndActivities() {
  //Requirements, Activities are the array names.
  for (i = 0; i < GameDeck.length; i++) {
    for (key in GameDeck[i].Requirements) {
      if (GameDeck[i].hasOwnProperty(key)) {
        var str = toTitleCase(key);
        if (Requirements.indexOf(str) === -1) {
          Requirements.push(str);
        }
      }
    }
    
    var index = Requirements.indexOf("Penis");
    if (index !== -1) {
      Requirements.splice(index, 1);
    }    
    index = Requirements.indexOf("Vagina");
    if (index !== -1) {
      Requirements.splice(index, 1);
    }
    
    for (key in GameDeck[i].Activities) {
      if (GameDeck[i].hasOwnProperty(key)) {
        var str = toTitleCase(key);
        if (Activities.indexOf(str) === -1) {
          Activities.push(str);
        }
      }
    }
  }
}

function toTitleCase(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function replacePlaceholders(str, tar, top, rnd) {
  tar = (typeof tar !== 'undefined') ? tar : 'defaultTarget';
  top = (typeof top !== 'undefined') ? top : 'defaultTop';
  rnd = (typeof rnd !== 'undefined') ? rnd : 'defaultNumber';
  //if you see any of those default values, there's a bug.  Added for safety.
  return str
    .replace(/\[tar\]/g, tar)
    .replace(/\[top\]/g, top)
    .replace(/\[rnd\]/g, rnd);
}

/* TODO:
  --Display all the Requirements and Activities and let the player add/remove them.
  --Remove cards from "GameDeck" that don't comply with above selections
  --Spin bottle, draw Cards, handle Secret option, redraw button. start timer
  --Track Permanent Rules, option to remove them when finished, roll/timer if needed.
*/
