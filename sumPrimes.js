function sumPrimes(num) {

  let sumOfPrimes = 0;

  function checkIfPrime(i) {
    for (let j = 2; j < i; j++)
    {
      if (i % j === 0)
      {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 2; i <= num; i++)
  {
    if ( checkIfPrime(i))
    {
      sumOfPrimes += i;
      console.log(sumOfPrimes);
    }
  }
    console.log("Total is:" + sumOfPrimes);
    return sumOfPrimes;
  }
  
  sumPrimes(10); //17
  sumPrimes(977) // 73156
  
  