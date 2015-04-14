$(document).ready(init);

var $source = undefined, $target = undefined, count = 0;

function init() {
  $('#start').click(startBoard);
  $('.tower').on('click', '.disc', selectDisk);
  $('.tower').click(dropTower);
}

function startBoard() {
  reset();
  for (var i = 0; i < $('#number').val(); i++) {
    var $div = $('<div>');
    $div.attr('id', i+1).addClass('disc').css('width', (((i+1)/10)*100) + '%').text(i+1);
    $('#tower1').append($div);
  }
}

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
  win();
}

function win() {
  if ($('#tower3').children().length === $('#number').val()) { alert('YOU WON!'); reset(); }
}

function reset() {
  $('#tower1, #tower2, #tower3').empty();
}
