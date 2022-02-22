//fetch api

const { createElement } = require("react");

const apiKey = "4MV5j7PtBbCQKv1MU2F8W42BeOh7m9iG";


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp =>resp.json())
    .then(({data} )=> {
        const {url}=data.images.original;
        
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    })

.catch(console.warn);
