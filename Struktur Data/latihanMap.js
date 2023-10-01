const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
  ]);
  
  const priceInJPY = 5000;


  const currentJPY =currency.get("JPY");
  const priceInIDR = priceInJPY * currentJPY;

  console.log(priceInIDR);