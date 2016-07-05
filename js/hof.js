(function(module){
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
    $('#hof2Sent').text(name + ' the page and to my personal links');
  };

  function userName(firstName, lastName, callback){
    var completeName = firstName + ' ' + lastName;
    callback(completeName);
  };

  userName('please use the nav bar above', 'to navigate', anotherSent);
})(window);

// i am going to wrap everything into an IFFE in order to expose the module to the window object.
