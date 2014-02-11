(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#grow').click(growNumber);
    $('#stop').click(stop);
  }

  var timer = null;
  var count = 1;
  function growNumber(){
    if (timer !== null){
      return;
    }
    $('#results').empty();
    var base = $('#number').val();
    base = parseInt(base);
    var pow = base;
    timer = setInterval(function(){
      pow = Math.pow(base, count);
      var span1 = $('<span>');
      var span2 = $('<span>');
      var span3 = $('<span>');
      span1.text(base);
      span2.text(count);
      span3.text(' = ' + pow);
      var $li = $('<li>');
      $li.append(span1, span2, span3);
      $('#results').prepend($li);
      count++;
    }, parseInt($('#delay').val()) * 1000);
  }

  function stop(){
    clearInterval(timer);
    timer = null;
    count = 1;
  }
})();
