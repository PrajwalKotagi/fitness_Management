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


if ($("#txtName").val().trim().length < 1) {
  alert("Please Enter Name");
  $("#txtName").focus();
  return false;
}

if ($("#txtMobileNo").val().trim().length < 10) {
    alert("Please Enter Correct Mobile Number");
    $("#txtMobileNo").focus();
    return false;
  }


if ($("#txtEmail").val().trim().length < 1) {
  alert("Please Enter Email");
  $("#txtEmail").focus();
  return false;
}


if ($("#txtLocation").val().trim().length < 1) {
  alert("Please Enter Location");
  $("#txtLocation").focus();
  return false;
}


// if ($("#txtPeoples").val().trim().length < 1) {
//   alert("Please Enter Total Peoples");
//   $("#txtPeoples").focus();
//   return false;
// }

//database
    var formData = new FormData();
    
    formData.append("txtName", $("#txtName").val());
    formData.append("txtMobileNo", $("#txtMobileNo").val());
    formData.append("txtEmail", $("#txtEmail").val());
    formData.append("txtLocation", $("#txtLocation").val());
    // formData.append("txtPeoples", $("#txtPeoples").val());
    // formData.append("hotelEmail", $("#email").text());
    formData.append("priceDetails", $("#priceDetails").val());
    formData.append("productName", $("#productName").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "add");

  
  
  

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_add").attr("disabled", true);
      },
      url: "/Customer_Buying/",
      type: "POST",
      // headers: {'X-CSRFToken': '{{ csrf_token }}'},
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
  
        payment();

        
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
  
      url: "/Customer_Buying/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
  
        console.log(response);
        // $("#dataTables-example tr:gt(0)").remove();
        for (var i = 0; i < response.length; i++) {
          var j = i + 1;
          
          $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].bk_id + '</td><td>' + response[i].bk_name + '</td><td>'  + response[i].bk_mobile + '</td><td>' + response[i].bk_email +'</td><td>' + response[i].bk_location+'</td><td>' + response[i].bk_price+ '</td><td><div class="d-flex" style="justify-content: space-evenly;"></div></td></tr>');
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


  function payment() {

    var totalAmount = $("#priceDetails").val()
    var options = {
    "key": "rzp_test_aKbqVbQ3Ciq9KZ",
    // rzp_live_fAt71isKlJSzhX
    "amount": (totalAmount*100), // 2000 paise = INR 20
    "name": "Fitness Management",
    "description": "Payment",
    "handler": function (response) {
     // alert(response.razorpay_payment_id);
     // submitRegDetails(response.razorpay_payment_id);
     window.location.href = '/pay_success/'

    },
    "prefill": {
        "contact": $("#txtMobileNo").val(),
        "email":   $("#txtEmail").val(),
    },
     
    "theme": {
        "color": "#4caf50"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  // preventDefault();
  // });

}
  