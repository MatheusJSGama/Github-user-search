async function getUser(userName) {
    const url = await fetch(`https://api.github.com/users/${userName}`)
    return await url.json()
}

export { getUser }
