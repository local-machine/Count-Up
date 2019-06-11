$(document).ready(function(event) {
  $("form#countup").submit(function(event) {
    var numbers = [1,2]


    var numberInput=numbers.map(function(number) {
      return parseInt($('#count'+ number).val());
    });
    //alert(numberInput);
    //alert(numberInput[0])
    // debugger;
    // alert(typeof(numberInput[0]));
    var maxNumber = numberInput[0];
    var startNumber = numberInput[1];
    var currentNumberArray = [];
    currentNumberArray[0] = startNumber;
//debugger;

    // number input 1 is the condition to exit loop
    for(index = 1; currentNumberArray[index-1] < maxNumber; index+=1){
      currentNumberArray[index] = currentNumberArray[index-1] + startNumber;
    }

    var sorter=function(n){
      return "<li>"+currentNumberArray[n]+"</li>"

    }
    // used for printing the output Array



  //  alert(currentNumberArray);

debugger;
    var count = 0;
    for(index = 0; count < currentNumberArray.length; index+=1){
      $("ul#output").append(sorter(index));
      count +=1;
    }


    event.preventDefault();

  });
});


// var sorter=function(n){
//   return "<li>"+numberInput[n]+"</li>"
// }
// numbers.forEach(function(number){
//   $("ul#insertation").append(sorter(number-1))
// });
