var numberConvert = function(number) {
  if (number > 3999 || number < 1)
  {
    return "Invalid Number";
  }

  var ones_digit = { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X"};
  var tens_digit = { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"};
  var hundreds_digit = { 0: "", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM"};
  var thousands_digit = { 0: "", 1: "M", 2: "MM", 3: "MMM"};

  var str_output = "";

  var thousands = parseInt(number / 1000);
  number = number % 1000;

  str_output = str_output + thousands_digit[thousands];

  var hundreds = parseInt(number / 100);
  number = number % 100;

  str_output = str_output + hundreds_digit[hundreds];

  var tens = parseInt(number / 10);
  number = number % 10;

  str_output = str_output + tens_digit[tens];

  str_output += ones_digit[number];

  return str_output;
};

  $(document).ready(function() {
    $("form#converter").submit(function(event) {

      var number = $("input#number").val();

      var result = numberConvert(number);

      $('#roman').text(result);

      if (number.length == 0) {
        $("#error").show();
        $("#result").hide();
      }

      else {
      var result = number.join(", ");
      $("#result").show();
      $("#error").hide();
      }

  });
});
