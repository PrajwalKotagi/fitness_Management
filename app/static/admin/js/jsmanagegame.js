function getAdminData() {
    // alert("Hi");
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "getData");


    $.ajax({

        url: "/game_details/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {

            console.log(response);
            // $("#dataTables-example tr:gt(0)").remove();
            for (var i = 0; i < response.length; i++) {
                var j = i + 1;


                $("#tableData").append('<tr><td>' + j + '</td><td style="display: none;">' + response[i].ag_id + '</td><td>' + response[i].ag_name+ '</td><td>' + response[i].ag_created_at+ '</td><td><div class="d-flex" style="justify-content: space-evenly;"><a href="javascript:void(0);" id="edit_row" title="View/Edit" data-bs-toggle="modal" data-bs-target="#edit_modal"  class="text-primary" onClick="getRowsUpdate();">Edit</a><a href="javascript:void(0);" title="Delete" data-bs-toggle="modal" data-bs-target="#delete_modal" class="text-danger" id="delete_row" onClick="getRowsDelete();">Delete</a></div></td></tr>');

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
//Edit modal submit click
$(document).on("click", "#btn_update", function () {
    // alert("hi");

    if ($("#gameName1").val().trim().length < 1) {
        alert("Please Enter Name");
        $("#gameName1").focus();
        return false;
    }

    var formData = new FormData()
    formData.append("gameName1", $("#gameName1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("action", "update");

    // var table = $("#dataTables-example").DataTable();

    $.ajax({
        beforeSend: function () {
            $(".btn .spinner-border").show();
            $("#btn_update").attr("disabled", true);
        },
        url: "/game_details/",
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
        var lclGameName = currentRow.find("td:eq(2)").text();
        

        // alert(lclName);  
        $("#gameName1").val(lclGameName);
        $("#edit_id").val(lclID);
        // $("#edit_modal").modal('show');
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
            $("#btn_delete").attr("disabled", true);
        },
        url: "/game_details/",
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

function getRowsDelete(){
    // alert("hi");
    $("#tableData tr").click(function () {
        var currentRow = $(this).closest("tr");
        var lclID = currentRow.find("td:eq(1)").text();
        // alert(lclID);
        $("#delete_id").val(lclID);

    });
}
getAdminData();
