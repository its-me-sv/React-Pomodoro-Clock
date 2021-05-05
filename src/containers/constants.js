export const initialState = {
    projectTitle: "Pomodoro Clock",
    breakLength: 300,
    sessionLength: 1500,
    currentTime: 1500,
    isRunning: false,
    situation: 'Session'
};

const leftPad = (val, padString, length) => {
    var str = val + "";
    while (str.length < length)
        str = padString + str;
    return str;
};


export const convertTime = (time, flag = 0) => {
    let mm = Math.floor(time / 60);
    let ss = time - mm * 60;
    if (flag === 1)
    {
        mm = leftPad(mm, "0", 2);
        ss = leftPad(ss, "0", 2);
        return `${mm}:${ss}`;
    }
    else 
        return `${mm}`;
};