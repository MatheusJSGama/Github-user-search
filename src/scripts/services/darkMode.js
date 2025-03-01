const darkMode = document.querySelectorAll(".dark")
const btnDarkMode = document.querySelector(".moon")
const btnLightMode = document.querySelector(".sun")


function darkModeFunction() {
    btnDarkMode.addEventListener("click", function darkThemeMode() {
        darkMode.forEach(function (element) {
            element.classList.add("dark-theme")
            element.classList.add("transition")
        })
    })

    btnLightMode.addEventListener("click", function lightThemeMode() {
        darkMode.forEach(function (element) {
            element.classList.remove("dark-theme")
        })
    })
}

export { darkModeFunction }