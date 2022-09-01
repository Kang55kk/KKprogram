// function f(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   return f(n - 1) + f(n - 2);
// }

// onmessage = function (event) {
//   // console.log(event.data);
//   postMessage(f(event.data));
// };

var sum = 0;

function f(n) {
  sum = sum + n
  for (let i = 0; i < n; i++) {
    sum = sum + n
    for (let i = 0; i < n; i++) {
      sum = sum + n
      for (let i = 0; i < n; i++) {
        sum = sum + n
      }
    }
  }
  return sum
}

onmessage = function (event) {
  console.log(event.data,"====",typeof(event.data));
//event.data即你postMessage()里面传过来的参数

  postMessage(f(event.data))
}