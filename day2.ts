
import input2 from "./day2Input";


// DAY 2
// What would your total score be if everything goes exactly according to your strategy guide?

type OppChoice = 'A'|'B'|'C';
type YourChoice = 'ROCK'|'PAPER'|'SCISSORS';
type ExpResult = 'X'|'Y'|'Z';

class Match {
    expResult: ExpResult;
    yourChoice: YourChoice;
    oppChoice: OppChoice;
    score: number = 0;

    constructor (oppChoice: OppChoice, expResult: ExpResult) {
        this.expResult = expResult;
        this.oppChoice = oppChoice;

        this.yourChoice = this.choose();
        this.shapeScore();

    }
    
    choose() {
        switch (this.oppChoice) {
            case 'A':   // ROCK
                switch (this.expResult) {
                    case 'X':   // LOSE
                        this.yourChoice = 'SCISSORS';
                        this.score += 0;
                        break
                    case 'Y':   // DRAW
                        this.yourChoice = 'ROCK';
                        this.score += 3;
                        break
                    case 'Z':   // WIN
                        this.yourChoice = 'PAPER';
                        this.score += 6;
                }
                break
            case 'B': // PAPER
                switch (this.expResult) {
                    case 'X': // LOSE
                        this.yourChoice = 'ROCK';
                        this.score += 0;
                        break
                    case 'Y': // DRAW
                        this.yourChoice = 'PAPER';
                        this.score += 3;
                        break
                    case 'Z': // WIN
                        this.yourChoice = 'SCISSORS';
                        this.score += 6;
                }
                break
            case 'C': // SCISSORS
                switch (this.expResult) {
                    case 'X': // LOSE
                        this.yourChoice = 'PAPER';
                        this.score += 0;
                        break
                    case 'Y': // DRAW
                        this.yourChoice = 'SCISSORS';
                        this.score += 3;
                        break
                    case 'Z': // WIN
                        this.yourChoice = 'ROCK'
                        this.score += 6;
                }
        }
        return this.yourChoice
    }

    shapeScore() {
        switch(this.yourChoice) {
            case 'ROCK': // ROCK
                this.score += 1;
                break
            case 'PAPER': // PAPER
                this.score += 2;
                break
            case 'SCISSORS': // SCISSORS
                this.score += 3;
        }
    }
}

const input2A: string[] = input2.split('\n');

const matches: Match[] = [];
for (let matchInput of input2A) {
    matches.push(new Match(matchInput[0] as OppChoice, matchInput[2] as ExpResult))
}

let totalScore: number = 0;
matches.forEach((m: Match) => totalScore += m.score);

// console.log(totalScore);
