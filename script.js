let tickCount = 0;
let maxSteps = 100;
let tickTime = 100;

const tick = () => {
    tickCount++;
    document.getElementById('stepsDone').value = tickCount;
    moveWall(); //Move wall to the left
    if (tickCount > maxSteps) {
        runSim(false);
    }
}

let tickInterval;

const runSim = (state) => {
    if (state) { //Run Simulation
        tickInterval = setInterval("tick();", tickTime);
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("startBtn").disabled = true;
    }
    else { //Stop Simulation
        clearInterval(tickInterval);
        tickCount = 0;
        document.getElementById('stepsDone').value = tickCount;
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("startBtn").disabled = false;
    }
}

const moveWall = () => {
    let wall_X =  document.getElementById('wall').offsetLeft;

    document.getElementById('debugTextarea').innerHTML += "[" + tickCount + "] Wall PosX: " + wall_X + "\n";
    document.getElementById('debugTextarea').scrollTop = document.getElementById('debugTextarea').scrollHeight;

    if (wall_X <= 0) {
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
    } else {
        wall_X = wall_X - 40;
        document.getElementById('wall').style.left = wall_X + 'px';
    }
}