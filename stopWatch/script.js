var timerDisplay = document.querySelector('.timer');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');

var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00:00';
    elapsedTime = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateTimer() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    var formattedTime = formatTime(elapsedTime);
    timerDisplay.textContent = formattedTime;
}

function formatTime(time) {
    var milliseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / (1000 * 60)) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    var formattedMilliseconds = milliseconds.toString().padStart(2, '0');
    var formattedSeconds = seconds.toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    var formattedHours = hours.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);