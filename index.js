


$(function(){
    $('#number-chooser').submit( event => {
      event.preventDefault();
      $(".js-results").empty(); 
      // Reference to the number that the user inputed; 
      const num = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());
      // We will append the numbers 1 - num in this array; 
      const results = []; 
      // Create a for loop that will sequence our numbers from 1 - num; 
      for(let i = 1; i <= num; i++){
        //if num is divisibe by 3 and 15 add fizzbuzz class; 
        if(i % 15 === 0){
          results.push($('<div class="fizz-buzz-item fizzbuzz"><span>FizzBuzz</span></div>'));
        } 
        
        else if(i % 5 === 0){
          results.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
        } 
        
        else if(i % 3 === 0){
          results.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
        } 
        
        else {
          results.push($(`div class="fizz-buzz-item"><span>${i}</span></div>`)); 
        }
      }
      $(".js-results").append(results);
    });
  });