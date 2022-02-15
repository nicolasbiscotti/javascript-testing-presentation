export default function divide(x, y) {
  if (y === 0) {
    const err = new Error("can't divide by zero");
    err.code = 123456;
    throw err;
  }
  return x / y;
}
