/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-zip').click(addZIP);
    $('#get-forecast').click(receive);
  }
  function addZIP(){
    var zip = $('#zip').val();
    if (zip === ''){
      alert('Please enter a ZIP Code.');
      return;
    }
    var $newOption = $('<option>');
    $newOption.val($('#zip').val());
    $newOption.text($('#zip').val());
    $('#zips').append($newOption);
    $('#zip').val('');
    $('#zip').focus();
  }
  function receive(){
    var zip = $('#zips').val();
    var URL = 'http://api.wunderground.com/api/7c46208d975d14ef/forecast/q/' + zip + '.json?callback=?';
    $.getJSON(URL, logData);
  }
  
  function logData(data){
    console.log(data);
    $('.forecasts').detach();
    data = data.forecast.simpleforecast.forecastday;
    for (var x = 0;x < data.length;x++){
      var $div = $('<div>');
      $div.addClass('forecast');
      $div.text(data[x].date.weekday + ': ' + data[x].conditions);
      $div.css('background', 'url(\"' + data[x].icon_url + '\") no-repeat center');
      $('#forecasts').append($div);
    }
  }

})();
