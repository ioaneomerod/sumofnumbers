function sumFor(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function sumWhile(numbers) {
  let index = 0;
  let sum = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }
  return sum;
}

function sumRecursion(numbers) {
  if (numbers.length !== 0) {
    return numbers[0] + sumRecursion(_.rest(numbers));
  }
  return 0;
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) {
    return memo + num;
  }, 0);
}

const numbers = [5, 4, 3, 5];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
