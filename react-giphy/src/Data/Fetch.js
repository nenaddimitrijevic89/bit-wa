import React from 'react';

const FetchData = (input) => {
    const key = 'mdSHKQslrM80fxge8HjyMeJ4K4B3qF9E';
    return (
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${key}&limit=15`)
            .then(response => response.json())
    )
}


export { FetchData };