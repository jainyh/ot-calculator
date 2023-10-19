function calculate() {
    var salary = parseFloat(document.getElementById("salary").value);
    var ot = parseFloat(document.getElementById("ot").value);

    var hourly = (12 * salary) / 2288;
    var otHourly = ot * hourly;

    var results = "Your hourly rate is: $" + hourly.toFixed(2) + "<br>";
    results += "Your OT pay (before CPF) is: $" + otHourly.toFixed(2);

    document.getElementById("results").innerHTML = results;
}