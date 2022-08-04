function getAdminData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");


    $.ajax({

        url: "/player_details/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {

            console.log(response);
            // $("#dataTables-example tr:gt(0)").remove();
            for (var i = 0; i < response.length; i++) {
                var j = i + 1;


                $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].ap_id + '</td><td>' + response[i].ap_name + '</td><td>' + response[i].ap_mobile + '</td><td>' + response[i].ap_email + '</td><td>' + response[i].ap_age + '</td><td>' + response[i].ap_createid + '</td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');

            }
        },
        error: function (request, error) {
            console.error(error);
        },
        complete: function () {

        },
    });

}
// getAdminData();


// Edit data
// Edit modal submit click
$(document).on("click", "#btn_update", function () {
    // alert("hi");

    if ($("#txtName1").val().trim().length < 1) {
        alert("Please Enter Name");
        $("#txtName1").focus();
        return false;
    }


    if ($("#txtMobileNo1").val().trim().length < 10) {
        alert("Please Enter Correct Mobile Number");
        $("#txtMobileNo1").focus();
        return false;
    }

    if ($("#txtEmailId1").val().trim().length < 1) {
        alert("Please Enter Email");
        $("#txtEmailId1").focus();
        return false;
    }

    if ($("#txtAge1").val().trim().length < 1) {
        alert("Please Enter Id");
        $("#txtAge1").focus();
        return false;
    }

    if ($("#txtCreateId1").val().trim().length < 1) {
        alert("Please Enter Id");
        $("#txtCreateId1").focus();
        return false;
    }



    var formData = new FormData()
    formData.append("txtName1", $("#txtName1").val());
    formData.append("txtMobileNo1", $("#txtMobileNo1").val());
    formData.append("txtEmailId1", $("#txtEmailId1").val());
    formData.append("txtAge1", $("#txtAge1").val());
    formData.append("txtCreateId1", $("#txtCreateId1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
        beforeSend: function () {
            $(".btn .spinner-border").show();
            $("#btn_update").attr("disabled", true);
        },
        url: "/player_details/",
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
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        var lclName = currentRow.find("td:eq(2)").text();
        var lclMobile = currentRow.find("td:eq(3)").text();
        var lclEmail = currentRow.find("td:eq(4)").text();
        var lclCreatId = currentRow.find("td:eq(5)").text();


        // alert(lclName);  
        $("#txtName1").val(lclName);
        $("#txtMobileNo1").val(lclMobile);
        $("#txtEmailId1").val(lclEmail);
        $("#txtAge1").val(lclCreatId);
        $("#txtCreateId1").val(lclCreatId);
        $("#edit_id").val(lclID);
        // $("#edit_modal").modal('show');
    });
}

// Delete
$(document).on("click", "#btn_delete", function () {
    alert("hi");
    var formData = new FormData()
    formData.append("id", $("#delete_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "delete");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
        beforeSend: function () {
            $(".btn .spinner-border").show();
            $("#btn_delete").attr("disabled", true);
        },
        url: "/player_details/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (result) {
            alert(" Details deleted Succesfully");
            location.reload();
            table.ajax.reload();
            $("#delete_modal").modal('hide');
        },
        error: function (request, error) {
            console.error(error);
        },
        complete: function () {
            $(".btn .spinner-border").hide();
            $("#btn_delete").attr("disabled", false);
        },
    });
});

function getRowsDelete() {
    // alert("hi");
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        // alert(lclID);
        $("#delete_id").val(lclID);

    });
}
getAdminData();
