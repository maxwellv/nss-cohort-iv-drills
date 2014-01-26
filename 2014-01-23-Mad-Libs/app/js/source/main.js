(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-words').click(addWords);
    //.on(event, identifier, function to be called)
    $('#clickable-words').on('click', '.word', addToSentence);
  }
  function addWords(){
    var words = $('#words').val();
    words = words.split(' ');
    for(var x = 0;x < words.length;x++){
      var newWord = $('<div>');
      newWord.addClass('word');
      newWord.text(words[x]);
      newWord.css('float', 'left'); //add this crap to the stylesheet
      newWord.css('margin', '6px');
      newWord.css('font-family', 'monospace');
      $('#clickable-words').append(newWord);
    }
  }
  function addToSentence(theword){
    //"this" would've also worked instead of passing theword
    //to check "this"'s text, use this.textContent
    //easier than converting it to a jQuery object and calling .text()
    $('#sentence').text($('#sentence').text() + theword.currentTarget.innerText + ' ');
  }
})();
