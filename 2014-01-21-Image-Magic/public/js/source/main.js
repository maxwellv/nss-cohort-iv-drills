(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-img').click(addImg);
  }

  function addImg(){
    var img = $('#URL').val();
    var $div = $('<div>');
    $div.addClass('image');
    $div.css('background', 'url("' + img + '")');
    $('#images').append($div);
  }
})();
