// var content_row = 1;

// function addContent() {
//   html = '<div id="content-row">';
//   html += '<div class="form-group">';
//   html += '<label class="col-sm-2">Page Content</label>';
//   html += '<div class="col-sm-10">';
//   html += '<textarea class="form-control" id="code_preview' + content_row + '" name="page_code[' + content_row + '][code]" style="height: 300px;"></textarea>';
//   html += '</div>';
//   html += '</div>';
//   html += '</div>';
//   $('#content-row').append(html);
//   $('#code_preview' + content_row).summernote({height: 300});

//   content_row++;
// }


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


$(document).ready(function () {

  var p = $('#textt');

  p.css({
    cursor: 'pointer'
  });

  p.click(function (e) {
    var range = window.getSelection() || document.getSelection() || document.selection.createRange();
    var word = $.trim(range.toString());

    var row = ('<tr><td><i class="deleteIcon fa fa-minus-circle" aria-hidden="true"></i></td><td>' + word + '</td><td>name</td><td>1</td><td>5</td></tr>');
    if (word != '') {
      // show the modal (word);
      $('#myModal').modal('show');
      $(".modal-header").append('<h4 class="appended">' + 'you selected this word <span class="bold">' + word + "</span></h4>");

      $("#ok").on("click", function () {


        $("#table").append(row);


        $('.appended').remove();

        $('#myModal').modal('hide');


      });
    }


    // range.collapse();
    e.stopPropagation();


  });


  $('#close').click(function () {
    $('.appended').remove();
  });


});


$(document).on("click", ".deleteIcon", function () {
  // get the parent tr element and remove
  $(this).closest('tr').remove();

});