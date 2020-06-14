const FetchSingleShow = (id) => {
    return (
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(resonse => response.json())
    )
}

export { FetchSingleShow };