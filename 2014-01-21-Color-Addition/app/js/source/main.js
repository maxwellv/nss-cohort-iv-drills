(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-colors').click(addColor);
  }

  function addColor(){
    var color = $('#colorInput').val();
    color = color.split(', ');
    var total = 0;
    for (var x = 0; x < color.length; x++){
      var $div = $('<div>');
      $div.addClass('color');
      $div.css('background-color', color[x]);
      $div.text(x + 1);
      total = total + (x + 1);
      $('#colors').append($div);
    }
    var $finaldiv = $('<div>');
    $finaldiv.addClass('color');
    var finalColor = 'rgb(' + Math.floor((Math.random() * 256)) + ', ' + Math.floor((Math.random() * 256)) + ', ' + Math.floor((Math.random() * 256)) + ')';
    $finaldiv.css('background-color', finalColor);
    $finaldiv.text(total);
    $('#colors').append($finaldiv);
  }
})();
