// لعبة عجلة الحظ
function spinWheel() {
    const wheel = document.getElementById("wheel");
    let deg = Math.floor(Math.random() * 360) + 720; // توليد زاوية عشوائية
    wheel.style.transition = "transform 2s ease-out"; // تأثير التدوير
    wheel.style.transform = `rotate(${deg}deg)`; // تدوير العجلة

    // تحديد النتيجة بعد التدوير
    setTimeout(() => {
        const result = deg % 360 < 180 ? "تسويها" : "ما تسويها";
        document.getElementById("wheelResult").textContent = `النتيجة: ${result}`;
    }, 2000); // بعد التدوير تظهر النتيجة
}

// عداد النقرات
let counter = 0;
let timeLeft = 10; // الوقت المتبقي
let timerInterval;
let isTimerStarted = false;

function startTimer() {
    if (isTimerStarted) return;
    isTimerStarted = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("clickChallengeResult").textContent = `الوقت انتهى! عدد النقرات: ${counter}`;
            document.getElementById("clickButton").disabled = true; // تعطيل الزر بعد انتهاء الوقت
        }
    }, 1000);
}

function incrementCounter() {
    if (!isTimerStarted) {
        startTimer();
    }
    counter++;
    document.getElementById("counter").textContent = counter;
}

// لعبة الأرقام العشوائية
function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = randomNum;
}
