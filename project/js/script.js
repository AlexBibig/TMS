// const p = document.querySelectorAll('div p');
// console.log(p);

// const p = document.querySelector('p');
// p.innerHTML = '<span>Hi</span>';

const table = document.querySelector('table');
const trArr = table.rows;

console.log(table);
console.log(trArr);

for (let i = 0; i < trArr.length; i++) {
  console.log(trArr[i]);
  let tdArr = trArr[i].cells;
  console.log(tdArr[i]);
  tdArr[trArr.length - 1 - i].innerHTML = '+';
}
