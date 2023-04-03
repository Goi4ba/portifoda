import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

//Routos
import Home from './routos/Home.js'
import PortfolioNormal from './routos/PortfolioNormal.js'
import Portfoliotop from './routos/Portfoliotop.js'

import Navbar from './componentes/NavPagina'

function App() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/PortfolioNormal" exact element={<PortfolioNormal />}/>
                <Route path="/Portfoliotop" exact element={<Portfoliotop />}/>
            </Routes>

        </Router>
        )
}

export default App;


