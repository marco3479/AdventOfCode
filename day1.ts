import input from "./day1Input";
// DAY 1
// How many calories is the elf carrying that is carrying the most calories?

class Item {
    calorie: number;
    constructor (calorie: number) {
        this.calorie = calorie;
    }
}


class Elf {
    items: Item[] = [];
    totalCal: number = 0; //totalCaloriesCarrying;

    constructor (items: Item[]) {
        this.items = items;
        this.addCals();
    }

    addCals () {
        let cals: number = 0;
        for (let item of this.items) {
            cals += item.calorie;
        }
        this.totalCal = cals;
    }

}

// format input
const inputA: string[] = input.split('\n');


// instantiate elves and their items

const elves: Elf[] = [];
let items: Item[] = [];

function addElf() {
    elves.push(new Elf(items));
    items = [];
}

for (let strI = 0; strI < inputA.length; strI++) {
    if (inputA[strI] !== '') {
        items.push(new Item(parseInt(inputA[strI])));
    } else {
        addElf();
    }
}
// makes sure the last elf is added
addElf();


// sort elves by totalCal
elves.sort((a: Elf, b: Elf) => {
    if (a.totalCal < b.totalCal) return -1;
    else if (a.totalCal > b.totalCal) return 1;
    return 0;
})

 
// console.log('calories the elf that carries the most amount of calories: ' + elves[elves.length-1].totalCal);

let totalCalOfTop3: number = 0;
for (let i of [1, 2, 3]) {
    totalCalOfTop3 += elves[elves.length-i].totalCal;
}

// console.log(totalCalOfTop3);
