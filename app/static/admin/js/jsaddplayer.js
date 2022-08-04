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
  
	if ($("#txtMobileNo").val().trim().length < 1) {
	  alert("Please Enter Correct Mobile Number");
	  $("#txtMobileNo").focus();
	  return false;
	}
  
	if ($("#txtEmailId").val().trim().length < 1) {
	  alert("Please Enter Email");
	  $("#txtEmailId").focus();
	  return false;
	}
  
	if ($("#txtAge").val().trim().length < 1) {
	  alert("Please Enter Password");
	  $("#txtAge").focus();
	  return false;
	}
  
	if ($("#txtCreateId").val().trim().length < 1) {
	  alert("Please Enter Id");
	  $("#txtCreateId").focus();
	  return false;
	}

// DataBase
var formData = new FormData();

formData.append("txtName", $("#txtName").val());
formData.append("txtMobileNo", $("#txtMobileNo").val());
formData.append("txtEmailId", $("#txtEmailId").val());
formData.append("txtAge", $("#txtAge").val());
formData.append("txtCreateId", $("#txtCreateId").val());
formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
formData.append("action", "add");



$.ajax({
  beforeSend: function () {
	$(".btn .spinner-border").show();
	$("#btn_add").attr("disabled", true);
  },
  url: "/player_details/",
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
// getAdminData();
