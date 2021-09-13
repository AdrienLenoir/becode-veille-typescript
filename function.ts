const myFunction = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
}

myFunction(10, 20);
myFunction(10, 20, 30);
