$(document).ready(function() {
    $("#amount").change(function() {
        debugger;
        var initialPrice = 62.00;
        var amount = $("#amount").val();
        var finalPrice = initialPrice * amount;
        if (Number.isInteger(finalPrice)) {
            $("#finalPrice").text(finalPrice + ".00€");
        } else {
            $("#finalPrice").text(finalPrice + "€");
        }
    });
});