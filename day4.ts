import { input4 } from "./day4Input";

let inputA = input4.split('\n');
let inputB: string[][] = [];
for (let pairs of inputA) {
    inputB.push(pairs.split(','));
}

function deserialize (range: string): number[] {
    let strNums: string[] = range.split('-');

    const nums: number[] = strNums.map((num: string, idx: number) => Number(num as string));

    const list: number[] = [];
    for (let i = nums[0]; i < nums[1]+1; i++) {
        list.push(i);
    }
    // if (list[0] === list[1]) console.log(list)
    return list
}

const finalInp: number[][][] = [];

for (let inpI = 0; inpI < inputB.length; inpI++) {
    finalInp.push([deserialize(inputB[inpI][0]), deserialize(inputB[inpI][1])])
}


let contained = 0;
let inc = false;
function containmentCheck (a: number[], b: number[]) {
    let in_it = 0;

    // console.log('test', a, b);
    for (let numA of a) {
        if (b.includes(numA)) {
            in_it += 1;
        } else {break}
    }
    if (in_it > 0) {
        inc = true;
        return 1
    }
     console.log(a, b)
    return 0
}


for (let inp of finalInp) {
    
    contained += containmentCheck(inp[0], inp[1]);
    if (!inc) contained += containmentCheck(inp[1], inp[0]);
    inc = false;
}

console.log(contained);

