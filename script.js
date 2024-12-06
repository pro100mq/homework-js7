// 1
const numbers = [1, 14, 12];
console.log(numbers)
numbers[1] = 10
console.log(numbers)

// 2
const family = ["dad", "mom", "brother"];
console.log(family);
family.push("sister");
console.log(family);

// 3

const numberrs = [13, 26, 52];
let amount = 0;
for (let i = 0; i < numberrs.length; i++){
    amount += numberrs[i]
}
console.log(amount)

// 4
const nor = [1, 3, 5, 7, 9]
for (let i = 0; i < nor.length; i++) {
    console.log(nor[i])
}

// 5

const fruits = ["banana", "qiwi", "pineapple", "pear", "mango"]
for (let i = 0; i < fruits.length; i++){
    if(fruits[i].length > 5){
        console.log(fruits[i])
    }
}
// 6

const maxNum = [5, 12, 1, 0, 39, 29, 2, 102, 642, 17];
let maxx = maxNum[0]
for (let i = 0; i < maxNum.length; i++){
    if (maxNum[i + 1] > maxx){
        maxx = maxNum[i + 1]
    }
}
console.log(maxx)

// 7
const doubles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < doubles.length; i++){
    if (i % 2 !== 0){
        console.log(doubles[i])
    }
}