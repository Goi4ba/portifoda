import pessoa from './img/pessoa.png'
import gitHub from './img/GitHub.png'
const PortfolioNormal=()=> {
    return(
        <>
            <div className='Home'>
                <img src={pessoa} className='PessoaA'/>
            </div>
            <div className='fala'>
                <h1>Experiência: </h1>
                <h2>-PHP</h2>
                <h2>-python</h2>
                <h2>-javascript</h2>
                <h1>Link: </h1>
                <a href='https://github.com/Goi4ba'><img src={gitHub} className='img1'/></a>
            </div>
        </>
    )
}
export default PortfolioNormal