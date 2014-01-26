(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addColor').click(addColor);
    $('select').change(changePaint);
  }

  function addColor(){
    var $newOption = $('<option>');
    $newOption.val($('#newColor').val().toLowerCase());
    $newOption.text($('#newColor').val().toUpperCase());
    $('select').append($newOption);
    $('#newColor').val('');
    $('#newColor').focus();
  }
  function changePaint(){
    $('#paint').css('background-color', $('select').val());
  }
})();
