// In this exercise, you’ll refactor some ES5 code into ES2015.
// function filterOutOdds() {
// 	var nums = Array.prototype.slice.call(arguments);
// 	return nums.filter(function (num) {
// 		return num % 2 === 0;
// 	});
// }

const filterOutOddsTwo = (...values) => values.filter((num) => num % 2 === 0);
console.log(filterOutOddsTwo(1, 2, 3, 4, 5, 6, 7, 8, 9));

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...numbers) => Math.min(...numbers);
console.log(findMin(1, 4, 12, -3));
console.log(findMin(1, -1));
console.log(findMin(3, 1));

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => {
	return {
		...obj1,
		...obj2,
	};
};
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => {
	const doubledArray = args.map((elm) => elm * 2);
	const combinedArray = [...arr, ...doubledArray];
	return combinedArray;
};
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
	const randomInteger = Math.trunc(Math.random() * items.length + 1);
	const randomArray = items.slice(randomInteger);
	return randomArray;
};

const nums1 = [5, 7, 9, 22, 5, 66, 2, 0, 68, 55, 33];
console.log(removeRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(removeRandom(...nums1));

/** Return a new array with every item in array1 and array2. */

const extend = (...arr) => [...arr];

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
console.log(extend(...firstArray, ...secondArray));
console.log(extend(...firstArray, ...secondArray, ...[45, 66, 66, 44, 77]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
	return {
		...obj,
		[key]: val,
	};
};

const car = {
	brandName: "Hyundai Sonata",
	color: "Purple",
	year: 2012,
};
console.log(addKeyVal(car, "tyres", 4));

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
	const newObj = {
		...obj,
	};
	delete newObj[key];
	return newObj;
};

const album = {
	"Burna Boy": "Twice as tall",
	wizkid: "Made in Lagos",
	Davido: "A better time",
	Olamide: "UY SCUTI",
	BasketMouth: "Yabasi",
};

console.log(removeKey(album, "Davido"));

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
	return {
		...obj1,
		...obj2,
	};
};

const defenders = {
	2: "Antonio Rudiger",
	15: "Kurt Zouma",
};

const forwards = {
	9: "Romelu Lukaku",
	19: "Mason Mount",
};

console.log(combine(defenders, forwards));

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
	return {
		...obj,
		[key]: val,
	};
};

const artist = {
	name: "2face Idibia",
	album: "Grass 2 Grace",
};

console.log(update(artist, "album", "The Unstoppable"));
