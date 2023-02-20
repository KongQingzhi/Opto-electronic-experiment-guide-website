function formateDate(): string {
    const time = new Date();
    const Y = time.getFullYear();
    const M = (time.getMonth() + 1) > 10 ? (time.getMonth() + 1) : "0" + (time.getMonth() + 1);
    const D = time.getDay() > 10 ? time.getDay() : "0" + time.getDay();
    const h = time.getHours() > 10 ? time.getHours() : "0" + time.getHours();
    const m = time.getMinutes() > 10 ? time.getMinutes() : "0" + time.getMinutes();
    const s = time.getSeconds() > 10 ? time.getSeconds() : "0" + time.getSeconds();
    return Y + "-" + M + "-" + D + " " + " " + h + ":" + m + ":" + s;
}

export {
    formateDate
}