
function LeapYear(year){


}
LeapYear(2000)
LeapYear(2005)

const leapYearII =
(year) => {
    if (year % 4 === 0 ){ 
    
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                console.log('Leap year');
            } else {
                console.log('Not  leap');
            }
        } else {
            console.log('Leap year');
        }

} else {
    console.log('Not a leap year')}  
}