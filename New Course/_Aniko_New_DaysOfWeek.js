function returnDay(num) {
    let daysOfWeek = {
     1: "Monday",
     2: "Tuesday",
     3: "Wednesday",
     4: "Thursday",
     5: "Friday",
     6: "Saturday",
     7: "Sunday"
     } 
    let result = daysOfWeek[num]
    if(num <= 0 || num > 7) {
      return console.log(null);
    } else 
    return console.log(result);
 }
 
 returnDay(1)
 returnDay(7)
 returnDay(4)
 returnDay(0)