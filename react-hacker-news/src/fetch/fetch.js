const fetchId = () => {
    return (
        fetch(' https://hacker-news.firebaseio.com/v0/topstories.json ')
        .then(response => response.json())
    )
}

const fetchNews = (id) => {
    return (
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
    )
}

export { fetchId, fetchNews };