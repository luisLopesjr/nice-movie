import Button from '../../components/Button'
import { getImages } from '../../utils/getimages'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMovies, getPopularMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeople } from "../../services/getData"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, seTopMovies] = useState()
    const [topSeries, seTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularMovies, setPopularMovies] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {       
        async function getAllData() {            
            
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPopularMovies(),
                getTopPeople()
            ])
            .then(([movies, topMovies, topSeries, popularSeries, popularMovies, topPeople]) => {
                setMovie(movies)
                seTopMovies(topMovies)
                seTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setPopularMovies(popularMovies)
                setTopPeople(topPeople)
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
            {popularSeries && <Slider info={popularSeries} title='Series Populares' isMovie={false}/>}
            {topMovies && <Slider info={topMovies} title='Top Filmes' isMovie={true}/>}
            {topSeries && <Slider info={topSeries} title='Top Series' isMovie={false}/>}
            {/* {topPeople && <Slider info={topPeople} title='Top Artistas' />} */}
        </>
    )
}

export default Home