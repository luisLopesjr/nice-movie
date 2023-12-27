import { Container } from "./styles"
import { getImages } from "../../utils/getimages"
import { useNavigate } from "react-router-dom"

function Card({ item, isMovie }) {
    const navigate = useNavigate()
    return (

        <Container onClick={() => isMovie ? (navigate(`/detalhefilmes/${item.id}`)) : 
        (navigate(`/detalheseries/${item.id}`))
        }>
            <img src={getImages(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.name}</h3>
        </Container>

    )
}

export default Card



