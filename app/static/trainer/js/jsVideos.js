$("#btn_add").click(function() {
    // alert($("#txtName").val());
    // if($("#txtName").val() == "") {
    //     alert("Please Enter Name");
    //     $("#txtName").focus();
    //     return false;
    // }
    if($("#txtVideo").val() == "") {
          alert("Please Enter Video Link");
          $("#txtVideo").focus();
          return false;
    }
     
  var formData = new FormData();
  // formData.append("txtName", $("#txtName").val());
  formData.append("txtVideo", $("#txtVideo").val());
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  formData.append("action", "add");

  // console.log(typeof(formData));

$.ajax({
    beforeSend: function () {
      $(".btn .spinner-border").show();
      $("#btn_add").attr("disabled", true);
    },
    url: "/videos/",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (result) {

      alert("Details Added Successfully");
      location.reload();
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
    
  // data fetching (display into admin dashboard )
  function getAdminData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");
  
  
    $.ajax({
  
      url: "/videos/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
  
        console.log(response);
        // $("#dataTables-example tr:gt(0)").remove();
        
        for (var i = 0; i < response.length; i++) {
          var j = i + 1; 
      
          $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].ct_id + '</td><td>'+  response[i].ct_video + '</td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');
        }
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
  
      },
    });
  
  }
  getAdminData()

  
//   / Edit data
  //Edit modal submit click
  $(document).on("click", "#btn_update", function () {
    // alert("hi");

    
	// if ($("#txtName1").val().trim().length < 1) {
	// 	alert("Please Enter Name");
	// 	$("#txtName1").focus();
	// 	return false;
	// }

	if ($("#txtVideo1").val().trim().length < 1) {
		alert("Please Enter Videos");
		$("#txtVideo1").focus();
		return false;
	}


    var formData = new FormData()
	// formData.append("txtName1", $("#txtName1").val());
	formData.append("txtVideo1", $("#txtVideo1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "/videos/",
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

  
  function getRowsUpdate() {
    $("#tableData tr").click(function() {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        // var lclName = currentRow.find("td:eq(2)").text();
        var lclVideo = currentRow.find("td:eq(2)").text();
        

  
        // alert(lclName);  
        // $("#txtName1").val(lclName);
        $("#txtdate1").val(lclVideo);
        $("#edit_id").val(lclID);
  
    });
  }

  // Delete
  $(document).on("click", "#btn_delete", function () {
    // alert("hi");
    var formData = new FormData()
    formData.append("id", $("#delete_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "delete");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "/videos/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        alert(" Details deleted Succesfully");
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

  function getRowsDelete() {
    $("#tableData tr").click(function () {
      var currentRow = $(this).closest("tr");
      var lclID = currentRow.find("td:eq(1)").text();
      // alert(lclID);
      $("#delete_id").val(lclID);
  
    });
  }
  
