var numbers = [1, 2, 3];
var doublenumbers;

// loop method
doublenumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doublenumbers.push(numbers[i] * 2);
}
console.log(doublenumbers);


// forEach method
doublenumbers = [];
doublenumbers = numbers.map(
  (number) => number * 2
);
console.log(doublenumbers);

var cars = [
	{model: 'Buick', price:'cheap'},
	{model: 'BMW', price:'expensive'}
];

var prices = cars.map((car)=>car.price);
console.log(prices);
