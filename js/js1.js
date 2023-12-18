document.addEventListener("DOMContentLoaded", function () {
    var sliders = ["java", "cPlusPlus", "matlab", "communication", "problemSolving"];

    sliders.forEach(function (sliderId) {
        var slider = document.getElementById(sliderId);
        var value = document.getElementById(sliderId + "Value");

        value.innerHTML = slider.value;

        slider.addEventListener("input", function () {
            value.innerHTML = slider.value;
        });
    });

    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
    });
});
