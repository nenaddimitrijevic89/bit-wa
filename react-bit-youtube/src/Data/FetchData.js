const key = 'AIzaSyBxYIdhCX-NAeSC1kcVGtmtuzesGHHD42o';

const FetchData = (input) => {
    return (
        fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&q=${input}&key=${key}`)
            .then(response => response.json())
    )
}

const fetchRelated = (id) => {
    return (
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${id}&type=video&key=${key}`)
            .then(response => response.json())
    )
}

export { FetchData, fetchRelated };