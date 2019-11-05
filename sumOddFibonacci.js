function sumFibs(num) {
  
  let previousNumber = 0;
  let currentNumber = 1;
  let oddFibonacci = 0;

  while (currentNumber <= num)
  {
    if (currentNumber % 2 !== 0)
    {
      oddFibonacci += currentNumber;
      // console.log("Total is: " + oddFibonacci);
    }
  currentNumber += previousNumber;
  previousNumber = currentNumber - previousNumber;
  // console.log("Total is: " + currentNumber);
  }
  console.log("Total is: " + oddFibonacci);
  return oddFibonacci;
}

sumFibs(4); // 5
sumFibs(1000); // 
sumFibs(1); // return a number
sumFibs(4000000); // 4613732
sumFibs(75024); // 60696
sumFibs(75025); // 135721
