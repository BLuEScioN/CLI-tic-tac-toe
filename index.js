#!/usr/bin/env node

'use strict';

var program = require('commander');

program
  .version('0.0.1')
  .option('-o, --option','option description')
  .option('-m, --more','we can have as many options as we want')
  .option('-i, --input [optional]','optional user input')
  .option('-I, --another-input <required>','required user input')
  .parse(process.argv); // end with parse to parse through the input

var player1 = null;
var player2 = null;
var forfeit = false;
// var bigCounter = 1;
var counter = 0;
var currentPlayer = null;
var currentMove = null;
// var goodMove = false;
var winner = false;
var noWinner = false;
var rowWinner = false;
var colWinner = false;
var diagWinner = false;
var repeatPlay = false;
var playAgain = null;

// Game board stored as nested arrays
var gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

var currentMove = [];
var move = [];

var blankBoard = function() {
    console.log("         1   2   3 ");
    console.log("      1    |   |   ");
    console.log("        -----------");
    console.log("      2    |   |   ");
    console.log("        -----------");
    console.log("      3    |   |   ");
    console.log();
    console.log("(@)=======(===(()=================================>");
    console.log();
};
