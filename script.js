
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    var currentYear = 2020;
    var noOfYear = currentYear + years;


    if (principal < "1") {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    document.getElementById("result").innerHTML =
        "If you deposit<mark> " + principal + "</mark><br>at an interest rate of <mark>"+ rate + "%.</mark><br>You will receive an amount of<mark> " + interest +
        ",</mark><br>in the year<mark> " + noOfYear; "</mark>";
    

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval +"%";
}