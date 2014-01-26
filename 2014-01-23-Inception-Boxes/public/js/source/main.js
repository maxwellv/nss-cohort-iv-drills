(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#inception').click(addBoxes);
  }

  function addBoxes(){
    var count = parseInt($('#number').val());
    var boxes = [];
    for (var x = 0;x < count;x++){
      var newBox = $('<div id=' + (x + 1) + '>');
      newBox.addClass('box');
      newBox.css('background-color', 'rgb(' + Math.floor((Math.random() * 256)) + ', ' + Math.floor((Math.random() * 256)) + ', ' + Math.floor((Math.random() * 256)) + ')');
      boxes[boxes.length] = newBox;
    }
    renderBoxes(boxes);
  }

  function renderBoxes(boxes){
    for (var x = 0;x < boxes.length;x++){
      if (x === 0){
        $('#boxes').append(boxes[x]);
      }else{
        $('#' + x).append(boxes[x]);
      }
    }
    var allBoxes = $('.box');
    var size = $(allBoxes[0]).css('width');
    for (var y = (allBoxes.length - 1);y >= 0;y--){
      var currentBox = $(allBoxes[y]);
      currentBox.css('width', size);
      currentBox.css('height', size);
      size =  (parseInt(size.slice(0, size.length - 2)) + 6) + 'px';
    }
  }
})();
