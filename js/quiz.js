var questions = [
  ['What color is the sky?', 'blue'],
  ['What color is grass?', 'green'],
  ['What color is the sun?', 'yellow'],
  ['What color is clouds?', 'white']
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;


var quesRight = [];
var quesWrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function list(arr) {
var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  } 
  listHTML += '</ol>';
  return listHTML;
}


for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = response.toLowerCase();
  if (response === answer) {
      correctAnswers += 1;
      quesRight.push(questions);
  } else {
      quesWrong.push(questions);
  }
}

html = "You got " + correctAnswers + " question(s) right."
html += "<h2>You got these questions correct:</h2>";
html += list(quesRight);
html += '<h2>You got these questions wrong:</h2>';
html += list(quesWrong);

  




