function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours() % 12;

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = hour * 30 + minute * 0.5;

    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    const digital = document.getElementById("digitalClock");

    let rawHour = now.getHours();  
    let hh = rawHour % 12 || 12;
    let mm = now.getMinutes().toString().padStart(2, "0");
    let ss = now.getSeconds().toString().padStart(2, "0");
    let period = rawHour >= 12 ? "PM" : "AM";

    digital.innerText = `${hh}:${mm}:${ss} ${period}`;
}

setInterval(updateClock, 1000);
updateClock();
