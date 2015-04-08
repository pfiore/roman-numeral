var numberConvert = function(number) {
  var digits = { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X"};
  var str_output = "";

  var fifties = parseInt(number / 50);
  number = number % 50;

  for(var i = 1; i <= fifties; i++)
  {
    str_output = str_output + "L";
  }

  var tens = parseInt(number / 10);
  number = number % 10;

  for(var i = 1; i <= tens; i++)
  {
    str_output = str_output + "X";
  }

  str_output += digits[number];

  return str_output;
};

$(document).ready(function() {
    $("form#coin-combo").submit(function(event) {


    });
});
