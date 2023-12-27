import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Slider from '../Slider'
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import { getSerieById, getSerieCredits, getSerieSimilar } from "../../services/getData"
import { getImages } from "../../utils/getimages"
import SpanGenres from "../SpanGenres"
import Credits from "../Credits"

function Detail() {
    const { id } = useParams()
    const [serie, setSerie] = useState()    
    const [serieCredits, setSerieCredits] = useState()
    
    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getSerieById(id),                
                getSerieCredits(id),
                getSerieSimilar(id)

            ])
                .then(([series, credits, similar]) => {
                    setSerie(series)                    
                    setSerieCredits(credits)
                    setSerieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }
        getAllData()

    }, [])
    
    return (
        <>
            {serie && (
                <>
                    <Background image={getImages(serie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(serie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{serie.name}</h2>
                            <SpanGenres genres={serie.genres} />
                            <p>{serie.overview}</p>
                            <div>
                                <Credits credits={serieCredits} />
                            </div>
                        </Info>
                    </Container>                    
                </>
            )}
        </>

    )
}

export default Detail



