import { userNotFound, searchBoxEmpty, errorToData } from "./services/errors.js"
import { darkModeFunction } from "./services/darkMode.js"
import { getUser } from "./services/getUser.js"
import { user } from "./objects/userObject.js"
import { screen } from "./objects/userScreen.js"
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".btn")

searchBtn.addEventListener("click", () => {
    const userName = searchBox.value
    if (searchBoxEmpty(userName)) return
    if (userNotFound(userData)) return
    userData(userName)
})

searchBox.addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if (searchBoxEmpty(userName)) return
        if (userNotFound(userData)) return
        userData(userName)
    }
})

async function userData(userName) {
    const userData = await getUser(userName)

    userNotFound(userData)
    errorToData(userData)

    user.setInfo(userData)
    screen.setScreen(user)
    screen.setJoinedData(user)
}

darkModeFunction()






