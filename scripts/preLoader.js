// Wrap your code in a function to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");

    if (loader) {
        // The element exists, add the load event listener
        window.addEventListener("load", function () {
            setTimeout(function () {
                loader.style.opacity = "0";
            }, 900);
        });
    } else {
        // The element with ID "preloader" was not found
        console.error("Element with ID 'preloader' not found.");
    }
});
