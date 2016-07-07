// Sum of arguments

var sum = 0;

for (i = 2; i < process.argv.length; i++ ) {   // first argument starts at index = 2
  sum += Number(process.argv[i]);
}
console.log(sum);
