import Button from '../../components/Button'
import { getImages } from '../../utils/getimages'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMovies2, getPopularMovies, getTopMovies, getMoviesUpcoming, getMoviesNowplaying} from "../../services/getData"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, seTopMovies] = useState()
    const [popularMovies, setPopularMovies] = useState()
    const [upcomingMovies, setUpcomingMovies] = useState()
    const [nowplayingMovies, setNowplayingMovies] = useState()
    const navigate = useNavigate()

    useEffect(() => {           

        async function getAllData() {            
            
            Promise.all([
                getMovies2(),
                getTopMovies(),                
                getPopularMovies(),
                getMoviesUpcoming(),
                getMoviesNowplaying(),
            ])
            .then(([movies, topMovies, popularMovies, upcoming, nowplaying]) => {
                setMovie(movies)
                seTopMovies(topMovies)                
                setPopularMovies(popularMovies)
                setUpcomingMovies(upcoming)
                setNowplayingMovies(nowplaying)
            })
            .catch((error) => console.error(error))
        }       
        getAllData()    
      
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhefilmes/${movie.id}`)}>Detalhes</Button>
                                {/* <Button red={false} onClick={() => setShowModal(true)}>
                                    Assista ao trailer</Button> */}
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}

            {popularMovies && <Slider info={popularMovies} title='Filmes Populares' isMovie={true}/>}            
            {topMovies && <Slider info={topMovies} title='Top Filmes' isMovie={true}/>}          
            {nowplayingMovies && <Slider info={nowplayingMovies} title='Em Exibição' isMovie={true}/>}
            {upcomingMovies && <Slider info={upcomingMovies} title='Em Breve' isMovie={true}/>}
        </>
    )
}

export default Home