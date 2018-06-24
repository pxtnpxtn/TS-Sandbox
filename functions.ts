const getSum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(getSum(1, 4));

const getName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

console.log(getName("Sam", "Fisher"));

const myVoid = (): void => {
  return;
};
