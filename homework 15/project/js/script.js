///////////////////////////////////////////////////////////////////////////
///////////////////////// ready 2 task ////////////////////////////////////

// let a = prompt ('Enter your palidrom', 'шалаш');
// let b = a;
// function palindrom () {
//   return b.split('').reverse().join('');
// }
// b = palindrom();
// if (a === b) {
//     alert ('Your string is Palindrom');
// }
// else {
//     alert ('This is not a palindrom');
// }

////////////////////////////////////////////////////////////////////////////
//////////////////////// ready 3 task///////////////////////////////////////

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// alert(max(5, 10));
// alert(min(5, 10));

// // function max(a, b) {
// //   return a > b ? a : b;
// // }

// // function min(a, b) {
// //   return a < b ? a : b;
// // }

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////// ready 1 task ////////////////////////////////

let data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let search = prompt("Enter your Lastname");
search = search.toLowerCase();
search = search[0].toUpperCase() + search.substring(1);

for (i = 0; i < data.length; i++) {
  if (search === data[i].lastName) {
    var user = data[i];
  }
}

if (user != undefined) {
  alert(
    "user name: " +
      user.firstName +
      " " +
      user.lastName +
      "\n" +
      "user age: " +
      user.age
  );
} else {
  alert("No results found for your request");
}
