// Basically we want to display a sequence of numbers from 1 - num; 
// Numbers divisbile by 3 get the fizz css style rule applied; 
// Numbers divisible by 5 get the buzz css style rule appllied; 
// Numbers divisible by 3 and 5 get the fizzbuzz css style rule applied; 


$(function(){
    $('#number-chooser').submit( event => {
      event.preventDefault(); // This prevents the default behavior of the submit action
      $(".js-results").empty(); 
      // Reference to the number that the user inputed; 
      // parseInt parses the user's input for numbers only..idk why we need this though. Doesn't seem necessary. 
      // input[name="number"choice"] is the same as input, but just more specific. 
      // val() gets the value of the input
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