// Date objects are created with the new Date() constructor

// console.log(new Date()); // Mon Jan 22 2024 17:48:41 GMT+0530 (India Standard Time)

// // new Date(date string)
// const d = new Date("October 13, 2014 11:13:00"); // Mon Oct 13 2014 11:13:00 GMT+0530 (India Standard Time)
// const d = new Date("2014-10-13"); // Mon Oct 13 2014 05:30:00 GMT+0530 (India Standard Time)
// console.log(d);

// new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d); // Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.
// Specifying a month higher than 11, 
// will not result in an error but add the overflow to the next year:
// same for day, overflow to the next month


// You cannot omit month. 
//If you supply only one parameter it will be treated as milliseconds.
// // const d = new Date(2018); // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time) 
// // above is like date(milliseconds)


// const d = new Date(24 * 60 * 60 * 1000);
// console.log(d);  // January 01 1970 plus 24 hours is:

// const d = new Date();

// console.log(d.toDateString());  // Mon Jan 22 2024
// converts a date to a more readable format:

// d.toUTCString() // Mon, 22 Jan 2024 12:38:36 GMT


// ISO Dates (YYYY-MM-DD) 
// console.log(new Date("2015-03-25")); // Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)
// ISO Dates (Year and Month)
// const d = new Date("2015-03");

// JavaScript Short Dates.

// written with an "MM/DD/YYYY"
// no leading zeroes may produce an error

// "YYYY/MM/DD" is undefined.
// "DD-MM-YYYY" is also undefined.

// Long dates are most often written with a "MMM DD YYYY" 
// Month and day can be in any order:

// let msec = Date.parse("March 21, 2012"); // return number of milliseconds 


// 2) Date get Methods

// const d = new Date("2024-03-25");

// console.log(d.getFullYear()); // 2024
// // getYear() is deprecated return 2 digit

// d.getMonth(); // 2     January = 0 ,December = 11.

// d.getDate(); // 25

// d.getHours(); // return from (0-23)

// d.getMinutes(); // return from  (0-59)

// d.getSeconds(); // return from  (0-59)

// d.getMilliseconds(); // return from (0-999)

// d.getDay(); // return from (0-6), 0->sunday

// d.getTime()  // returns the number of milliseconds since January 1, 1970:

// Date.now(); //  milliseconds since January 1, 1970
// new Date() // current date

// same for set 



