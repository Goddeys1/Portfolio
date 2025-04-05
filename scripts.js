document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-btn");

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeButton.textContent = document.body.classList.contains("dark-mode")
            ? "🌞 Light Mode"
            : "🌙 Dark Mode";
    });
});
