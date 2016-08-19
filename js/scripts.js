// Back-End Logic
function generateList (_input){
  var input = parseInt(_input);
  var output = "";
  for (var i = 1; i <= input; i++){
    output += "<li>" + getReplacement(i,[15,3,5],["ping-pong","ping","pong"]) + "</li>"
  }
  return output;
}

function getReplacement(_number, _multiples, _replacements){
  var number = _number;
  for(var i = 0; i < _multiples.length && i < _replacements.length; i++){
    number = replaceNumber(number, _multiples[i], _replacements[i]);
  }
  return number;
}

function replaceNumber(_number, _multiple, _replacement){
  if(_number % _multiple === 0){
    return _replacement;
  }
  return _number;
}


// Front-End Logic
$("form#input-form").submit(function(event){
  event.preventDefault();
  var input = $("input#input-field").val();
  $("ul#output-ul").text("");
  $("ul#output-ul").append(generateList(input));
});
