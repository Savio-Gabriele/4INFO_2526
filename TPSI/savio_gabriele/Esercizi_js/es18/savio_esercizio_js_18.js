function Maggiore(val1, val2, val3) {
  return val1 > val2 ? (val1 > val3 ? val1 : val3) : val2 > val3 ? val2 : val3;

}

function main() {
  console.log(Maggiore(5, 10, 7));
  console.log(Maggiore(0, 15, 12));
  console.log(Maggiore(4, -3, 9));
}

main();

