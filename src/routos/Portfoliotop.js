import pessoa from './img/pessoa.png'
const Portfoliotop = ()=> {
    return(
        <>
            <div className='Home'>
                <img src={pessoa} className='PessoaA'/>
            </div>
            <div className='fala'>
                <h1>o que eu fiz: </h1>
                <h2>-Site de elevador</h2>
                <h2>-Com python Nós fizemos um separador de impar e par</h2>
                <h2>-Com python uma calculadora de imc</h2>
                <h2>-Slide usado programação</h2>
            </div>
        </>
    )
}
export default Portfoliotop