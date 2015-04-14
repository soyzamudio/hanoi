$(document).ready(init);

var $source = undefined, $target = undefined, count = 0;

function init(){
  $('#1').text('1').css('width', '20%');
  $('#2').text('2').css('width', '40%');
  $('#3').text('3').css('width', '60%');

  $('.disc').click(selectDisk);
  $('.tower').click(dropTower);

  function selectDisk() {
    event.stopPropagation();
    $(this).is(':first-child') ? $source = $(this) : alert('Illegal move');
  }

  function dropTower() {
    $target = $(this);
    moveDisk();
  }

  function moveDisk() {
    var children = $target.children('.disc')[0];
    (children && $source.attr('id') > children.id) ? alert('Illegal move') : $target.prepend($source);
    count++;
    win();
  }

  function win() {
    if ($('#tower3').children().length === 3) {
      alert('YOU WON!');
    }
  }
}
