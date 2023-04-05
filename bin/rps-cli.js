#!/usr/bin/env node-rps

//to run, say  
//node ./rps-cli.js -r

//this is a file that runs when we link/install package & run node-rps

//import fetch from 'node-fetch';
import minimist from 'minimist';
import {rps} from '../lib/rpsls.js';

console.log(rps());

//hello

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

//const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&daily=precipitation_hours&current_weather=true&timezone=' + timezone);

// Get the data from the request

//const data = await response.json();

//if no arguments,
if (!args.h || !args.help || !args.r || !args.rules ){
  console.log(`please provide an argument`);
  console.log(`{"player":"rock"}`)
  process.exit(0);
}


console.log(`Hello World`);
process.exit(0);

//console.log(data);
