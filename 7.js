const sum = (...args) => {
  const  [x, y, z] = args
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
