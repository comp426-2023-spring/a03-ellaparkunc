#!/usr/bin/env node

//to run, say  
//node ./rps-cli.js -r

//import fetch from 'node-fetch';
import minimist from 'minimist';
import {rps} from '../lib/rpsls.js';

//Grab provided args.
const args = minimist(process.argv.slice(2));

let helpText = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

if (args.h || args.help){
    console.log(helpText);
    process.exit(0);
}

let rulesText = `Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`

if (args.r || args.rules){
    console.log(rulesText);
    process.exit(0);
}

let shot = args._[0];
let result = rps(shot);

if (result instanceof Error){
    console.log(rulesText);
    process.exit(0);
}

console.log(JSON.stringify(result));
process.exit(0);