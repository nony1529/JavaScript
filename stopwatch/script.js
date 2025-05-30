let startTime, elapsedTime = 0, timerInterval, running = false;
  const display = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  
function formatTime(ms) {
  let hrs = Math.floor(ms / 3600000);
  let mins = Math.floor((ms % 3600000) / 60000);
  let secs = Math.floor((ms % 60000) / 1000);
  let mils = Math.floor(ms % 1000);
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${mils.toString().padStart(3, '0')}`;
  }
  
function updateTime() {
  elapsedTime = Date.now() - startTime;
  display.textContent = formatTime(elapsedTime);
}
  
function startStop() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
    startBtn.textContent = "Resume";
  } 
  else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    running = true;
    startBtn.textContent = "Pause";
  }
}
  
function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
  startBtn.textContent = "Start";
  document.getElementById('laps').innerHTML = "";
}
  
function lap() {
  if (running) {
    const lapTime = document.createElement('div');
    lapTime.textContent = Lap `${document.getElementById('laps').childElementCount + 1}: ${formatTime(elapsedTime)}`;
    document.getElementById('laps').appendChild(lapTime);
  }
}