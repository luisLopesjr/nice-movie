import Button from '../../components/Button'
import { getImages } from '../../utils/getimages'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSeries, getTopSeries, getPopularSeries, getSeriesAirToday, getSeriesAirNext } from "../../services/getData"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [serie, setSerie] = useState()    
    const [topSeries, seTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()    
    const [seriesAirToday, setSeriesAirToday] = useState()
    const [seriesAirNext, setSeriesAirNext] = useState()
    const navigate = useNavigate()

    useEffect(() => {           

        async function getAllData() {            
            
            Promise.all([
                getSeries(),                
                getTopSeries(),
                getPopularSeries(),
                getSeriesAirToday(),
                getSeriesAirNext()
               
            ])
            .then(([series, topSeries, popularSeries, air, next]) => {
                setSerie(series)                
                seTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setSeriesAirToday(air) 
                setSeriesAirNext(next)              
            })
            .catch((error) => console.error(error))
        }       
        getAllData()    
      
    }, [])

    return (
        <>
            {serie && (
                <Background img={getImages(serie.backdrop_path)}>
                    
                    <Container>
                        <Info>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalheseries/${serie.id}`)}>Detalhes</Button>
                                {/* <Button red={false} onClick={() => setShowModal(true)}>
                                    Assista ao trailer</Button> */}
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt="capa-da-serie" src={getImages(serie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}

            {popularSeries && <Slider info={popularSeries} title='Series Populares' isMovie={false}/>}            
            {topSeries && <Slider info={topSeries} title='Top Series' isMovie={false}/>}
            {seriesAirToday && <Slider info={seriesAirToday} title='No ar hoje' isMovie={false}/>}
            {seriesAirNext && <Slider info={seriesAirNext} title='No ar na semana' isMovie={false}/>}
            
        </>
    )
}

export default Home