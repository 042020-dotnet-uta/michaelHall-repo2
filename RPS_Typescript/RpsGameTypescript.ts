//console.log("Welcome to Typescript!");

function randomNum() : number{
    return Math.floor(Math.random() * 3);
}

function assignChoiceWord(p : Player): Player {
    if (p.choice == 0) {
        p.choiceWord = "Rock";
    }
    else if (p.choice == 1) {
        p.choiceWord = "Paper";
    }
    else {
        p.choiceWord = "Scissors";
    }
    return p;
}

function decideWinner(p1:Player, p2:Player): string {
    
    // check if it is a tie
    if (p1.choiceWord == p2.choiceWord) {
        return `${p1.Name}'s ${p1.choiceWord} ties ${p2.Name}'s ${p2.choiceWord}`;
    }

    // check all p1 choices against p2 choices
    switch(p1.choiceWord) {
        case "Rock":
            switch(p2.choiceWord) {
                case "Scissors":
                    return `${p1.Name}'s ${p1.choiceWord} beats ${p2.Name}'s ${p2.choiceWord}`;
                case "Paper":
                    return `${p2.Name}'s ${p2.choiceWord} beats ${p1.Name}'s ${p1.choiceWord}`;
                default:
                    return `${p2.Name}'s ${p2.choiceWord} is invalid`;
            }
        case "Paper":
            switch(p2.choiceWord) {
                case "Rock":
                    return `${p1.Name}'s ${p1.choiceWord} beats ${p2.Name}'s ${p2.choiceWord}`;
                case "Scissors":
                    return `${p2.Name}'s ${p2.choiceWord} beats ${p1.Name}'s ${p1.choiceWord}`;
                default:
                    return `${p2.Name}'s ${p2.choiceWord} is invalid`;
            }
        case "Scissors":
            switch(p2.choiceWord) {
                case "Paper":
                    return `${p1.Name}'s ${p1.choiceWord} beats ${p2.Name}'s ${p2.choiceWord}`;
                case "Rock":
                    return `${p2.Name}'s ${p2.choiceWord} beats ${p1.Name}'s ${p1.choiceWord}`;
                default:
                    return `${p2.Name}'s ${p2.choiceWord} is invalid`;
            }
        default:
            return `${p1.Name}'s ${p1.choiceWord} is invalid`;
    }
}

// create a player interface for each player
interface Player {
    Name: string;
    choice: number;
    choiceWord: string;
}

let p1 : Player = {
    Name: "Slippin Jimmy",
    choice: 0,
    choiceWord: "null"
}

let p2 : Player = {
    Name: "Gus Fring",
    choice: 0,
    choiceWord: "null"
}

// get a random number between 0, 1, or 2
p1.choice = randomNum();
p2.choice = randomNum();

// assign the correct word for the random number
// 0 = rock
// 1 = paper
// 2 = scissors
p1 = assignChoiceWord(p1);
p2 = assignChoiceWord(p2);

// prints out the winner
let champion: string = decideWinner(p1, p2);
console.log(champion);