console.log( 'js' );

$( document ).ready(onReady);

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
      console.log('Get request response:', response);
      $('#viewKoalas').empty();
      for (let i = 0; i < response.length; i++) {
      let $row = $('<tr>');
      $row.append('<td> ' + response[i].name + '</td>');
      $row.append('<td> ' + response[i].age + '</td>');
      $row.append('<td> ' + response[i].gender + '</td>');
      $row.append('<td> ' + response[i].ready_to_transfer + '</td>');
      $row.append('<td> ' + response[i].notes + '</td>');
      $('#viewKoalas').append($row);
      }
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
  console.log(newKoala);
  
  $.ajax({
    method: 'POST',
    url: '/koala',
    data: newKoala,
    success: function(response){
      console.log('Post request response:', response);
      getKoala();
      resetInput();
    }
  });
}

function resetInput(){
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#notesIn').val('');
}