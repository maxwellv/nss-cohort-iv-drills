/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-zip').click(addZIP);
    $('#get-webcams').click(receive);
    $('#reset').click(reset);
  }
  function reset(){
    $('#webcams').empty();
  }
  function addZIP(){
    var zip = $('#zip').val();
    var $newOption = $('<option>');
    $newOption.val(zip);
    $newOption.text(zip);
    $('#zips').append($newOption);
    $('#zip').val('');
  }
  function receive(){
    var zip = $('#zips').val();
    var URL = 'http://api.wunderground.com/api/7c46208d975d14ef/webcams/q/' + zip + '.json?callback=?';
    $.getJSON(URL, renderWebcams);
  }

  function renderWebcams(data){
    var webcams = [];
    data = data.webcams;
    for (var x = 0;x < data.length;x++){
      webcams[x] = data[x].CURRENTIMAGEURL;
    }
    for (var y = 0;y < webcams.length;y++){
      var newImg = $('<img>');
      newImg.attr('src', webcams[y]);
      $('#webcams').append(newImg);
    }
  }
})();
