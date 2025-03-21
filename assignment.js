
function calculateVAT( price ) {
   const vatRate = 7.5 / 100;
   if(isNaN(price) || typeof price ==='string' || price <= 0){
     return "Invalid";
   }else{ 
    let productVat = price * vatRate;
    return productVat;
   }  
}




function validContact(contact) {
   if (Array.isArray(contact) || typeof contact === 'boolean') {
      return "Invalid";
   } else if (typeof contact === 'number' || !contact.startsWith('01') || (/\s/).test(contact) || contact.length !== 11) {
      return false;
   } else {
      return true;
   }
}




function willSuccess(marks) {
   const pass = [];
   const fail = [];
   if (Array.isArray(marks)) {
      for (const mark of marks) {
         if (mark >= 50) {
            pass.push(mark);
         } else {
            fail.push(mark);
         }
      }
      if (pass.length > fail.length) {
         return true;
      } else {
         return false;
      }
   } else {
      return "Invalid";
   }
}




function validProposal(person1, person2) {
   ageGap = Math.abs(person1.age - person2.age);
   // console.log(ageGap);
   if (typeof person1 !== 'object' || typeof person2 !== 'object') {
      return "Invalid";
   }else {
      if (person1.gender !== person2.gender && ageGap <= 7) {
         return true;
      } else {
         return false;
      }
   }
}




function calculateSleepTime(times) {
   let sum = 0;
   for (let i = 0; i < times.length; i++) {
      if (typeof times[i] !== 'number') {
         return "Invalid";
      }
      sum = sum + times[i];
   }
   const averageTime = sum / 60;
   const totalMinute = Math.floor(averageTime);
   const hour = Math.floor(totalMinute / 60);
   const minute = Math.floor(averageTime % 60);
   const totalMinuteInSecond = totalMinute * 60;
   const second = sum - totalMinuteInSecond;

   return {
      hour: hour,
      minute: minute,
      second: second,
    };
} 





