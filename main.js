function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clockToSeconds').innerHTML = h + ":" + m + ":" + s;

    let mInput = document.querySelector('#minBehind');
    let sInput = document.querySelector('#secBehind');
    let mNumber = parseFloat(mInput.value);
    let sNumber = parseFloat(sInput.value);

    document.getElementById('clockToSecondsPlusTime').innerHTML = h + ":" + (m - mNumber) + ":" + (s - sNumber);

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}