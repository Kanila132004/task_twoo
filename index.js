function calculateFactorial() {
    var num = document.getElementById("inputNumber").value;
    if (isNaN(num)) {
        alert("Enter a valid number");
        return;
    }
    num = parseInt(num);
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("result").innerHTML = "Factorial of " + num + " is: " + factorial;
}