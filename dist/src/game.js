"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Status = void 0;
// Enum Status
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status || (exports.Status = Status = {}));
class Game {
    constructor(words) {
        this.words = words;
        this.currentWordIndex = 0;
        this.hiddenWord = words[this.currentWordIndex].hide;
        this.triesLeft = 7;
    }
    getStatus() {
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            return Status.Winner;
        }
        else if (this.triesLeft <= 0) {
            return Status.Loser;
        }
        else {
            return Status.Progress;
        }
    }
    getHiddenWord() {
        return this.hiddenWord;
    }
    getTriesLeft() {
        return this.triesLeft;
    }
    getWord() {
        return this.words[this.currentWordIndex].word;
    }
    guessLetter(letter) {
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            return; // Game is already won
        }
        if (this.hiddenWord.includes(letter)) {
            console.log("Vous avez déjà trouvé cette lettre.");
            return;
        }
        if (this.words[this.currentWordIndex].word.includes(letter)) {
            let newHiddenWord = "";
            for (let i = 0; i < this.words[this.currentWordIndex].word.length; i++) {
                if (this.words[this.currentWordIndex].word[i] === letter) {
                    newHiddenWord += letter;
                }
                else {
                    newHiddenWord += this.hiddenWord[i];
                }
            }
            this.hiddenWord = newHiddenWord;
        }
        else {
            this.triesLeft--;
            console.log(`Non pas celle-ci : ${this.triesLeft}`);
        }
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            console.log(`Mot : ${this.words[this.currentWordIndex].word}`);
            console.log("Bravo! Vous avez deviné !");
            this.currentWordIndex++;
            if (this.currentWordIndex < this.words.length) {
                console.log("Prochain mot : " + this.words[this.currentWordIndex].hide);
                this.hiddenWord = this.words[this.currentWordIndex].hide;
            }
        }
    }
}
exports.Game = Game;
