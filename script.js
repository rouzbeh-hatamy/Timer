//btns
let stopwatchbtn = document.getElementById("stopWatch")
let timerbtn = document.getElementById("timer")
let changebtn = document.getElementById("togglebtn")
let startbtn = document.getElementById("start")
let backbtn = document.getElementById("back")
let stopbtn = document.getElementById("stop")
let restartbtn = document.getElementById("restart")
let lapbtn = document.getElementById("lap")


//outputs
function inner(final) {
    document.getElementById("datetime").innerHTML = final

}



//time
let i = false;
let inter;

function myTimer() {
    if (i == true) {
        var dt = new Date().toLocaleTimeString('en-US', {
            i
        });
        return inner(dt)
    } else {
        var dt = new Date();
        let hours = addZero(dt.getHours());
        let minutes = addZero(dt.getMinutes());
        let secs = addZero(dt.getSeconds());
        var finalTime = hours + ":" + minutes + ":" + secs;
        return inner(finalTime)
    }

}



//add zero
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



//on click to change 12 to 24

function startinter() {
    myTimer(i);
    inter = setInterval(myTimer, 1000)
}

function stopinter() {
    clearInterval(inter)
}

function toggle24h() {
    i = !i
    stopinter();
    startinter()
}


/// stopWatch start
let t1, t2, t4;

function stratTime() {
    t1 = Date.now()
}

function nextTime() {
    t2 = Date.now()
}

function stopw(ms) {
    nextTime()
    ms = t2 - t1
    var seconds = ms / 1000;
    var hours = addZero(parseInt(seconds / 3600));
    seconds = seconds % 3600;
    var minutes = addZero(parseInt(seconds / 60));
    secs = Number(seconds % 60)
    seconds = addZero(secs.toFixed(3));
    final = hours + ":" + minutes + ":" + seconds
    return inner(final)
}

function startStopWatch() {
    stratTime()
    t4 = setInterval(stopw, 90)
}





//stopwatch
function stopWatch() {
    changebtn.style.display = "none"
    timerbtn.style.display = "none"
    stopwatchbtn.style.display = "none"
    backbtn.style.display = "flex"
    startbtn.style.display = "flex"
    stopinter();
    zero = "00:00:00.000"
    return inner(zero)
}

//start
function startbtnf() {
    backbtn.style.display = "none"
    startbtn.style.display = "none"
    stopbtn.style.display = "flex"
    restartbtn.style.display = "flex"
    lapbtn.style.display = "flex"
    startStopWatch();
}

//back
function back() {
    changebtn.style.display = "flex"
    timerbtn.style.display = "flex"
    stopwatchbtn.style.display = "flex"
    backbtn.style.display = "none"
    startbtn.style.display = "none"
    startinter();
}


//stop
function stop() {
    stopbtn.style.display = "none"
    restartbtn.style.display = "none"
    lapbtn.style.display = "none"
    backbtn.style.display = "flex"
    startbtn.style.display = "flex"
    clearInterval(t4)
}


//restart
function restart() {
    clearInterval(t4)
    startStopWatch()
}