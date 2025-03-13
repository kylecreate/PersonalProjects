"use strict";

// Change text here if wanting something different
let inverted = false;
const character = "!";
const count = 10;
const rows = [];
// DON'T REMOVE ANYTHING BELOW THIS

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = ""

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);