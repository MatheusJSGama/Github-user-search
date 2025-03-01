const userContainer = document.querySelector(".user-response-container")
const errorMessage = document.querySelector(".error-message")

function userNotFound(userData) {
    if (userData.status === "404") {
        errorMessage.innerHTML = "ERRO: Usuário não encontrado, tente novamente."
        userContainer.classList.remove("show")
        errorMessage.classList.remove("close-error")
        return true
    }
}

function searchBoxEmpty(userName) {
    if (userName === "") {
        errorMessage.innerHTML = "ERRO: Campo de pesquisa vazio, tente novamente."
        userContainer.classList.remove("show")
        errorMessage.classList.remove("close-error")
        return true
    }
}

function errorToData(userData) {
    if (userData.status !== "404") {
        userContainer.classList.add("show")
        errorMessage.classList.add("close-error")
    }
}

export { userNotFound, searchBoxEmpty, errorToData }