const fibo = (number) => {
  let a = 0;
  let b = 1;
  let c;
  let s = 1;

  console.log(a, b);

  for (i = 3; i <= number; i++) {
    c = a + b;
    console.log(c);
    s = s + c;
    a = b;
    b = c;
  }
};

fibo(50);
