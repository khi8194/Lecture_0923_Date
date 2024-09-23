//미션1 - new Date()를 활용해서 시간, 분, 초를 각각 span 안에 출력
//미션2 - 현재 시간이 13시를 넘기면 em 안쪽의 'am'을 'pm'으로 출력

// const now = new Date();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// const hour = document.querySelectorAll("span")[0];
// const min = document.querySelectorAll("span")[1];
// const sec = document.querySelectorAll("span")[2];

// hour.textContent = String(hours);
// min.textContent = String(minutes);
// sec.textContent = String(seconds);

const title = document.querySelector("h1");
// const childEl = title.children;
// console.log(childEl);
const [em, spanHr, spanMin, spanSec] = title.children;

const now = new Date();
const hr = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
let apm = hr < 13 ? "am" : "pm";

em.innerText = apm;
spanHr.innerText = hr;
spanMin.innerText = min;
spanSec.innerText = sec;
