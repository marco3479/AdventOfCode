import input3 from "./day3Input";


// DAY 3
// What is the sum of the priorities of those item types?

const input3A: string[] = input3.split('\n');

const abc = 'abcdefghijklmnopqrstuvwxyz';
const ABC = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(); 


class Rucksacks {
    priority: number = 0;
    
    constructor (batch: string[]) {

        const items1 = batch[0]; 
        const items2 = batch[1]; 
        const items3 = batch[2]; 


        // const comp1Items = items.slice(0, items.length/2);
        // const comp2Items = items.slice(items.length/2, items.length);
    
        let matchedItem: string;

        let Break: boolean = false;
        for (let i1 of items1) {
            for (let i2 of items2) {
                if (i1 === i2) {
                    for (let i3 of items3) {
                        if (i1 === i3) { 
                            matchedItem = i1;
                            Break = true;
                            break
                        };
                    }
                }
                if (Break) break
            }
            if (Break) break
        }

        if (matchedItem! === matchedItem!.toUpperCase()) {
            this.priority = ABC.indexOf(matchedItem) + 27;
        } else if (matchedItem! === matchedItem!.toLowerCase()) {
            this.priority = abc.indexOf(matchedItem) + 1;
        }

    }
}


let count: number = 0;
const newInps: string[][] = [];
let batch: string[] = [];
for (let inp of input3A) {
    count++;
    batch.push(inp);
    if (count === 3) {
        newInps.push(batch);
        batch = [];
        count = 0;
    }

}


let priorities: number = 0;
for (let batch of newInps) {
    priorities += new Rucksacks(batch).priority;
}
// console.log(priorities);

