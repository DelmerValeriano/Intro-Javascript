//async

const getImage = async()=>{

    try{
        const apiKey = "4MV5j7PtBbCQKv1MU2F8W42BeOh7m9iG";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}= await resp.json();
        const {url}=data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    }catch(error){
        //manejo
    }

}

getImage();