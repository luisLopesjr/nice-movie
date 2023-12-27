import { useEffect, useState } from "react"
import { Background2, Container } from "./styles"
import { getMovieVideos } from "../../services/getData"

function Modal({ movieId, setShowModal }) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }
        getMovies()
    }, [])

    return (
        <Background2 onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title='Youtube Video Player'
                        height="500px"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background2>

    )

}
export default Modal



