const user = {
    image: "",
    name: "",
    userName: "",
    joined: "",
    bio: "",
    repositories: "",
    followers: "",
    following: "",
    email: "",
    location: "",
    portfolio: "",
    company: "",
    setInfo(userData) {
        this.image = userData.avatar_url
        this.name = userData.name
        this.userName = userData.login
        this.joined = userData.created_at
        this.bio = userData.bio
        this.repositories = userData.public_repos
        this.followers = userData.followers
        this.following = userData.following
        this.email = userData.email
        this.location = userData.location
        this.portfolio = userData.blog
        this.company = userData.company
    }
}

export { user }