//! Task 1
let d = new Date();
function formatUaDate(d) {
  const day = d.getDate().toString().padStart(2, "0");
  const dayOfweek = d.getDay();
  const month = d.getMonth();
  const year = d.getFullYear().toString();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  return `${dayTitle[dayOfweek]}, ${day} ${monthTitle[month]} ${year} року, ${hours}:${minutes}`;
}
const dayTitle = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

const monthTitle = [
  "січеня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];
console.log(formatUaDate(d));

//? Task 2

let now = new Date();
let start = new Date(1970, 0, 1, 0, 0, 0)
let hours = Math.floor((now.getTime() - start.getTime()) / 3600000);
console.log(hours);

//! Task 4

const date = new Date();
console.log(date);

// function date (dateStr) {
//   const [day, month, year] = dateStr.split('.');

//   const date = new Date(year, month - 1, day);

//   return (date.getDay() == 0 || date.getDay() == 6);
// }