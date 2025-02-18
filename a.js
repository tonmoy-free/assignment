
    function calculateSleepTime(times) {   
        if(Array.isArray(times)){
            let sum = 0;
           for(let i=0; i<times.length; i++){
            sum = sum + times[i];
           }
           const averageTime = sum / 60;
           const totalMinute = Math.floor(averageTime);
           const hour = Math.floor(totalMinute / 60);
           const minute = Math.floor(averageTime % 60);
           const totalMinuteInSecond = totalMinute * 60;
           const second = sum - totalMinuteInSecond;
     
           console.log('hour:',hour, 'minute:', minute,'second:',second);
        }else{
           console.log("Invalid");
        }
     
     }
 
 
 const times = [1000, 2000, 725];
 console.log(calculateSleepTime(times));