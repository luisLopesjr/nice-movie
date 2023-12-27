import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../components/Detail'
import DetailSeries from '../components/DetailSeries'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhefilmes/:id' element={<Detail />} />
                <Route path='/detalheseries/:id' element={<DetailSeries />} />
                
            </Route>
        </Routes>
    )
}

export default Router