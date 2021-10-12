// 1
for (i=1; i<=7; i++){
    console.log(i);
};

// 2
for (i=5; i<=25; i+=4){
    console.log(i);
};

// 3a 
const wizards = [
    "Harry Potter",
    "Hermonie Granger", 
    "Ron Weasley"
];

// 3b
for (mainCharacters of wizards){
    console.log(mainCharacters);
};

// 4a 
let harryPotterMovies = 0; 

// 4b 
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

// Bonus 

// 5a 
const hogwartsHouses = [
    "Griffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
]

// 5b
for (category of hogwartsHouses){
    for (char of hogwartsHouses[0]){
        console.log(char);
    }
    for (char of hogwartsHouses[1]){
        console.log(char);
    }
    for (char of hogwartsHouses[2]){
        console.log(char);
    }
    for (char of hogwartsHouses[3]){
        console.log(char);
    }
};
// Also this works (and is less code)
/*
for (houses of hogwartsHouses){
    for (letters of houses){
        console.log(letters);
    }
}
*/


// 6a 
const quote = [
    "Yer", 
    "A",
    "Wizard",
    "Harry"
];

// 6b 
let oneLine = '';

while (quote != oneLine){
    console.log(quote.join(' '));
    break;
}
