import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { getImages } from "../../utils/getimages"
import SpanGenres from "../SpanGenres"
import Credits from "../Credits"
import Button from "../Button"
import Modal from "../Modal"

function Detail() {
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)

            ])
                .then(([movies, videos, credits, similar]) => {
                    setMovie(movies)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }
        getAllData()

    }, [])

    return (
        <>
            {movie && (

                <>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>                       
                        <Cover>                        
                            <img src={getImages(movie.poster_path)} />
                            <Button red={false} onClick={() => setShowModal(true)}>
                            Assista ao trailer</Button>
                        </Cover>
                        <Info>
                        
                            <h2>{movie.title}</h2>                            
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                </>
            )}
        </>

    )
}

export default Detail



