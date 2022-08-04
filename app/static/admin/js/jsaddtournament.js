$("#btn_add").click(function() {
	if($("#txtName").val() == "") {
		alert("Please Enter Name");
		$("#txtName").focus();
		return false;
	}

	if($("#txtGame").val() == "") {
		alert("Please selsct game");
		$("#txtGame").focus();
		return false;
	}

	if($("#txtDate").val() == "") {
		alert("Please Enter date");
		$("#txtDate").focus();
		return false;
	}

	if($("#txtTime").val() == "") {
		alert("Please Enter time");
		$("#txtTime").focus();
		return false;
	}

	if($("#txtPlace").val() == "") {
		alert("Please Enter place");
		$("#txtPlace").focus();
		return false;
	}

	var formData = new FormData();
	formData.append("txtName",$("#txtName").val());
	formData.append("txtGame",$("#txtGame").val());
	formData.append("txtDate",$("#txtDate").val());
	formData.append("txtTime",$("#txtTime").val());
	formData.append("txtPlace",$("#txtPlace").val());
	formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
	formData.append("action", "add");

	$.ajax({
    beforeSend: function () {
      // $(".btn .spinner-border").show();
      $("#btn_add").attr("disabled", true);
    },
    url: "/tournament_details/",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (result) {

      alert("Tournament Added Successfully");
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