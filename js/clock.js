const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minuits = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minuits}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 실시간으로 보이게 하는 부분 (1초마다 실행)