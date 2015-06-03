const max = 20;
let FizzBuzz = {
  [Symbol.iterator]() {
    let n = 0;
    return {
      next() {
        n += 1;
        if (n > max) return { done: true };
        if (n % 3 === 0 && n % 5 === 0) return { done:false, value: 'FizzBuzz'};
        if (n % 3 === 0) return { done:false, value: 'Fizz' };
        if (n % 5 ===0) return { done:false, value: 'Buzz' };
        return { done:false, value: n };
      }
    }
  }
};
for (let n of FizzBuzz) {
  console.log(n);
}