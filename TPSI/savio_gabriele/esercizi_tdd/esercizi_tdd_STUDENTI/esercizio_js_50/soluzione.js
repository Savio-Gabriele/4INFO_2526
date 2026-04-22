const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const order = (l) => {
  return [
    ...l.filter((num) => num === 1 || isPrime(num)),
    ...l.filter((num) => num !== 1 && !isPrime(num)),
  ];
};
