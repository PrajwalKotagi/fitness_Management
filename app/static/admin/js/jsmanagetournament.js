function getAdminData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");


    $.ajax({

        url: "/tournament_details/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {

            console.log(response);
            // $("#dataTables-example tr:gt(0)").remove();
            for (var i = 0; i < response.length; i++) {
                var j = i + 1;


                $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].at_id + '</td><td>' + response[i].at_name+ '</td><td>' + response[i].at_game+ '</td><td>' + response[i].at_date+ '</td><td>' + response[i].at_time+'</td><td>' + response[i].at_place+'</td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');

            }
        },
        error: function (request, error) {
            console.error(error);
        },
        complete: function () {

        },
    });

}



// Edit data
// Edit modal submit click
$(document).on("click", "#btn_update", function () {
    // alert("hi");

    if ($("#txtName1").val().trim().length < 1) {
        alert("Please Enter Name");
        $("#txtName1").focus();
        return false;
    }


    if ($("#txtGame1").val().trim().length < 1) {
        alert("Please Select Game");
        $("#txtGame1").focus();
        return false;
    }

    if ($("#txtDate1").val().trim().length < 1) {
        alert("Please Enter Email");
        $("#txtDate1").focus();
        return false;
    }

    if ($("#txtTime1").val().trim().length < 1) {
        alert("Please Enter Time");
        $("#txtTime1").focus();
        return false;
    }

    if ($("#txtPlace1").val().trim().length < 1) {
        alert("Please Enter Place");
        $("#txtPlace1").focus();
        return false;
    }


    var formData = new FormData()
    formData.append("txtName1", $("#txtName1").val());
    formData.append("txtGame1", $("#txtGame1").val());
    formData.append("txtDate1", $("#txtDate1").val());
    formData.append("txtTime1", $("#txtTime1").val());
    formData.append("txtPlace1", $("#txtPlace1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
        beforeSend: function () {
            $(".btn .spinner-border").show();
            $("#btn_update").attr("disabled", true);
        },
        url: "/tournament_details/",
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
        var lclGame = currentRow.find("td:eq(3)").text();
        var lclDate = currentRow.find("td:eq(4)").text();
        var lclTime = currentRow.find("td:eq(5)").text();
        var lclPlace = currentRow.find("td:eq(5)").text();



        // alert(lclName);  
        $("#txtName1").val(lclName);
        $("#txtGame1").val(lclGame);
        $("#txtDate1").val(lclDate);
        $("#txtTime1").val(lclTime);
        $("#txtPlace1").val(lclPlace);
        $("#edit_id").val(lclID);
        // $("#edit_modal").modal('show');
    });
}

// // Delete
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
            $("#btn_delete").attr("disabled", true);
        },
        url: "/tournament_details/",
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
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        // alert(lclID);
        $("#delete_id").val(lclID);

    });
}
getAdminData();
