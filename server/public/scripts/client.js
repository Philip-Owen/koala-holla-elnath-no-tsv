console.log( 'js' );

$( document ).ready(onReady());

function onReady(){
  console.log('JQ');
  getKoala();
  $('#addButton').on('click', addKoala);
}

function getKoala(){
  $.ajax({
    method: 'GET',
    url: '/koala',
    success: function(response){
      console.log('get request response', response);
      
    }
  });
}

function addKoala(){
  let newKoala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#gender').val(),
    ready_to_transfer: $('#ready_to_transfer').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    method: 'POST',
    url: '/koala',
    method: newKoala,
    success: function(response){
      getKoala();
      resetInput();
    }
  })
}

function resetInput(){
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#gender').val('');
  $('#ready_to_transfer').val('');
  $('#notesIn').val('');
}