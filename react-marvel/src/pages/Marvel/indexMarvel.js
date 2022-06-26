import { useEffect, useState } from "react"
import axios from "axios"

const timeStamp = '1656097826317';
const apiKey = 'f9f96a867de4ee807d740e4097757ccd'
const md5 = '550547bc83d2c9520deb8f2b6851d40c'

function SerieMarvel() {
   
        const [stories, setStories] = useState([])
        
        const [comicId, setComicAtual] = useState(1308)
        useEffect(() => {
                
                axios.get(`http://gateway.marvel.com/v1/public/comics/${comicId}?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
                .then((response) => {
                    const data = response.data.data.results
                    setStories(data)
                    
                })
                .catch((Error) => {
                    console.log(Error)
                }) 

    }, [comicId])
   
    console.log(stories)
  
    return(
        <div>
            <div>
                {stories.map((item) => (
                    <div key={item.id}>
                        <img src={item.images[0].path + '/portrait_uncanny.jpg'} alt=""/>
                        <h2>{item.title}</h2>
                        <span>{item.textObjects[0].text}</span>
                            {item.images.map(fotos => 
                            <div>
                                <img src={fotos.path + '/portrait_medium.jpg'} alt=""/>
                            </div> 
                            )}
                        
                    </div>

                ))}
            </div>
            <button onClick={() => setComicAtual(comicId - 1)}>Voltar</button>
            <button onClick={() => setComicAtual(comicId + 1)}>Avançar</button>
        </div>
        
    )
}

export default SerieMarvel;