

var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.error(`The Given Array is`);
console.log(arraySeasonalFruits);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 01 ~~~~~~~~~~~~~~~~~~~~`);
const valueAtFirstIndex = arraySeasonalFruits[0];
console.error(`First Element of the Given Array is `);
console.log(valueAtFirstIndex);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 02 ~~~~~~~~~~~~~~~~~~~~`);
const countAtLastIndex = arraySeasonalFruits.length-1;
let valueAtLastIndex = arraySeasonalFruits[countAtLastIndex]
console.error(`Last Element of the Given Array is `);
console.log(valueAtLastIndex);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 03 ~~~~~~~~~~~~~~~~~~~~`);
const addElement = arraySeasonalFruits.unshift("Papaya");
console.error(`Added Element Papaya Before Banana`);
console.log(arraySeasonalFruits);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 04 ~~~~~~~~~~~~~~~~~~~~`);
const removeMango = arraySeasonalFruits.splice(4,1)
console.error(`Name of fruit which is Removed `);
console.log(removeMango);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 05 ~~~~~~~~~~~~~~~~~~~~`);
const addPineapple = arraySeasonalFruits.push("Pineapple");
console.error(`"Pineapple" is Added At the Last Position`);
console.log(arraySeasonalFruits);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 06 ~~~~~~~~~~~~~~~~~~~~`);
const insertDragonFruit = arraySeasonalFruits.splice(4,0,"Dragon Fruit")
console.error(`Inserted "Dragon Fruit" Before "Water Melon" `);
console.log(arraySeasonalFruits);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 07 ~~~~~~~~~~~~~~~~~~~~`);
const Replacement = arraySeasonalFruits.splice(2,1,"Kiwi")
console.error(`Replace an Orange Fruit to Kiwi Fruit`);
console.log(arraySeasonalFruits);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 08 ~~~~~~~~~~~~~~~~~~~~`);
const logElement = arraySeasonalFruits.slice(1,4)
console.error(`Elements Are log From Index 1 to 4`);
console.log(logElement);

console.log(`~~~~~~~~~~~~~~~~~~~~ Step 09 ~~~~~~~~~~~~~~~~~~~~`);
const lastThreeElements = arraySeasonalFruits.slice(4);
console.error(`Last Three Elements Are`);
console.log(lastThreeElements);