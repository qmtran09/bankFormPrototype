import "./styles.css";

$("#name").blur(function () {
  if ($(this).val().indexOf(" ") > -1) {
  } else {
    window.alert("Tên phải có dấu cách");
  }
});

$("#name").change(function () {
  if ($(this).val() === "") {
    $("#expiryDiv").hide();
    // $("#expiryDate").removeAttr("required");
    // $("#expiryDate").removeAttr("data-error");
  } else {
    $("#expiryDiv").show();
    // $("#expiryDate").attr("required", "");
    //$("#otherField").attr("data-error", "This field is required.");
  }
});
$("#name").trigger("change");

$("#monthPicker").change(function () {
  if ($(this).val() === "") {
    $("#cmndDiv").hide();
    //$("#cmnd").removeAttr("required");
    //$("#cmnd").removeAttr("data-error");
  } else {
    $("#cmndDiv").show();
    // $("#expiryDate").attr("required", "");
    //$("#otherField").attr("data-error", "This field is required.");
  }
});
$("#monthPicker").trigger("change");

$("#cmnd").change(function () {
  if ($(this).val() == "") {
    $("#otherFieldGroupDiv").hide();
    $("#otherField1").removeAttr("required");
    $("#otherField1").removeAttr("data-error");
    $("#otherField2").removeAttr("required");
    $("#otherField2").removeAttr("data-error");
  } else {
    $("#otherFieldGroupDiv").show();
    $("#otherField1").attr("required", "");
    $("#otherField1").attr("data-error", "This field is required.");
    $("#otherField2").attr("required", "");
    $("#otherField2").attr("data-error", "This field is required.");
  }
});
$("#cmnd").trigger("change");
