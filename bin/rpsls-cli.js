#!/usr/bin/env node-rpsls


import minimist from 'minimist';
import {rpsls} from '../lib/rpsls.js';

//Grab provided args.
const args = minimist(process.argv.slice(2));

let helpText = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

if (args.h || args.help){
    console.log(helpText);
    process.exit(0);
}

let rulesText = `Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`

if (args.r || args.rules){
    console.log(rulesText);
    process.exit(0);
}

let shot = args._[0];
let result = rpsls(shot);

if (result instanceof Error){
    console.log(rulesText);
    process.exit(0);
}

console.log(JSON.stringify(result));
process.exit(0);