import { MockWords, Word } from "./data";

// Enum Status
export enum Status {
    Winner,
    Loser,
    Progress,
}

export class Game {
    private words: Word[];
    private currentWordIndex: number;
    private hiddenWord: string;
    private triesLeft: number;

    constructor(words: Word[]) {
        this.words = words;
        this.currentWordIndex = 0;
        this.hiddenWord = words[this.currentWordIndex].hide;
        this.triesLeft = 7;
    }

    getStatus(): Status {
        if (this.hiddenWord === this.words[this.currentWordIndex].word) {
            return Status.Winner;
        } else if (this.triesLeft <= 0) {
            return Status.Loser;
        } else {
            return Status.Progress;
        }
    }

    getHiddenWord(): string {
        return this.hiddenWord;
    }

    getTriesLeft(): number {
        return this.triesLeft;
    }

    getWord(): string {
        return this.words[this.currentWordIndex].word;
    }

    guessLetter(letter: string): void {
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
                } else {
                    newHiddenWord += this.hiddenWord[i];
                }
            }
            this.hiddenWord = newHiddenWord;
        } else {
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
