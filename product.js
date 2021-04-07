$(document).ready(function() {
    $("#units").change(function() {
        var initialPrice = 62.00;
        var quantity = $("#units").val();
        var finalPrice = initialPrice * quantity;
        $("#finalPrice").text(finalPrice + ".00€");
        document.getElementById("quantity").value = parseFloat($("#units").val());
    });
});