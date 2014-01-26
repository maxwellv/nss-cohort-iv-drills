(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addColor').click(addColor);
  }

  function addColor(){
    var $newOption = $('<option>');
    $newOption.val($('option').length);
    $newOption.text($('#newColor').val());
    $('select').append($newOption);
    $('#newColor').val('');
    $('#newColor').focus();
  }
})();
