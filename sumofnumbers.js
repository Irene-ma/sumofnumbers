const testNums = [1, 2, 3, 4];

function sumFor(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(`sumFor total: ${sumFor(testNums)}`);

function sumWhile(numbers) {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}

console.log(`sumWhile total: ${sumWhile(testNums)}`);

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(`sumRecursion total: ${sumRecursion(testNums)}`);

function sumTheSimpleWay(numbers) {
  let sum = 0;
  sum = _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
  return sum;
}

console.log(`sumTheSimpleWay total: ${sumTheSimpleWay(testNums)}`);
