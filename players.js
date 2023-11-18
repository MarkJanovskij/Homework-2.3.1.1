const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

//вывод значения

let scorePoints = []
for( let i=0; i<players.length; i++){
    scorePoints.push(players[i].scorePoints);
}
console.log(scorePoints)
const maxPoints = Math.max(...scorePoints);
console.log(maxPoints)
// Homework 2.3.1.1
const players2 = [
    {
        "id": 1,
        "name": "Ivan",
        "scorePoints": 4500
    },
    {
        "id": 2,
        "name": "Petr",
        "scorePoints": 3600
    },
    {
        "id": 3,
        "name": "Vadim",
        "scorePoints": 3433
    },
    {
        "id": 4,
        "name": "Olga",
        "scorePoints": 2356
    }
];

let scorePoints2 = [];

for (let player in players2) {
    scorePoints2.push(players2[player].scorePoints);
}

console.log(scorePoints2); // Output: [4500, 3600, 3433, 2356]


let obj = { a: 1, b: 2,c: 3}

for(elementKey in obj) {
console.log(obj[elementKey])
}

//1
//2
//3

//вывод ключа

//let obj = { a: 1, b: 2, c: 3 }

for(elementKey in obj) {
console.log(elementKey)
}

//a

//b

//c