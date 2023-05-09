#!/usr/bin/env node-rps

//to run, say  
//node ./rps-cli.js -r

//this is a file that runs when we link/install package & run node-rps

//import fetch from 'node-fetch';
import minimist from 'minimist';
import {rps} from '../lib/rpsls.js';

//Grab provided args.
const args = minimist(process.argv.slice(2));

console.log(args)
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

console.log(args._[0])
let shot = args._[0]

/*
if (!args.h || !args.help || !args.r || !args.rules ){
  console.log(`please provide an argument`);
  console.log(`{"player":"rock"}`)
  process.exit(0);
}*/

console.log(JSON.stringify(rps(shot)))