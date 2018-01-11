console.log( 'js' );

$( document ).ready(onReady);

function onReady(){
  console.log('JQ');
  getKoala();
  $('#addButton').on('click', addKoala);
  $('#viewKoalas').on('click', '.koalaDelete', koalaDelete);
  $('#viewKoalas').on('click', '.transferReady', updateKoala);
  $('#toggleTransfer').on('click', toggleNotReadyKoalas)
}

let toggled = true;

function getKoala(){
  $.ajax({
    method: 'GET',
    url: '/koala',
    success: function(response){
      console.log('Get request response:', response);
      toHTML(response);
    }
  });
}

function toHTML(response) {
  $('#viewKoalas').empty();
  for (let i = 0; i < response.length; i++) {
    let $row = $('<tr>');
    $row.data('id', response[i].id);
    $row.append('<td> ' + response[i].name + '</td>');
    $row.append('<td> ' + response[i].age + '</td>');
    $row.append('<td> ' + response[i].gender + '</td>');
    $row.append('<td> ' + response[i].ready_to_transfer + '</td>');
    $row.append('<td> ' + response[i].notes + '</td>');
    $row.append('<td><button type="button" class="btn btn-danger koalaDelete">Remove Koala</button></td>');
    if(response[i].ready_to_transfer == 'No'){
      $row.append('<td><button type="button" class="btn btn-primary transferReady">Ready to Transfer!</button></td>');
    } else {
      $row.append('<td></td>');
    }
    $('#viewKoalas').append($row);
    }
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
  $('#ready_to_transfer').val('Ready For Transfer');
  $('#gender').val('Gender');

}

function koalaDelete() {
  let koalaId = $(this).parents('tr').data('id');
  $.ajax({
      method: 'DELETE',
      url: '/koala/' + koalaId,
      success: function(response){
          console.log('koala deleted:', response);
          getKoala();
      }
  });
}


function updateKoala(){
  let koalaId = $(this).parents('tr').data('id');
  let transferReady = 'Yes';
    $.ajax({
        method: 'PUT',
        url: '/koala/' + koalaId,
        data: {ready_to_transfer: transferReady},
        success: function(response){
            console.log('response:', response);
            getKoala();

        }
    });
}

function toggleNotReadyKoalas() {
  if (toggled) {
    $.ajax({
      method: 'GET',
      url: '/koala/notReady',
      success: function(response){
        console.log('notready');
        toHTML(response);
        toggled = false;
      }
    });
  } else {
    console.log('ready');
    getKoala();
    toggled = true;
  }
}
