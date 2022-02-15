export default function subtract(x, y, cb) {
  let answer = x - y;
  if (answer < 0) {
    const err = new Error("result is negative");
    err.code = 12345;
    cb(err, null);
  }
  cb(null, answer);
}
