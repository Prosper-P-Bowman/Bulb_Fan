// the left side main

// turn on connect

function connect(){
    
    const offall = document.getElementById("offall");
    offall.style.color = "white";
    offall.style.backgroundColor = "rgb(255, 184, 52)";

    const button = document.getElementById("button");
    button.style.color = "burlywood";
    button.style.backgroundColor = "white";

    document.getElementById("until").style.color='rgba(255, 255, 255, 0.76);';
    document.getElementById("bulb").style.color='greenyellow';
    document.getElementById("fafa").style.color='green';
    document.getElementById("until").style.color='rgba(255, 255, 255, 0.76';

    document.getElementById("isBattery").innerHTML = "Yes";
    document.getElementById("isSwitchOn").innerHTML = "No";
}

// turn off
function off(){

    const button = document.getElementById("button");
    button.style.color = "white";
    button.style.backgroundColor = "rgb(255, 184, 52)";

    const offall = document.getElementById("offall");
    offall.style.color = "burlywood";
    offall.style.backgroundColor = "white";

    document.getElementById("until").style.color='red';
    document.getElementById("bulb").style.color='rgba(255, 255, 255, 0.76';
    document.getElementById("fafa").style.color='rgba(255, 255, 255, 0.76';

    document.getElementById("isSwitchOn").innerHTML = "Yes";
    document.getElementById("isBattery").innerHTML = "No";
}


// the right side main

// turning on connected battery

function batteryConnect(){

    const onChanger = document.getElementById("charge");
    onChanger.style.color = "burlywood";
    onChanger.style.backgroundColor = "white";

    const onCharger = document.getElementById("change");
    onCharger.style.color = "white";
    onCharger.style.backgroundColor = "purple";

    document.getElementById("fabattery").style.color = "green";
    document.getElementById("fasbattery").style.color = "greenyellow";
    document.getElementById("plug").style.color="rgba(255, 255, 255, 0.76)";
    document.getElementById("batteryon").innerHTML = "Yes";
}


// turning on connected power

function turnOnCharger(){

    const onCharger = document.getElementById("change");
    onCharger.style.color = "burlywood";
    onCharger.style.backgroundColor = "white";

    const onChanger = document.getElementById("charge");
    onChanger.style.color = "white";
    onChanger.style.backgroundColor = "purple";

    document.getElementById("batteryon").innerHTML = "No";
    document.getElementById("plug").style.color="green";
    document.getElementById("poweron").innerHTML = 'Yes';
    document.getElementById("fabattery").style.color = "rgba(255, 255, 255, 0.76)";
}