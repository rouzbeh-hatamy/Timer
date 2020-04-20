/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
// btns
const stopwatchbtn = document.getElementById('stopWatch');
const timerbtn = document.getElementById('timer');
const changebtn = document.getElementById('togglebtn');
const startbtn = document.getElementById('start');
const backbtn = document.getElementById('back');
const stopbtn = document.getElementById('stop');
const restartbtn = document.getElementById('restart');
const lapbtn = document.getElementById('lap');

// outputs
function inner(final) {
  document.getElementById('datetime').innerHTML = final;
}

// time
let i = false;
let inter;

// add zero
function addZero(int) {
  if (int < 10) {
    int = `0${int}`;
  }
  return int;
}

function myTimer() {
  let dt;
  if (i === true) {
    dt = new Date().toLocaleTimeString('en-US', {
      i,
    });
    return inner(dt);
  }
  dt = new Date();
  const hours = addZero(dt.getHours());
  const minutes = addZero(dt.getMinutes());
  const secs = addZero(dt.getSeconds());
  const finalTime = `${hours}:${minutes}:${secs}`;
  return inner(finalTime);
}

// on click to change 12 to 24

function startinter() {
  myTimer(i);
  inter = setInterval(myTimer, 1000);
}

function stopinter() {
  clearInterval(inter);
}

function toggle24h() {
  i = !i;
  stopinter();
  startinter();
}

// / stopWatch start
let t1;
let t2;
let t4;

function stratTime() {
  t1 = Date.now();
}

function nextTime() {
  t2 = Date.now();
}

function stopw(ms) {
  nextTime();
  ms = t2 - t1;
  let seconds = ms / 1000;
  const hours = addZero(parseInt(seconds / 3600));
  seconds %= 3600;
  const minutes = addZero(parseInt(seconds / 60));
  const secs = Number(seconds % 60);
  seconds = addZero(secs.toFixed(3));
  const final = `${hours}:${minutes}:${seconds}`;
  inner(final);
  return final;
}

function startStopWatch() {
  stratTime();
  t4 = setInterval(stopw, 90);
}

// stopwatch
function stopWatch() {
  changebtn.style.display = 'none';
  timerbtn.style.display = 'none';
  stopwatchbtn.style.display = 'none';
  backbtn.style.display = 'flex';
  startbtn.style.display = 'flex';
  stopinter();
  const zero = '00:00:00.000';
  return inner(zero);
}

// start
function startbtnf() {
  backbtn.style.display = 'none';
  startbtn.style.display = 'none';
  stopbtn.style.display = 'flex';
  restartbtn.style.display = 'flex';
  lapbtn.style.display = 'flex';
  startStopWatch();
}

// back
function back() {
  changebtn.style.display = 'flex';
  timerbtn.style.display = 'flex';
  stopwatchbtn.style.display = 'flex';
  backbtn.style.display = 'none';
  startbtn.style.display = 'none';
  startinter();
}

// stop
function stop() {
  stopbtn.style.display = 'none';
  restartbtn.style.display = 'none';
  lapbtn.style.display = 'none';
  backbtn.style.display = 'flex';
  startbtn.style.display = 'flex';
  clearInterval(t4);
}

// restart
function restart() {
  clearInterval(t4);
  startStopWatch();
}
// lap
let lapIndex = 1;
function lap() {
  const lapsDiv = document.querySelector('.laps');
  let lapText = '';
  let lastLap;
  let lastLap2;
  // eslint-disable-next-line default-case
  switch (lapIndex) {
    case 1:
      lapText = `<di id="lap1">${stopw()}</di>`;
      lapsDiv.innerHTML += lapText;
      break;
    case 2:
      lastLap = lapsDiv.querySelector('#lap1');
      lastLap.id = 'lap2';
      lapText = `<di id="lap1">${stopw()}</di>`;
      lastLap.insertAdjacentHTML('beforebegin', lapText);
      break;
    case 3:
      lastLap = lapsDiv.querySelector('#lap1');
      lastLap2 = lapsDiv.querySelector('#lap2');
      lastLap2.id = 'lap3';
      lastLap.id = 'lap2';
      lapText = `<di id="lap1">${stopw()}</di>`;
      lastLap.insertAdjacentHTML('beforebegin', lapText);
      break;
    default:
      lastLap = lapsDiv.querySelector('#lap1');
      lastLap2 = lapsDiv.querySelector('#lap2');
      lastLap2.id = 'lap3';
      lastLap.id = 'lap2';
      lapText = `<di id="lap1">${stopw()}</di>`;
      lastLap.insertAdjacentHTML('beforebegin', lapText);
  }
  lapIndex++;
}
