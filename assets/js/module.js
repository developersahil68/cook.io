/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

// export const getTime = minute =>{
//     const hour = Math.floor(minute / 60)
//     const day = Math.floor(hour / 24)

//     const time = day || hour || minute;
//     const unitIndex = [day , hour , minute].lastIndexOf(time);
//     const timeUnit = ["days" , "hours" , "minutes"][unitIndex];

//     return {time ,timeUnit}
// }

export const getTime = minute => {
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    let time, timeUnit;
    if (day > 0) {
        time = day;
        timeUnit = "days";
    } else if (hour > 0) {
        time = hour;
        timeUnit = "hours";
    } else {
        time = minute;
        timeUnit = "minutes";
    }

    return { time, timeUnit };
};
