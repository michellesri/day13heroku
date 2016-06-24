function addSentence (firstWord) {
  var sentIntro = ' comes before ';
  function lastWord(finalWord) {
    return firstWord + sentIntro + finalWord + '.';
  }
  return lastWord;
}

var alphabet = addSentence('a');

var filledSentence = alphabet('z');

$('#hofSentence').text(filledSentence);

function anotherSent(name){
  $('#hof2Sent').text(name + ' is the coolest');
};

function userName(firstName, lastName, callback){
  var completeName = firstName + ' ' + lastName;
  callback(completeName);
};

userName('bugs', 'bunny', anotherSent);
