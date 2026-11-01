
document.addEventListener("DOMContentLoaded", function () {

    const toggleButton = document.getElementById("dark-mode-toggle");

    // Always start in dark mode
    document.body.classList.remove("light-mode");

    updateButton();

    // Switch between dark and light mode
    toggleButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        updateButton();

    });

    // Update the button icon and accessibility label
    function updateButton() {

        if (document.body.classList.contains("light-mode")) {

            toggleButton.textContent = "☾";

            toggleButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        } else {

            toggleButton.textContent = "☀";

            toggleButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        }

    }

});
