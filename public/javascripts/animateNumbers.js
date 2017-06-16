

var countUps = document.getElementsByClassName('count-up');
var i;
for (i = 0; i < countUps.length; i++) {
  var countUp = countUps[i];
  init(countUp);
}

window.tweens = [];
animate();

function init(countUp) {
  var targetNumber = parseFloat(countUp.innerText.replace(/\,/g, ''));
  // Get the precision needed, and create that as an offset
  var splitString = targetNumber.toString().split(".")
  if (splitString[1]) {
    precision = splitString[1].length;
    if (precision > 0) {
      var offset = Math.pow(10, precision);
    }
  } else {
    var offset = 1;
  }
  var startNumber = Math.round( (targetNumber * offset) / 2 );
  var endNumber = targetNumber * offset;
  var tween = 
    new TWEEN.Tween( { x: startNumber } )
      .to( { x: endNumber }, 5600 )
      .easing( TWEEN.Easing.Exponential.Out )
      .onUpdate( function () {
        countUp.innerHTML = numberWithCommas(Math.round( this.x ) / offset);
      } )
      .start();
}

function animate( time ) {
  requestAnimationFrame( animate );
  TWEEN.update( time );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
