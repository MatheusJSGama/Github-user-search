const screen = {
    image: document.querySelector(".profile-picture"),
    name: document.querySelector(".name"),
    userName: document.querySelector(".username"),
    joined: document.querySelector(".joined"),
    bio: document.querySelector(".user-bio"),
    repositories: document.querySelector(".repos-number"),
    followers: document.querySelector(".followers-number"),
    following: document.querySelector(".following-number"),
    email: document.querySelector(".email"),
    location: document.querySelector(".location"),
    portfolio: document.querySelector(".website"),
    company: document.querySelector(".company"),
    setScreen(userObject) {
        this.image.src = userObject.image
        this.name.innerHTML = userObject.name
        this.userName.innerHTML = userObject.userName
        this.bio.innerHTML = userObject.bio
        this.repositories.innerHTML = userObject.repositories
        this.followers.innerHTML = userObject.followers
        this.following.innerHTML = userObject.following
        this.email.innerHTML = userObject.email ?? `Sem e-mail`
        this.location.innerHTML = userObject.location ?? `Sem localização`
        this.company.innerHTML = userObject.company ?? `Sem companhia`
        if (userObject.portfolio) {
            this.portfolio.innerHTML = `https://meu.site`
            this.portfolio.href = userObject.portfolio
        } else {
            this.portfolio.innerHTML = `Sem website`
        }

    },
    setJoinedData(userObject) {
        const userJoinedDate = new Date(userObject.joined)
        const formato = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
        const formattedDate = formato.format(userJoinedDate)
        this.joined.innerHTML = `Entrou em: ${formattedDate}`
    }
}

export { screen }