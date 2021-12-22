export const getGifs = async category => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category)}&api_key=mdspMnnoKM0JRr8PWBY5QVztpy5PM2eK`;
    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map( (img ) =>{
        return {
            id: img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url
        } 
    })
    console.log('data gifs: ',gifs);
    return gifs;


}