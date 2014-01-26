(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#addLIs').click(makeLIs);
  }

  function makeLIs(){
    var count = $('#liCount').val();
    count = parseInt(count);
    for (var x = 1; x <= count; x++){
      var newLI = $('<li>');
      newLI.text(x);
      if (x % 2 === 0){
        newLI.css('color', '#ff0000');
      }
      else{
        newLI.css('color', '#00ff00');
      }
      $('#oddAndEven').append(newLI);
    }
  }
})();
