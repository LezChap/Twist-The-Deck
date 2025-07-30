var Decks = [
    { //First Deck - Sex
      Name: "Sex",
      Description: "Basic, vanilla sexual acts.  Includes things like kissing, groping, masturbation, oral, vaginal, anal, and multiple-participate sex acts.  May also include common sex toys like vibrators, dildos, and butt plugs.",
      Cards: [ 
        { //card 1
          Name: "Kiss",
          Copies: 1,  //How many copies of the card to put in the playing deck
          Requirements: [ ],  //what toys this card requires 
                              //(also if target needs a Penis/Vagina = true)
          Activities: [ "Kissing" ],  //activities the card contains
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
          Requirements: [ ],
          Activities: [ "Groping" ],
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "[top] will approach [tar] and grope them for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 3
          Name: "Suckle",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Kissing" ],
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "[top] will spend [rnd] seconds focusing their oral attention on [tar]'s nipples and breasts.",
          TopVaginaText: null,
        },
        { //card 4
          Name: "Nibble",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Kissing" ],
          Permanent: false,
          Random: "(30|60)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will nibble from [tar]'s collarbones, up their neck and to their ears.",
          TopVaginaText: null,
        },
        { //card 5
          Name: "Oral Tease",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Kissing", "Groping" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will sit, and [top] will kneel between their legs.  For the next [rnd] seconds, [top] will use their hands and mouth to tease [tar], touching, kissing, and fondling from [tar]'s lower abdomen to their inner thighs, but will refrain from directly stimulating [tar]'s genitals.",
          TopVaginaText: null,
        },
        { //card 6
          Name: "Dry Grind",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Grinding" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will stand or sit as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their penis against [tar]'s thigh, hip, or ass.  If the ass is used, [top] will not be allowed to rub between both asscheeks; this is to be a dry hump.",
          TopVaginaText: "[tar] will stand or sit as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their vagina against [tar]'s thigh, hip, or ass.  This is to be a 'dry hump'.",
        },
        { //card 7
          Name: "Chest Grind",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Grinding" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[tar] will stand, sit, or lie as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their penis against [tar]'s chest and breasts.  The breasts, if possible, can be pushed together at the discretion of [top].",
          TopVaginaText: "[tar] will stand, sit, or lie as [top] directs. [top] will then spend the next [rnd] seconds rubbing and grinding their vagina against [tar]'s chest and breasts.  The breasts, if possible, can be pushed together or in any other manner at the discretion of [top].",
        },
        { //card 8
          Name: "Minutes in Heaven",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Kissing", "Groping", "Grinding" ],
          Permanent: false,
          Random: "(120|240|360|420)",
          Timer: true,
          TopPenisText: "[top] will take [tar] into the closet or just out of sight of the rest of the players.  They will then have [rnd] seconds in 'heaven' to enjoy and stimulate each others bodies, as long as no actual 'sex' happens. At the end of the timer, the other players will open the closet or otherwise interrupt the [top] and [tar]'s play without warning.",
          TopVaginaText: null,
        },
        { //card 9
          Name: "Handjob",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Groping" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[top] will stroke [tar]'s penis for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 10
          Name: "Vaginal Fingering",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Groping" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "[top] will finger [tar]'s vagina for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 11
          Name: "Blowjob",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will suck [tar]'s dick.",
          TopVaginaText: null,
        },
        { //card 12
          Name: "Eating at the Y",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: "(60|90|120)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will eat [tar]'s pussy.",
          TopVaginaText: null,
        },
        { //card 13
          Name: "69.  Nice.",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: "120",
          Timer: true,
          TopPenisText: "[tar] will lay down.  [top] will get on top of them, and for the next [rnd] seconds, they will 69 each other.",
          TopVaginaText: null,
        },
        { //card 14
          Name: "Mutual Masturbation",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Masturbation" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] and [top] will sit or lie down next to each other ([top]'s choice). They will both begin to masturbate next to each other. They can use their hand to explore or assist the other as long as they don't stop masturbating.  The player who orgasms first wins, and the loser will clean up the mess.",
          TopVaginaText: null,
        },
        { //card 15
          Name: "Oral",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then give [tar] oral until [tar] reaches climax.",
          TopVaginaText: null,
        },
        { //card 16
          Name: "Rough Oral",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then fuck [tar]'s face until they cum.",
          TopVaginaText: "[tar] will stand, sit, or lie as directed by [top]. [top] will then ride [tar]'s face until they cum.",
        },
        { //card 17
          Name: "Oral Assistant",
          Copies: 2,
          Requirements: [ ],
          Activities: [ "Oral" ],
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "Any time someone receives an oral sex task, [tar] will use their mouth, tongue, and lips to assist in the oral task.",
          TopVaginaText: null,
        },
        { //card 18
          Name: "Solo Vibrator",
          Copies: 1,
          Requirements: [ "Vibrator" ],
          Activities: [ "Masturbation" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [tar] will use a vibrator on their genitals.",
          TopVaginaText: null,
        },
        { //card 19
          Name: "Vibrator Assistant",
          Copies: 1,
          Requirements: [ "Vibrator" ],
          Activities: [ "Masturbation" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [top] will use a vibrator on [tar]'s genitals.",
          TopVaginaText: null,
        },
        { //card 20
          Name: "Mock Blowjob",
          Copies: 1,
          Requirements: [ "Dildo" ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "For the next [rnd] seconds, [tar] will use a dildo and act like they are giving it the best blowjob they can for everyone to see.",
          TopVaginaText: null,
        },
        { //card 21
          Name: "Self Butt Plug",
          Copies: 1,
          Requirements: [ "ButtPlug" ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will select a butt plug and insert it in their ass in front of everyone.  It will be worn until it gets in the way of another task or the game ends.",
          TopVaginaText: null,
        },
        { //card 22
          Name: "Duo Butt Plug",
          Copies: 1,
          Requirements: [ "ButtPlug" ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will kneel and bend over with their ass in the air.  [top] will select a butt plug, lube it, and insert it into [tar]'s asshole. ",
          TopVaginaText: null,
        },
        { //card 23
          Name: "Doggy Style",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will kneel and bend over.  [top] will use their penis to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
          TopVaginaText: "The [tar] will kneel and bend over.  [top] will use a strap-on (if available), a dildo, or their hands to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
        },
        { //card 24
          Name: "Cum Doggy",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel and bend over.  [top] will use their penis to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
          TopVaginaText: "The [tar] will kneel and bend over.  [top] will use a strap-on (if available), a dildo, or their hands to fuck [tar]'s pussy for [rnd] seconds - doggy style.",
        },
        { //card 25
          Name: "Doggy Style",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will kneel upright.  [top] will kneel and back up onto [tar]'s penis, riding it doggy-style for [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 26
          Name: "Cum Doggy",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel upright.  [top] will kneel and back up onto [tar]'s penis, riding it doggy-style until the [tar] cums.",
          TopVaginaText: null,
        },
        { //card 27
          Name: "Missionary Cum",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will lay on their back with their legs open.  [top] will fuck [tar] until someone cums.",
          TopVaginaText: null,
        },
        { //card 28
          Name: "Missionary",
          Copies: 1,
          Requirements: [ "Vagina" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: "(60|120|240)",
          Timer: true,
          TopPenisText: "The [tar] will lay on their back with their legs open.  [top] will fuck [tar] for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 29
          Name: "Prone Anal Cum",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will lay on their stomach with their ass raised.  [top] will fuck [tar]'s ass until someone cums.",
          TopVaginaText: null,
        },
        { //card 30
          Name: "Prone Anal",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: "(120|240|360)",
          Timer: true,
          TopPenisText: "The [tar] will lay on their stomach with their ass raised.  [top] will fuck [tar]'s ass for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 31
          Name: "Doggy Anal Cum",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "The [tar] will kneel with their ass up.  [top] will fuck [tar]'s ass until someone cums.",
          TopVaginaText: null,
        },
        { //card 32
          Name: "Doggy Anal",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: "(120|240|360)",
          Timer: true,
          TopPenisText: "The [tar] will kneel with their ass up.  [top] will fuck [tar]'s ass for the next [rnd] seconds.",
          TopVaginaText: null,
        },
        { //card 33
          Name: "Bukakke",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Facial" ],
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "Anytime someone gets a task where they may cum, you must be nearby, so that if the person cumming wants to, they may cum on your face. You are to wear this cum until the game ends.  -ILikeBukakke.gif-",
          TopVaginaText: null,
        },        
        { //card 34
          Name: "Center of Attention",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Oral", "Groping" ],
          Permanent: false,
          Random: "(4-8)",
          Timer: false,
          TopPenisText: "[tar] will present themselves to all the players. Everyone may use whatever they want (vibrators, dildos, hands, mouths, tongues, their genitals, or whatever else) to make [tar] the center of attention.  This lasts until [tar] achieves [rnd] orgasms.",
          TopVaginaText: null,
        },
        { //card 35
          Name: "Denial",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Denial" ],
          Permanent: true,
          Random: "(5-10)",
          Timer: false,
          TopPenisText: "[tar] is hereby denied being allowed to orgasm until at least [rnd] orgasms are reached by other players.  Any activities which require them to cum must be re-rolled (activities which only one participant must cum are still in play).  If they cum before they are freed from this rule, the count is reset and doubled.",
          TopVaginaText: null,
        },        
        { //card 36
          Name: "New Couple",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Groping" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] and [top] are now 'together'.  They will cuddle and will casually be affectionate to each other (idle caresses, kisses, gropes, etc) until an activity calls for one of them to play with someone else.",
          TopVaginaText: null,
        },        
        { //card 37
          Name: "Sexy Dance",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Dancing" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will pick a song and (try) to do a sexy dance performance to the song for the rest of the players.",
          TopVaginaText: null,
        },                
        { //card 38
          Name: "Lap Dance",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Dancing" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] will pick a song and sit down in a chair.  [top] will then proceed to dance to the song for [tar], culminating in a lapdance.",
          TopVaginaText: null,
        },        
        { //card 39
          Name: "Public Toy",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Sex", "Oral"],
          Permanent: false,
          Random: "(300|600|900)",
          Timer: true,
          TopPenisText: "[tar] is now a free use sex toy for anyone wanting to use them.  Each player can have up to [rnd] seconds with [tar]'s body to attempt to get themselves off. [top] gets first dibs, but may pass if they wish to enjoy themselves after someone else.  Players may choose to share (with their timers running at the same time, or run [tar] as more of a train, getting their full time for themselves.  This lasts until all players but [tar] have cum, used up their time, or declined to participate.",
          TopVaginaText: null,
        },
        { //card 40
          Name: "Oral Cock Warmer",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Oral" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[top] is now a cockwarmer for [tar].  [top] will take [tar]'s cock in their mouth and keep it warm for [tar] until another task requires one of them.",
          TopVaginaText: null,
        },
        { //card 41
          Name: "Anal Cock Warmer",
          Copies: 1,
          Requirements: [ "Penis" ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: null,
          Timer: false,
          TopPenisText: "[top] is now an anal cockwarmer for [tar].  [top] will sit on [tar's] lap with [tar]'s penis in their ass to keep it warm until another tasks requires one of you.",
          TopVaginaText: "[top] is now a cockwarmer for [tar].  [top] will sit on [tar's] lap with [tar]'s penis in their ass to keep it warm until another tasks requires one of you.  [tar] may, at their request, use your vagina for a cockwarmer instead.",
        },
        { //card 42
          Name: "Fluffer",
          Copies: 1,
          Requirements: [ ],
          Activities: [ "Oral" ],
          Permanent: true,
          Random: null,
          Timer: false,
          TopPenisText: "[tar] is now a party fluffer.  Any time someone wants to get aroused, they may request use of [tar]'s mouth and hands to do so. Priority for fluffing goes for those about to engage in game-directed tasks, but fluffing can otherwise be requested by anyone playing at any time. The fluffing lasts for as long as it takes to cause a significant increase in arousal (full hard-on, noticeable increase in wetness, etc).",
          TopVaginaText: null,
        },
        { //card 43
          Name: "Fuck Machine - Pussy",
          Copies: 1,
          Requirements: [ "Vagina", "FuckMachine" ],
          Activities: [ "Sex" ],
          Permanent: false,
          Random: "(120|240|360|480|600)",
          Timer: true,
          TopPenisText: "[top] will control a fuck machine fucking [tar]. [top] gets to decide [tar]'s position, the speed and depth of the machine, and the dildo.  [tar] may veto the dildo if it's unreasonably sized.",
          TopVaginaText: null,
        },
        { //card 44
          Name: "Fuck Machine - Anal",
          Copies: 1,
          Requirements: [ "FuckMachine" ],
          Activities: [ "Anal" ],
          Permanent: false,
          Random: "(120|240|360|480|600)",
          Timer: true,
          TopPenisText: "[top] will control a fuck machine fucking [tar]'s ass. [top] gets to decide [tar]'s position, the speed and depth of the machine, and the dildo. [tar] may veto the dildo if it's unreasonably sized. and any requests for more lube will be granted.",
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
          Requirements: [ ],  //Array  list of what toys this card requires 
                              //(also if target needs a Penis/Vagina)
          Activities: [ "Kissing" ],  //array list of activities the card contains
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
  for (var i = CustomCards.length - 1; i >= 0; i--) {
    var cc = CustomCards[i];
  
    for (var key in cc) {
      if (cc.hasOwnProperty(key) && key.charAt(0) === '_') {
        delete CustomCards[i][key];
      }
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
var Activities = []; //Array holding the activities from all cards.
var GameState = {
  "Card":{},
  "Target":{},
  "Top":{},
  "SecretDone":false,
  "Random":-1,
};

function setupGame() {
  //all the functions and code to get the game ready to play.
  getPlayerDetails(); //get all player names/data
  chooseDecks();  //Select the decks to play with
  makeGameDeck();  //move all cards from active decks into GameDeck Array
  packReqsAndActivities();  //fill Requirements and Activities Arrays
  selectRequirements(); //Let the players select what toys and objects they have available.
  selectActivities(); //Lets the players mark certain activities as hard limits to remove from play.
  remvoeFilteredCards(); //remove the cards blacklisted from the above inputs.
  
  registerTrigger({"type":"variableChange","valueChange":true,"variable":"gameChoice"}, onTrigger);
  displayCurrentGameState();
}

function getPlayerDetails() {
  /*
    Function to get all the player names and what genitals they have.
  */
  var PlayerCount = getVariable("PlayerCount");
  for (var i = 0; i < PlayerCount; i++){
    Players[i] = {};
    Players[i].Rules = [];
    //Ask each Player for their name and save it
    showMainText("Player " + (i+1) + ". What is your name?", true);
    /*  //replaced by showMainText above
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
    ); */
    callAction({
      "part":"input",
      "type":"updateTease",
      "inputType":"text",
      "variable":"Name"
      }, true);
    Players[i].Name = getVariable("Name");
    
    //resets Penis/Vag variables, and asks the player which they have, then saves it.
    setVariable("Penis", false);
    setVariable("Vagina", false);
    showMainText(Players[i].Name + ", What do you have?");
    /* //replaced by showMainText above.
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
    */
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
    
    clearMainText();
  }
  /* //Debugging Code
  for (var i = 1; i <= Players.length; i++) {
    var parts = "";
    if (Players[i].Penis) {parts = "Penis ";}
    if (Players[i].Vagina) {parts = parts + "Vagina";}
    console.log("P"+i+ ": " + Players[i].Name + " " + parts);
  }*/
}

function chooseDecks() { 
  /*
    Function which gets the players to choice which
    decks to play with.
  */
  var Deck = "InProgress";
  
  while (Deck !== "Completed") {    
    displayDecks(Deck);
    
    var buttonObj = [];
    for (var i = 0; i < Decks.length; i++) {
      if (Decks[i] && typeof Decks[i].Name === "string") {
        buttonObj[i]= {
          Name: Decks[i].Name,
          Value: i
        };
      }
    }
    buttonObj.push({Name: "Finished", Value: "Completed"});
    
    Deck = showChoiceButtons(buttonObj, "Deck");
    updateDeckChoice(Deck);
    
    var found = false;
    for (var i = 0; i < Decks.length; i++) {
      if (Decks[i].Active) {
        found = true;
        break;
      }
    }
    if (Deck == "Completed" && !found) Deck = "In Progress";
  }
}

function updateDeckChoice(DeckNum) {
  DeckNum = Number(DeckNum);
  if (!isNaN(DeckNum)) {
    Decks[DeckNum].Active = !Decks[DeckNum].Active;
  } 
}

function displayDecks(deckDescription) {
  /*
    Displays the Active Deck and other deck information
    to the canvas.
  */
  var found = false;
  var DeckList = "Active Decks: ";
  for (var i = 0; i < Decks.length; i++) {
    if (Decks[i].Active) {
      found = true;
      DeckList = DeckList + Decks[i].Name + ", ";
    }
  }
  DeckList = DeckList.slice(0, -2);
  
  canvas.clearRect(0, 0, 1500, 1000);
  canvas.font = "64px serif";
  canvas.textAlign = "center";
  canvas.fillStyle = "white";
  canvas.textBaseline = "top"; 
  if (found) {  
    wrapText(DeckList, 1500/2, 150, 1450, 68);
    showStatusText(DeckList);
  } else {
    canvas.fillText("No Decks Chosen", 1500/2, 150);
    showStatusText("No Decks Chosen.");
  }
  canvas.textBaseline = "middle";
  var deckNum = Number(deckDescription);
  if (!isNaN(deckNum)) {
    canvas.font = "48px serif";
    canvas.fillText(Decks[deckNum].Name, 1500/2, 1000/2-52);
    canvas.font = "36px serif";
    wrapText(Decks[deckNum].Description, 1500/2, 1000/2, 1450, 40);
    showMainText(Decks[deckNum].Description);
  } else {
    canvas.font = "36px serif";
    wrapText("Please choose a deck to continue.", 1500/2, 1000/2, 1450, 40);
    showMainText("Please choose a deck to continue.");
  }
}

function makeGameDeck() {
  /*
    Fills the GameDeck with cards from the active decks.
  */
  for (var i = 0; i < Decks.length; i++) {
    if (Decks[i].Active) {
      var Cards = Decks[i].Cards;
      for (var c = 0; c < Cards.length; c++) {
        if (Cards[c]) {
          var copies = Cards[c].Copies || 1;
          for (var count = 0; count < copies; count++) {
            GameDeck.push(Cards[c]);
          }
        } 
      }
    }
  }
}

function packReqsAndActivities() {
  /*
    Goes through the game deck and places all the
    Requirements and Activities into their respective
    arrays, using TitleCase to attempt to prevent duplicates.
  */
  for (var i = 0; i < GameDeck.length; i++) {
    var card = GameDeck[i];
    if (card.Requirements) {
      for (var k = 0; k < card.Requirements.length; k++) {
        var str = toTitleCase(card.Requirements[k]);
        var fIndex = findIndex(Requirements, "Name", str);
        if (!fIndex[0]) {
          Requirements.push({ Name: str });
        }
      }
    }
    
    if (card.Activities) {
      for (var k = 0; k < card.Activities.length; k++) {
        var str = toTitleCase(card.Activities[k]);
        var fIndex = findIndex(Activities, "Name", str);
        if (!fIndex[0]) {
          Activities.push({ Name: str, Active: true });
        }
      
      }
    }
  }
  
  var fIndex = findIndex(Requirements, "Name", "Penis");
  if (fIndex[1] !== -1) {
    Requirements.splice(fIndex[1], 1);
  }    
  fIndex = findIndex(Requirements, "Name", "Vagina");
  if (fIndex[1] !== -1) {
    Requirements.splice(fIndex[1], 1);
  }
}

function selectRequirements() {
  var buttonObj = [];
  for (var i = 0; i < Requirements.length; i++) {
    buttonObj[i] = {
      Name: Requirements[i].Name,
      Value: Requirements[i].Name
    };
  }
  buttonObj.push({ Name: "Finished", Value: "Completed" });
  var req = "";
  while (req !== "Completed") {
    var found = false;
    var ReqText = "Available Toys: ";
    for (var i = 0; i < Requirements.length; i++) {
      if (Requirements[i].Active) {
        found = true;
        ReqText = ReqText + Requirements[i].Name + ", ";
      }
    }
    ReqText = ReqText.slice(0, -2);
    
    canvas.clearRect(0, 0, 1500, 1000);
    canvas.font = "64px serif";
    canvas.textAlign = "center";
    canvas.fillStyle = "white";
    canvas.textBaseline = "top"; 
    if (found) {
      wrapText(ReqText, 1500/2, 150, 1450, 68);
      showMainText(ReqText, true);
    } else {
      wrapText("You're telling me you don't have any toys?!?", 1500/2, 150, 1450, 68);
      showMainText("You're telling me you don't have any toys?!?", true);
    }
    showStatusText("Please select the toys and objects you have available:");
    req = showChoiceButtons(buttonObj, "req");
    
    var fIndex = findIndex(Requirements, "Name", req);
    if (req !== "Completed" && fIndex[0] && fIndex[1] >= 0) {
      Requirements[fIndex[1]].Active = !Requirements[fIndex[1]].Active;
    } 
  }  
}

function selectActivities() {
  var buttonObj = [];
  for (var i = 0; i < Activities.length; i++) {
    buttonObj[i] = {
      Name: Activities[i].Name,
      Value: Activities[i].Name
    };
  }
  buttonObj.push({ Name: "Finished", Value: "Completed" });
  var acts = "";
  while (acts !== "Completed") {
    var found = false;
    var ActText = "Allowed Activities: ";
    var LimitsText = "Hard Limit List: ";
    for (var i = 0; i < Activities.length; i++) {
      if (Activities[i].Active) {
        found = true;
        ActText = ActText + Activities[i].Name + ", ";
      } else {
        LimitsText = LimitsText + Activities[i].Name + ", ";
      }
    }
    ActText = ActText.slice(0, -2);
    LimitsText = LimitsText.slice(0, -2);
    
    
    canvas.clearRect(0, 0, 1500, 1000);
    canvas.font = "48px serif";
    canvas.textAlign = "center";
    canvas.fillStyle = "white";
    canvas.textBaseline = "top"; 
    if (found) {
      wrapText(ActText, 1500/2, 150, 1450, 50);
      showMainText(ActText, true);
    } else {
      wrapText("You haven't selected any allowed activities!", 1500/2, 150, 1450, 50);
      showMainText("You haven't selected any allowed activities!", true);
    }
    
    if (LimitsText == "Hard Limits List") {
      LimitsText = LimitsText + ": None";
      wrapText(LimitsText, 1500/2, 700, 1450, 50);
      showMainText(LimitsText, false);
    } else {
      wrapText(LimitsText, 1500/2, 700, 1450, 50);
      showMainText(LimitsText, false);
    }
    
    showStatusText("Please select the activities you want to do:");
    acts = showChoiceButtons(buttonObj, "acts");
    
    var fIndex = findIndex(Activities, "Name", acts);
    if (acts !== "Completed" && fIndex[0] && fIndex[1] >= 0) {
      Activities[fIndex[1]].Active = !Activities[fIndex[1]].Active;
    } 
  }  
}

function remvoeFilteredCards() {
  var inactiveActs = {};
  for (var j = 0; j < Activities.length; j++) {
    var act = Activities[j];
    if (!act.Active) {
      inactiveActs[act.Name] = true;
    }
  }
  var inactiveReqs = {};
  for (var j = 0; j < Requirements.length; j++) {
    var req = Requirements[j];
    if (!req.Active) {
      inactiveReqs[req.Name] = true;
    }
  }

  for (var i = GameDeck.length - 1; i >= 0; i--) {
    var card = GameDeck[i];
    var remove = false;
    
    if (card && card.Activities) {
      for (var k = 0; k < card.Activities.length; k++) {
        var activityName = toTitleCase(card.Activities[k]);
        if (inactiveActs.hasOwnProperty(activityName)) {
          remove = true;
          break;
        }
      }
    }
    if (card && card.Requirements) {
      for (var k = 0; k < card.Requirements.length; k++) {
        var requirementName = toTitleCase(card.Requirements[k]);
        if (inactiveReqs.hasOwnProperty(requirementName)) {
          remove = true;
          break;
        }
      }
    }

    if (remove) {
      GameDeck.splice(i, 1);
    }
  }
}

function spinBottle() {
  var tarIndex = Math.floor(Math.random() * Players.length);
  var topIndex = tarIndex;
  while (topIndex === tarIndex) {
    topIndex = Math.floor(Math.random() * Players.length);
  }
  GameState.Target = Players[tarIndex];
  GameState.Top = Players[topIndex];
}

function drawCard() {
  var invalid = true;
  
  while (invalid) {
    var cardIndex = Math.floor(Math.random() * GameDeck.length);
    var card = GameDeck[cardIndex];
    var reqString;
    if (GameState.Target.Penis) reqString = "Vagina";
    if (GameState.Target.Vagina) reqString = "Penis";
    
    var found = false;
    for (var i = 0; i < card.Requirements.length; i++) {
      if (card.Requirements[i] === reqString) {
        found = true;
        break;
      }
    }
    if (!found) {
      invalid = false;
      GameState.Card = card;
      GameState.SecretDone = false;
      GameState.Random = (card.Random != null && card.Random !== "") ? parseNumberInput(card.Random) : -1;
    } 
  }
}

function displayCurrentGameState() {
  var text;
  var mainButObj = [];
  var sideButObj = [];

  if (GameState.Card && GameState.Card.TopPenisText) {
    //if there's a "valid" card, process it's text and display it.

    if (GameState.Card.Secret && !GameState.SecretDone) {
      text = GameState.Card.SecretText;
      mainButObj.push({"Name":"Continue Action", "Value":"ContSecret"});
    } else {
      text = (GameState.Top.Vagina && GameState.Card.TopVaginaText != null) ? GameState.Card.TopVaginaText : GameState.Card.TopPenisText;
      mainButObj.push({"Name":"Spin the Bottle", "Value":"Spin"});
      if (GameState.Card.Timer) sideButObj.push({"Name":"Start Timer","Value":"StartTimer"});
    }
    text = replacePlaceholders(text, GameState.Target.Name, GameState.Top.Name, GameState.Random);
    mainButObj.push({"Name":"Redraw Card", "Value":"Redraw"});
  } else {
    text = "Welcome to Twist the Deck.  Make sure all players have discussed non-coded limits, " +
      "such as safe words, safer sex, etc.  Remember to play safe and not do anything you're not " +
      "comfortable doing or feel unsafe doing.  This is supposed to be fun! If everyone agrees, " +
      "press the 'Spin the Bottle' button to begin the game.";
    mainButObj.push({"Name":"Spin the Bottle", "Value":"Spin"});
  }
  
  showMainText(text, true);

  showSideButtons(sideButObj, "gameChoice");
  showChoiceButtons(mainButObj, "gameChoice", true);
}

function onTrigger(data) {
  processGameInput(data.trigger);
}

function processGameInput(choice) {
  switch (choice) {
    case "StartTimer":
      showTimer(GameState.Random);
      break;
    case "PermRule":
      showStatusText("Perm Rule clicked.");
      break;
    case "Spin":
      spinBottle();
      drawCard();
      break;
    case "Redraw":
      drawCard();
      break;
    case "ContSecret":
      GameState.SecretDone = true;
      break;
  }
  displayCurrentGameState();
}

function findIndex(Array, Key, Value) {
  /*
    Returns true, index if an object in the Array contains the Key: Value pair.
  */
  var found = false;
  var index = -1;
  for (var i = 0; i < Array.length; i++) {
      if (Array[i][Key] === Value) {
          found = true;
          index = i;
          break;
      }
  }
  return [found, index];
}

function wrapText(text, x, y, maxWidth, lineHeight) {
  /*
    Writes the text variable to the canvas at the x and y
    coordinates, wrapping it at the maxWidth pixels with 
    lineHeight line spaceing.
  */
  var words = text.split(' ');
  var line = '';
  var testLine = '';
  var testWidth = 0;
  var currentY = y;

  for (var n = 0; n < words.length; n++) {
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

function toTitleCase(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function parseNumberInput(str) {
  str = str.trim();

  // Range format: (x-y)
  if (/^\(\d+\s*-\s*\d+\)$/.test(str)) {
    var range = str.slice(1, -1).split("-");
    var min = parseInt(range[0], 10);
    var max = parseInt(range[1], 10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // List format: (x|y|z)
  if (/^\((\d+\|)+\d+\)$/.test(str)) {
    var options = str.slice(1, -1).split("|");
    var index = Math.floor(Math.random() * options.length);
    return parseInt(options[index], 10);
  }

  // Plain number
  if (/^\d+$/.test(str)) {
    return parseInt(str, 10);
  }

  // Invalid format
  throw new Error("Invalid input: " + str);
}

function replacePlaceholders(str, tar, top, rnd) {
  /*
    Returns a string where the input string (str) is processed to replace
    "[tar]", "[top]", and "[rnd]" with their respective input strings.  
  */
  tar = (typeof tar !== 'undefined') ? tar : 'defaultTarget';
  top = (typeof top !== 'undefined') ? top : 'defaultTop';
  rnd = (typeof rnd !== 'undefined') ? rnd : 'defaultNumber';
  //if you see any of those default values, there's a bug.  Added for safety.
  return str
    .replace(/\[tar\]/g, tar)
    .replace(/\[top\]/g, top)
    .replace(/\[rnd\]/g, rnd);
}

function showStatusText(text) {
  /*
    Displays "text" in the Status Text area.
    This call removes text from previous status lines.
  */
  var jsonObj = {
    "type":"updateTease",
    "part":"text",
    "location":"status",
    "statusText":text};
    
  callAction(jsonObj);
}

function showMainText(text, clearBool) {
  /* 
    Displays "text" in the Main Text area.
    'clearBool' to remove previous Main Text entries.
  */
  clearBool = clearBool || false;
  var jsonObj = {
    "type":"updateTease",
    "part":"text",
    "location":"main",
    "delay":"none",
    "text":{
      "ops":[{
        "insert":text
      },{
        "attributes":{
          "align":"center"
        },
        "insert":"\n"
      }]
    },
    "clear":clearBool};
    
  callAction(jsonObj);
}

function clearMainText() {
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

function showChoiceButtons(buttonObj, varName, noBlocking) {
  /*
    buttonObj = [
      {  //first button
        Name: "Button One"
        Value: "set varName to this Value"
      },{  //second button
        Name: ...
        Value: ...
      }
    varName - string of variable name to use in XToys.
    
    Creates a series of buttons using the above inputs in the main
    area of XToys. Waits for user to press a button, and returns the
    varName's value from XToys.
  */
  var jsonObj = {
    "type":"updateTease",
    "part":"input",
    "inputType":"buttons",
    "buttons":[]
  };
  for (var i = 0; i < buttonObj.length; i ++) {
    jsonObj.buttons[i] = {
      "name":buttonObj[i].Name,
      "action":null,
      "setVariable":true,
      "variable":varName,
      "variableValue":buttonObj[i].Value
    };
  }
  
  callAction(jsonObj, !noBlocking);
  return getVariable(varName);
}

function showSideButtons(buttonObj, varName, clearBool) {
  /*
    buttonObj = [
      {  //first button
        Name: "Button One"
        Value: "set varName to this Value"
      },{  //second button
        Name: ...
        Value: ...
      }
    varName - string of variable name to use in XToys.
    
    Creates a series of side buttons using the above inputs in the main
    area of XToys.
  */
  clearBool = clearBool || false;
  
  var jsonObj = {
    "type":"updateTease",
    "part":"input",
    "inputType":"side-buttons",
    "buttons":[],
    "clearAfter": clearBool
  };
  for (var i = 0; i < buttonObj.length; i ++) {
    jsonObj.buttons[i] = {
      "name":buttonObj[i].Name,
      "action":null,
      "setVariable":true,
      "variable":varName,
      "variableValue":buttonObj[i].Value
    };
  }
  
  callAction(jsonObj);
}

function showTimer(time) {
  var jsonObj = {
    "type":"updateTease",
    "part":"timer",
    "timerType":"normal",
    "seconds":time,
    "stopOnStepChange":false,
    "blockActions":false,
    "allowSkip":true
  };
  
  callAction(jsonObj);
}
/* TODO:
  --Side buttons (Start Timer) currently don't disappear when uneeded.
  --Track Permanent Rules, option to remove them when finished, roll/timer if needed.
  --Create BDSM, BDSM-Sex, and Asphyx decks.
  --Fix Canvas Shit
  --Make things pretty!  (Pictures/graphics/animation)
*/
