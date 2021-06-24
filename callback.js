// // so the first argument is a callback function
// // callback function is a function we provide to a function as an argument
// // intention of having to call it later
// // every time we use callback it's not asychronours.

// setTimeout(() => {
//   console.log("two seconds are up");
// }, 2000);

// // let see an synchronus callback function

// const names = ["chamara", "gagani", "ab"];

// const shortNames = names.filter((name) => name.length < 4);

// // let's create a callback function

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longtitude: 0,
//       altitude: 0,
//     };

//     callback(data);
//   }, 200);
// };

// geocode("philedophia", (data) => {
//   console.log(data);
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 200);
};

add(1, 2, (sum) => {
  console.log(sum);
});
