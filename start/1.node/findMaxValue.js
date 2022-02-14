export default function findMaxValue({ values }) {
  let max = -Infinity;

  for (const value of values) {
    if (value > max) {
      max = value;
    }
  }

  return max;
}
