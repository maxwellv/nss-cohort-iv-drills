(function(){
  'use strict';

  $(document).ready(initialize);

  var wins = 0;
  var games = 0;

  function initialize(){
    $('#start-game').click(startGame);
    $('#a').click(play);
    $('#b').click(play);
    $('#c').click(play);
  }
  function startGame(){
    $('.abc').show();
    games++;
  }
  function play(){
    var win = Math.floor(Math.random() * 3);
    var picked = this.textContent;
    if ((picked === 'A' && win === 0) || (picked === 'B' && win === 1) || (picked === 'C' && win === 3)){
      alert('You win!');
      wins++;
    }else{
      alert('You lose!');
    }
    $('.abc').hide();

  }
})();
