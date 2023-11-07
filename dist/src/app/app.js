"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const game_1 = require("../game");
const game = new game_1.Game(data_1.MockWords);
console.log("Bienvenue au jeu du pendu !");
console.log("Mot à deviner : " + game.currentWord.hide);
// Simulez les devinettes, par exemple :
game.makeGuess("c");
game.makeGuess("o");
game.makeGuess("r");
game.makeGuess("n");
game.makeGuess("e");
game.makeGuess("d");
game.makeGuess("r");
game.makeGuess("u");
game.makeGuess("e");
// Pour terminer, vous pouvez vérifier l'état du jeu (gagné, perdu, en cours) en utilisant game.status.
