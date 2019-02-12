function formatTime(minutes) {
    let hours = minutes / 60;
    let intHours = Math.floor(hours);
    let day = hours / 24;
    let intDays = Math.floor(day);
    let min = (hours - intHours) * 60;
    let intMin = Math.round(min);
    intHours = Math.floor(hours - (intDays * 24));
    return `${intDays} day(s) ${intHours} hour(s) ${intMin} minute(s)`;
}

formatTime();