import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';

function RouteSwitch() {
    return(
        <HashRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;
