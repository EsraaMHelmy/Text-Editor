var content_row = 1;

function addContent() {

  // html += '<label class="col-sm-2">Page Content</label>';

  html = '<textarea class="form-control" id="code_preview' + content_row + '" name="page_code[' + content_row + '][code]" style="height: 150px;"></textarea>';
  // $('.note-editable').trigger("reset");
  $('#textt').append(html);
  $('#code_preview' + content_row).summernote({
    height: 150
  });
  content_row++;
}

$(document).ready(function () {
  $(".state").select2({
    tags: true
  });

  $(".btn-add-state").on("click", function () {
    var newStateVal = $(".new-state").val();
    // Set the value, creating a new option if necessary
    if ($(".state").find("option[value=" + newStateVal + "]").length) {
      $(".state").val(newStateVal);
    } else {
      // Create the DOM option that is pre-selected by default
      var newState = new Option(newStateVal, newStateVal, true, true);
      // Append it to the select
      $(".state").append(newState);
    }
  });
});


var p = $('#textt');
p.css({
  cursor: 'pointer'
});

p.on("click", function (e) {
  var range = window.getSelection() || document.getSelection() || document.selection.createRange();
  word = $.trim(range.toString());


  if (word != '') {
    var spn = '<span class="selectedword">' + word  + '</span>';
    $(this).html($(this).html().replace(word , spn));
    
    $('#myModal').modal('show');
    
   
  }

  // range.collapse();
  e.stopPropagation();

});


$("#ok").on("click", function () {
  // var range = window.getSelection() || document.getSelection() || document.selection.createRange();
  // var word = $.trim(range.toString());
  var selectItem = $('#state').find('option:selected').text();
  var str = $('.note-editable').text();
  var n = str.indexOf(word);
  console.log(str);


  var $row = ('<tr><td><i class="deleteIcon fa fa-minus-circle" aria-hidden="true"></i></td><td>' + word + '</td><td>' + selectItem + '</td><td>' + n + '</td><td>' + word.length + '</td></tr>');
  $("#tab tbody").append($row);
  $('#myModal').modal('hide');
});


$(document).on("click", ".deleteIcon", function () {
  // get the parent tr element and remove
  $(this).closest('tr').remove();
});