/*
const screen = document.querySelector(".screen");
const [spanHr, spanMin, spanSec] = screen.children;

//1초마다 시간출력 반복
setInterval(() => {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	spanHr.innerText = hr;
	spanMin.innerText = min;
	spanSec.innerText = sec;
}, 1000);
*/

// 함수로 만들기
const main = document.querySelector("main");
const numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");

setInterval(() => {
	changeTheme();
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();
	if (hr >= 13) {
		am.classList.remove("on");
		pm.classList.add("on");
		//13시가 넘어설때 12를 뺀 값을 다시 hr변수에 재할당
		hr = hr - 12;
	} else {
		pm.classList.remove("on");
		am.classList.add("on");
	}
	return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
	//전달받은 첫번째 인수값이 한자리 숫자면 앞에 "0"붙여 출력 그렇지 않으면 그냥 값 출력
	num = num < 10 ? "0" + num : num;
	//각 span배열에서 두번째 인수로 전달받은 index번째 요소에 위에서 가공한 num값을 출력
	numbers[index].innerText = num;
}

//시간에 따른 테마 변경 함수
function changeTheme() {
	const hr = new Date().getHours();
	if (hr >= 5 && hr < 11) {
		main.className = "";
		main.classList.add("morning");
	}
	if (hr >= 11 && hr < 16) {
		main.className = "";
		main.classList.add("afternoon");
	}
	if (hr >= 16 && hr < 20) {
		main.className = "";
		main.classList.add("evening");
	}
	if (hr >= 20 && hr < 5) {
		main.className = "";
		main.classList.add("night");
	}
}
