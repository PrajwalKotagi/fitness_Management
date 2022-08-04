function validateEmail(paramEmailID) {
	var filter = /^[0-9a-z.]+\@[a-z0-9]+\.[a-zA-z0-9]{2,4}$/;

	if (filter.test(paramEmailID)) {
		return true;
	} else {
		return false;
	}
}

// alert("Hello");

$("#btn_add").click(function (e) {
	//verification
	if ($("#txtName").val().trim().length < 1) {
		alert("Please Enter Name");
		$("#txtName").focus();
		return false;
	}

	if ($("#txtdate").val() == "") {
		alert("Please select Date");
		$("#txtdate").focus();
		return false;
	}


	if ($("#txtBodyFat").val().trim().length < 1) {
		alert("Please Enter Body Fat");
		$("#txtBodyFat").focus();
		return false;
	}

	if ($("#txtWater").val().trim().length < 1) {
		alert("Please Enter Water");
		$("#txtWater").focus();
		return false;
	}

	if ($("#txtMuscle").val().trim().length < 1) {
		alert("Please Enter Muscle");
		$("#txtMuscle").focus();
		return false;
	}
	if ($("#txtCalorie").val().trim().length < 1) {
		alert("Please Enter Calorie");
		$("#txtCalorie").focus();
		return false;
	}
	if ($("#txtBone").val().trim().length < 1) {
		alert("Please Enter Bone");
		$("#txtBone").focus();
		return false;
	}
	if ($("#txtRemarks").val().trim().length < 1) {
		alert("Please Enter Remarks");
		$("#txtRemarks").focus();
		return false;
	}


		var formData = new FormData();
		formData.append("txtName",$("#txtName").val());
		formData.append("txtdate",$("#txtdate").val());
		formData.append("txtBodyFat",$("#txtBodyFat").val());
		formData.append("txtWater",$("#txtWater").val());
		formData.append("txtMuscle",$("#txtMuscle").val());
		formData.append("txtCalorie",$("#txtCalorie").val());
		formData.append("txtBone",$("#txtBone").val());
		formData.append("txtRemarks",$("#txtRemarks").val());
		formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
		formData.append("action", "add");

		$.ajax({
	    beforeSend: function () {
	      // $(".btn .spinner-border").show();
	      $("#btn_add").attr("disabled", true);
	    },
	    url: "/customer_health/",
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
  
      url: "/customer_health/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
  
        console.log(response);
        // $("#dataTables-example tr:gt(0)").remove();
        for (var i = 0; i < response.length; i++) {
          var j = i + 1;
       


          
          $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].ht_id +  '</td><td>' + response[i].ht_name +'</td><td>'+ response[i].ht_date + '</td><td>'+ response[i].ht_bodyfat + '</td><td>'+ response[i].ht_water +'</td><td>'+ response[i].ht_muscle +'</td><td>'+ response[i].ht_calorie +'</td><td>'+ response[i].ht_bone+'</td><td>'+ response[i].ht_remarks +'</td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');
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

    
	if ($("#txtName1").val().trim().length < 1) {
		alert("Please Enter Name");
		$("#txtName1").focus();
		return false;
	}

	if ($("#txtdate1").val().trim().length < 1) {
		alert("Please Enter Address");
		$("#txtdate1").focus();
		return false;
	}

	if ($("#txtBodyFat1").val().trim().length < 1) {
		alert("Please Enter ZipCode");
		$("#txtBodyFat1").focus();
		return false;
	}
	if ($("#txtWater1").val().trim().length < 1) {
		alert("Please Enter Birth Date");
		$("#txtWater1").focus();
		return false;
	}
	if ($("#txtMuscle1").val().trim().length < 1) {
		alert("Please Enter Contact Number");
		$("#txtMuscle1").focus();
		return false;
	}
	if ($("#txtCalorie1").val().trim().length < 1) {
		alert("Please Enter Email");
		$("#txtCalorie1").focus();
		return false;
	}
	if ($("#txtBone1").val().trim().length < 1) {
		alert("Please Enter Height");
		$("#txtBone1").focus();
		return false;
	}
	if ($("#txtRemarks1").val().trim().length < 1) {
		alert("Please Enter Weight");
		$("#txtRemarks1").focus();
		return false;
	}
	
	
  
    
    var formData = new FormData()
	formData.append("txtName1", $("#txtName1").val());
	formData.append("txtdate1", $("#txtdate1").val());
	formData.append("txtBodyFat1", $("#txtBodyFat1").val());
	formData.append("txtWater1", $("#txtWater1").val());
	formData.append("txtMuscle1", $("#txtMuscle1").val());
	formData.append("txtCalorie1", $("#txtCalorie1").val());
	formData.append("txtBone1", $("#txtBone1").val());
	formData.append("txtRemarks1", $("#txtRemarks1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "/customer_health/",
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
        var lclName = currentRow.find("td:eq(2)").text();
        var lclDate = currentRow.find("td:eq(3)").text();
        var lclBodyFat = currentRow.find("td:eq(4)").text();
        var lclWater = currentRow.find("td:eq(5)").text();
        var lclMuscle = currentRow.find("td:eq(6)").text();
		var lclCalorie = currentRow.find("td:eq(7)").text();
        var lclBone = currentRow.find("td:eq(8)").text();
        var lclRemark = currentRow.find("td:eq(9)").text();
        


  
        // alert(lclName);  
        $("#txtName1").val(lclName);
        $("#txtdate1").val(lclDate);
        $("#txtBodyFat1").val(lclBodyFat);
        $("#txtWater1").val(lclWater);
        $("#txtMuscle1").val(lclMuscle);
		$("#txtCalorie1").val(lclCalorie);
        $("#txtBone1").val(lclBone);
        $("#txtRemarks1").val(lclRemark);
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
      url: "/customer_health/",
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
  
