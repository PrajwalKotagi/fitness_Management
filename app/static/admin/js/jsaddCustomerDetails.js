function validateEmail(paramEmailID) {
	var filter = /^[0-9a-z.]+\@[a-z0-9]+\.[a-zA-z0-9]{2,4}$/;

	if (filter.test(paramEmailID)) {
		return true;
	} else {
		return false;
	}
}


$("#btn_add").click(function (e) {
	//verification
	

	if ($("#txtName").val().trim().length < 1) {
		alert("Please Enter Name");
		$("#txtName").focus();
		return false;
	}

	if ($("#txtAddress").val().trim().length < 1) {
		alert("Please Enter Address");
		$("#txtAddress").focus();
		return false;
	}

	if ($("#txtZipCode").val().trim().length < 1) {
		alert("Please Enter ZipCode");
		$("#txtZipCode").focus();
		return false;
	}
	if ($("#txtBirthDate").val().trim().length < 1) {
		alert("Please Enter Birth Date");
		$("#txtBirthDate").focus();
		return false;
	}
	if ($("#txtContactNo").val().trim().length < 1) {
		alert("Please Enter Contact Number");
		$("#txtContactNo").focus();
		return false;
	}
	if ($("#txtEmail").val().trim().length < 1) {
		alert("Please Enter Email");
		$("#txtEmail").focus();
		return false;
	}
	if($("#txtSelImg").val() == "") {
		alert("Please Select Image");
		$("#txtSelImg").focus();
		return false;
	}
	if ($("#txtHeight").val().trim().length < 1) {
		alert("Please Enter Height");
		$("#txtHeight").focus();
		return false;
	}
	if ($("#txtWeight").val().trim().length < 1) {
		alert("Please Enter Weight");
		$("#txtWeight").focus();
		return false;
	}
	if ($("#txtNationality").val().trim().length < 1) {
		alert("Please Enter Nationality");
		$("#txtNationality").focus();
		return false;
	}
	// if ($("#txtFacebook").val().trim().length < 1) {
	// 	alert("Please Enter FaceBook");
	// 	$("#txtFacebook").focus();
	// 	return false;
	// }
	// if ($("#txtTwitter").val().trim().length < 1) {
	// 	alert("Please Enter Twitter");
	// 	$("#txtTwitter").focus();
	// 	return false;
	// }
	// if ($("#txtContactPr").val().trim().length < 1) {
	// 	alert("Please Enter Contact Person");
	// 	$("#txtContactPr").focus();
	// 	return false;
	// }
	if ($("#txtPrevious").val().trim().length < 1) {
		alert("Please Enter Previous Gym Details");
		$("#txtPrevious").focus();
		return false;
	}
	if ($("#txtYears").val().trim().length < 1) {
		alert("Please Enter Year");
		$("#txtYears").focus();
		return false;
	}
	if ($("#txtJoining").val().trim().length < 1) {
		alert("Please Enter Joining Date");
		$("#txtJoining").focus();
		return false;
	}
	if ($("#txtAge").val().trim().length < 1) {
		alert("Please Enter Age");
		$("#txtAge").focus();
		return false;
	}
	if ($("#txtGender").val().trim().length < 1) {
		alert("Please Select Gender");
		$("#txtGender").focus();
		return false;
	}
	if ($("#txtProof").val() =="") {
		alert("Please Upload Proof");
		$("#txtProof").focus();
		return false;
	}
	// if ($("#txtOtherProof").val() =="") {
	// 	alert("Please Upload Other Proof");
	// 	$("#txtOtherProof").focus();
	// 	return false;
	// }

	// DataBase
	var formData = new FormData();
	var lclFile1 = document.getElementById("txtSelImg");
	var lclFile2 = document.getElementById("txtProof");
	// var lclFile3 = document.getElementById("txtOtherProof");
	lclImage1 = lclFile1.files[0];
	lclImage2 = lclFile2.files[0];
	// lclImage3 = lclFile3.files[0];



	
	formData.append("txtName", $("#txtName").val());
	formData.append("txtAddress", $("#txtAddress").val());
	formData.append("txtZipCode", $("#txtZipCode").val());
	formData.append("txtBirthDate", $("#txtBirthDate").val());
	formData.append("txtContactNo", $("#txtContactNo").val());
	formData.append("txtEmail", $("#txtEmail").val());
	formData.append("txtSelImg", lclImage1);
	formData.append("txtHeight", $("#txtHeight").val());
	formData.append("txtWeight", $("#txtWeight").val());
	formData.append("txtNationality", $("#txtNationality").val());
	// formData.append("txtFacebook", $("#txtFacebook").val());
	// formData.append("txtTwitter", $("#txtTwitter").val());
	// formData.append("txtContactPr", $("#txtContactPr").val());
	formData.append("txtPrevious", $("#txtPrevious").val());
	formData.append("txtYears", $("#txtYears").val());
	formData.append("txtJoining", $("#txtJoining").val());
	formData.append("txtAge", $("#txtAge").val());
	formData.append("txtGender", $("#txtGender").val());
	formData.append("txtProof", lclImage2);
	// formData.append("txtOtherProof", lclImage3);
	formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
	formData.append("action", "add");



	$.ajax({
		beforeSend: function () {
			$(".btn .spinner-border").show();
			$("#btn_add").attr("disabled", true);
		},
		url: "/customer_details/",
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

    
  // data fetching (display into admin dashboard )
  function getAdminData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");
  
  
    $.ajax({
  
      url: "/customer_details/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
  
        console.log(response);
        // $("#dataTables-example tr:gt(0)").remove();
        for (var i = 0; i < response.length; i++) {
          var j = i + 1;
        let image1 = response[i].co_image.substring(3);
        let image2 = response[i].co_proof.substring(3);
        // let image3 = response[i].co_otherproof.substring(3);


          
          $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].co_id +  '</td><td>' + response[i].co_name +'</td><td>'+ response[i].co_address + '</td><td>'+ response[i].co_zipcode + '</td><td>'+ response[i].co_birth +'</td><td>'+ response[i].co_contact +'</td><td>'+ response[i].co_email +'</td><td><a href="'+image1+'" download>download</a></td><td>'+ response[i].co_height +'</td><td>'+ response[i].co_weight +'</td><td>'+ response[i].co_nationality +'</td><td>'+ response[i].co_previousgym +'</td><td>'+ response[i].co_yeartraning +'</td><td>'+ response[i].co_joining +'</td><td>'+ response[i].co_age +'</td><td>'+ response[i].co_gender +'</td><td><a href="'+image2+'" download>download</a></td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');
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
// Edit data
  //Edit modal submit click
  $(document).on("click", "#btn_update", function () {
    // alert("hi");

    
	if ($("#txtName1").val().trim().length < 1) {
		alert("Please Enter Name");
		$("#txtName1").focus();
		return false;
	}

	if ($("#txtAddress1").val().trim().length < 1) {
		alert("Please Enter Address");
		$("#txtAddress1").focus();
		return false;
	}

	if ($("#txtZipCode1").val().trim().length < 1) {
		alert("Please Enter ZipCode");
		$("#txtZipCode1").focus();
		return false;
	}
	if ($("#txtBirthDate1").val().trim().length < 1) {
		alert("Please Enter Birth Date");
		$("#txtBirthDate1").focus();
		return false;
	}
	if ($("#txtContactNo1").val().trim().length < 1) {
		alert("Please Enter Contact Number");
		$("#txtContactNo1").focus();
		return false;
	}
	if ($("#txtEmail1").val().trim().length < 1) {
		alert("Please Enter Email");
		$("#txtEmail1").focus();
		return false;
	}
	if ($("#txtHeight1").val().trim().length < 1) {
		alert("Please Enter Height");
		$("#txtHeight1").focus();
		return false;
	}
	if ($("#txtWeight1").val().trim().length < 1) {
		alert("Please Enter Weight");
		$("#txtWeight1").focus();
		return false;
	}
	if ($("#txtNationality1").val().trim().length < 1) {
		alert("Please Enter Nationality");
		$("#txtNationality1").focus();
		return false;
	}
	// if ($("#txtFacebook1").val().trim().length < 1) {
	// 	alert("Please Enter FaceBook");
	// 	$("#txtFacebook1").focus();
	// 	return false;
	// }
	// if ($("#txtTwitter1").val().trim().length < 1) {
	// 	alert("Please Enter Twitter");
	// 	$("#txtTwitter1").focus();
	// 	return false;
	// }
	// if ($("#txtContactPr1").val().trim().length < 1) {
	// 	alert("Please Enter Contact Person");
	// 	$("#txtContactPr1").focus();
	// 	return false;
	// }
	if ($("#txtPrevious1").val().trim().length < 1) {
		alert("Please Enter Previous Gym Details");
		$("#txtPrevious1").focus();
		return false;
	}
	if ($("#txtYears1").val().trim().length < 1) {
		alert("Please Enter Year");
		$("#txtYears1").focus();
		return false;
	}
	if ($("#txtJoining1").val().trim().length < 1) {
		alert("Please Enter Joining Date");
		$("#txtJoining1").focus();
		return false;
	}
	if ($("#txtAge1").val().trim().length < 1) {
		alert("Please Enter Age");
		$("#txtAge1").focus();
		return false;
	}
	if ($("#txtGender1").val().trim().length < 1) {
		alert("Please Select Gender");
		$("#txtGender1").focus();
		return false;
	}
	
  
    
    var formData = new FormData()
	formData.append("txtName1", $("#txtName1").val());
	formData.append("txtAddress1", $("#txtAddress1").val());
	formData.append("txtZipCode1", $("#txtZipCode1").val());
	formData.append("txtBirthDate1", $("#txtBirthDate1").val());
	formData.append("txtContactNo1", $("#txtContactNo1").val());
	formData.append("txtEmail1", $("#txtEmail1").val());
	formData.append("txtHeight1", $("#txtHeight1").val());
	formData.append("txtWeight1", $("#txtWeight1").val());
	formData.append("txtNationality1", $("#txtNationality1").val());
	// formData.append("txtFacebook1", $("#txtFacebook1").val());
	// formData.append("txtTwitter1", $("#txtTwitter1").val());
	// formData.append("txtContactPr1", $("#txtContactPr1").val());
	formData.append("txtPrevious1", $("#txtPrevious1").val());
	formData.append("txtYears1", $("#txtYears1").val());
	formData.append("txtJoining1", $("#txtJoining1").val());
	formData.append("txtAge1", $("#txtAge1").val());
	formData.append("txtGender1", $("#txtGender1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "/customer_details/",
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
        var lclAddress = currentRow.find("td:eq(3)").text();
        var lclZipCode = currentRow.find("td:eq(4)").text();
        var lclBirtDate = currentRow.find("td:eq(5)").text();
        var lclContactNo = currentRow.find("td:eq(6)").text();
		var lclEmail = currentRow.find("td:eq(7)").text();
        var lclHeight = currentRow.find("td:eq(9)").text();
        var lclWeight = currentRow.find("td:eq(10)").text();
        var lclNational = currentRow.find("td:eq(11)").text();
		// var lclFacebook = currentRow.find("td:eq(12)").text();
        // var lclTwitter = currentRow.find("td:eq(13)").text();
        // var lclContactPr = currentRow.find("td:eq(14)").text();
        var lclPrevious = currentRow.find("td:eq(12)").text();
		var lclYear = currentRow.find("td:eq(13)").text();
        var lclJoining = currentRow.find("td:eq(14)").text();
        var lclAge = currentRow.find("td:eq(15)").text();
        var lclGender = currentRow.find("td:eq(16)").text();


  
        // alert(lclName);  
        $("#txtName1").val(lclName);
        $("#txtAddress1").val(lclAddress);
        $("#txtZipCode1").val(lclZipCode);
        $("#txtBirthDate1").val(lclBirtDate);
        $("#txtContactNo1").val(lclContactNo);
		$("#txtEmail1").val(lclEmail);
        $("#txtHeight1").val(lclHeight);
        $("#txtWeight1").val(lclWeight);
        $("#txtNationality1").val(lclNational);
        // $("#txtFacebook1").val(lclFacebook);
		// $("#txtTwitter1").val(lclTwitter);
        // $("#txtContactPr1").val(lclContactPr);
        $("#txtPrevious1").val(lclPrevious);
        $("#txtYears1").val(lclYear);
        $("#txtJoining1").val(lclJoining);
		$("#txtAge1").val(lclAge);
        $("#txtGender1").val(lclGender);
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
      url: "/customer_details/",
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
  

  