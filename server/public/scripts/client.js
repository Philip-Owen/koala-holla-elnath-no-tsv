console.log( 'js' );

$( document ).ready(onReady);

function onReady(){
  console.log('JQ');
  getKoala();
  $('#addButton').on('click', addKoala);
  $('#viewKoalas').on('click', '.koalaDelete', koalaDelete);
  $('#viewKoalas').on('click', '.tranferReady', updateKoala);
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
      $row.append('<button type="button" class="koalaDelete">Remove Koala</button>');
      if(response[i].ready_to_transfer == 'No'){
        $row.append('<button type="button" class="tranferReady">Ready to Transfer!</button>');
      }
      $row.data('id', response[i].id);
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

function koalaDelete() {
  let koalaId = $(this).parents('tr').data('id');
  $.ajax({
      method: 'DELETE',
      url: '/koalas/' + koalaId,
      success: function(response){
          console.log('koala deleted:', response);
      }
  });
}

function updateKoala(){
  let koalaId = $(this).parents('tr').data('id');
  let tranferReady = 'Yes';
    $.ajax({
        method: 'PUT',
        url: '/koalas/' + koalaId,
        data: {ready_to_tranfer: tranferReady},
        success: function(response){
            console.log('response:', response);
        }
    });
}