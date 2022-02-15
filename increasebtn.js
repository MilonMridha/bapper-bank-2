document.getElementById("counter").addEventListener("click", function () {
    const counter = document.getElementById("counter-field");
    const counterValue = counter.innerText;
    if (counterValue < 5) {
        counter.innerText = parseInt(counterValue) + 1;
    }
    else {
        document.getElementById("counter").disabled = "true"
    }

});
