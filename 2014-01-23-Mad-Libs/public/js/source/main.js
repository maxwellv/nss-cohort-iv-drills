(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-words').click(addWords);
    $('#clickable-words').on('click', '.word', addToSentence);
  }
  function addWords(){
    var words = $('#words').val();
    words = words.split(' ');
    for(var x = 0;x < words.length;x++){
      var newWord = $('<div>');
      newWord.addClass('word');
      newWord.text(words[x]);
      newWord.css('float', 'left');
      newWord.css('margin', '6px');
      newWord.css('font-family', 'monospace');
      $('#clickable-words').append(newWord);
    }
  }
  function addToSentence(theword){
    $('#sentence').text($('#sentence').text() + theword.currentTarget.innerText + ' ');
  }
})();
