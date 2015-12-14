// Military Time
// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

// Examples
// Input      Output
// time:
// "3:00pm"  "15:00"
// time:
// "9:15am"  "09:15"
// time:
// "12:00am" "00:00"
// time:
// "04:00"   "04:00"

function toMilitary (time) {
   var amOrPm = time.slice(-2);
   var hour = time.match(/[^:]*/i)[0];
   var minute = time[time.length - 4] + time[time.length - 3];

   if (amOrPm === 'am') {
       if (hour < 10) {
           return '0' + hour + ':' + minute;
       }
       if (hour == 12) {
           return '00:' + minute;
       }
       if (hour == 10 || hour == 11) {
           return hour + ':' + minute
       }
   }

   else if (amOrPm === 'pm') {
       if (hour == 12) {
           return hour + ':' + minute;
       }
       if (hour < 12) {
           return Number(hour) + 12 + ':' + minute;
       }
   }

   else {
       return time;
   }
}