import { Link } from 'react-router-dom'
import frame1 from './img/Frame 1.png'
import frame2 from './img/Frame 2.png'
import frame3 from './img/Frame 3.png'

const Navbar=()=> {
    
    return(
        <div className='Menu'>
            <nav>
                    <div className='Nav1'><Link to="/PortfolioNormal"><img src={frame2}/></Link></div>
                    <div className='Nav2'><Link to="/"><img src={frame1}/></Link></div>
                    <div className='Nav3'><Link to="/Portfoliotop"><img src={frame3}/></Link></div>
            </nav>
            
        </div>
    )   
}
export default Navbar