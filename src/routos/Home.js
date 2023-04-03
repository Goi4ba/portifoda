import pessoa from './img/pessoa.png'
import olho from './img/Frame2olho.png'
const Home =()=>{
    return(
        <>
            <div className='Home'>
                <img src={pessoa} className='PessoaA'/>
            </div>
            <div className='fala'>
                <h1 className='meio'>Bem vindo ao portfólio de Dhomennyk.</h1>
                <h2 className='meio'>Dhomennyk é um aluno de informática que gosta da área da programação que já melhorou projetos de outras pessoa  e criou outros projetos </h2>
            </div>
        </>
    )
}
export default Home