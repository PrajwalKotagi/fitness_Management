function validateEmail(paramEmailID) {
    var filter = /^[0-9a-z.]+\@[a-z0-9]+\.[a-zA-z0-9]{2,4}$/;

    if (filter.test(paramEmailID)) {
        return true;
    } else {
        return false;
    }
}
function alphaOnly(event) {
    var key = event.which ? event.which : event.keyCode;
    return (
        (key >= 65 && key <= 90) ||
        key == 8 ||
        (event.charCode >= 97 && event.charCode <= 122) ||
        event.charCode == 32
    );
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

// alert("Hello");

$("#btn_add").click(function (e) {
    //verification

    if ($("#txtName").val().trim().length < 1) {
        alert("Please Enter  Name");
        $("#txtName").focus();
        return false;
    }

    if ($("#txtPrice").val().trim().length < 1) {
        alert("Please Enter Price");
        $("#txtPrice").focus();
        return false;
    }

    if ($("#selImage").val() == "") {
        alert("Please Select Image");
        $("#selImage").focus();
        return false;
    }



    var formData = new FormData();
    var lclFile = document.getElementById("selImage");
    lclImage = lclFile.files[0];

    formData.append("txtName", $("#txtName").val());
    formData.append("txtPrice", $("#txtPrice").val());
    formData.append("selImage", lclImage);
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "add");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
        beforeSend: function () {
            $(".btn .spinner-border").show();
            $("#btn_add").attr("disabled", true);
        },
        url: "/add_diet/",
        type: "POST",
        // headers: {'X-CSRFToken': '{{ csrf_token }}'},
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {

            alert("Details Added Successfully");
            location.reload();
            table.ajax.reload();
            $("#add_modal").modal('hide');

        },
        error: function (request, error) {
            console.error(error);
        },
        complete: function () {
            $(".btn .spinner-border").hide();
            $("#btn_add").attr("disabled", false);
        },
    });
});



 
$(document).ready(function () {


    //Edit modal submit click
    $(document).on("click", "#btn_update", function () {
      // alert("hi");
  
     
      if ($("#txtName1").val().trim().length < 1) {
        alert("Please Enter Name");
        $("#txtName1").focus();
        return false;
      }
  
      if ($("#txtPrice1").val().trim().length < 1) {
        alert("Please Enter Mobile Number");
        $("#txtPrice1").focus();
        return false;
      }
  
      
      
     
  
      var formData = new FormData()
      formData.append("txtName1", $("#txtName1").val());
      formData.append("txtPrice1", $("#txtPrice1").val());
      formData.append("id", $("#edit_id").val());
      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
      formData.append("action", "update");
  
  
      // var table = $("#dataTables-example").DataTable();
  
      $.ajax({
        beforeSend: function () {
          $(".btn .spinner-border").show();
          $("#btn_update").attr("disabled", true);
        },
        url: "/add_diet/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
          alert(" Details Updated Succesfully");
          location.reload();
          table.ajax.reload();
          $("#edit_modal").modal('hide');
        },
        error: function (request, error) {
          console.error(error);
        },
        complete: function () {
          $(".btn .spinner-border").hide();
          $("#btn_update").attr("disabled", false);
        },
      });
    });
  
    //Delete work step
    $(document).on("click", "#btn_delete", function () {
  
      var formData = new FormData();
      formData.append("id", $("#delete_id").val());
      formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
      formData.append("action", "delete");
  
  
      // var table = $("#dataTables-example").DataTable();
  
      $.ajax({
        beforeSend: function () {
          $(".btn .spinner-border").show();
        },
  
        url: "/add_diet/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function () {
          alert(" Details deleted succesfully");
          location.reload();
          table.ajax.reload();
          $("#delete_modal").modal('hide');
        },
        error: function (request, error) {
          console.error(error);
        },
        complete: function () {
          $(".btn .spinner-border").hide();
          // Reset Form
          //$("#view_field_form")[0].reset();
          $(".close").click();
        },
      });
    });
  });
  
  function getEventData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");
  
  
    $.ajax({
  
      url: "/add_diet/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
  
        console.log(response);
        // $("#dataTables-example tr:gt(0)").remove();
        for (var i = 0; i < response.length; i++) {
          var j = i + 1;
          let image = response[i].dp_image.substring(3);
          
          $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].dp_id + '</td><td>' + response[i].dp_name + '</td><td>' + response[i].dp_price +   '</td><td><a href="'+image+'" download>download</a></td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');
        }
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
  
      },
    });
  
  }
  
  function getRowsUpdate() {
    $("#tableData tr").click(function () {
      var currentRow = $(this).closest("tr");
      var lclID = currentRow.find("td:eq(1)").text();
      var lclName = currentRow.find("td:eq(2)").text();
      var lclPrice = currentRow.find("td:eq(3)").text();
      

    
      // alert(lclID);  
      $("#txtName1").val(lclName);
      $("#txtPrice1").val(lclPrice);
      $("#edit_id").val(lclID);
  
    });
  }
  function getRowsDelete() {
    $("#tableData tr").click(function () {
      var currentRow = $(this).closest("tr");
      var lclID = currentRow.find("td:eq(1)").text();
      // alert(lclID);
      $("#delete_id").val(lclID);
  
    });
  }
getEventData()
  