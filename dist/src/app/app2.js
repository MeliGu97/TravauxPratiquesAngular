"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const game_1 = require("../game");
let game = new game_1.Game(data_1.MockWords);
function playGame() {
    console.log("Bienvenue dans le jeu du pendu !");
    while (game.getStatus() === game_1.Status.Progress) {
        console.log(`Mot : ${game.getHiddenWord()}`);
        console.log(`Il vous reste : ${game.getTriesLeft()}`);
        const letter = prompt("Entez une lettre: ");
        game.guessLetter(letter);
    }
    if (game.getStatus() === game_1.Status.Winner) {
        console.log("Bravo ! Vous avez gagné!");
    }
    else if (game.getStatus() === game_1.Status.Loser) {
        console.log("Dommage ! Vous avez perdu!");
        console.log(`Le mot était : ${game.getWord()}`);
    }
}
playGame();
