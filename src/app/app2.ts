import { MockWords } from "../data";
import { Game, Status } from "../game";

let game = new Game(MockWords);

function playGame() {
    console.log("Bienvenue dans le jeu du pendu !");

    while (game.getStatus() === Status.Progress) {
        console.log(`Mot : ${game.getHiddenWord()}`);
        console.log(`Il vous reste : ${game.getTriesLeft()}`);
        const letter = prompt("Entez une lettre: ");
        game.guessLetter(letter);
    }

    if (game.getStatus() === Status.Winner) {
        console.log("Bravo ! Vous avez gagné!");
    } else if (game.getStatus() === Status.Loser) {
        console.log("Dommage ! Vous avez perdu!");
        console.log(`Le mot était : ${game.getWord()}`);
    }
}

playGame();
