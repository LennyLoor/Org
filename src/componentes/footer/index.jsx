import './footer.css'

const Footer =()=>{
    return  <footer className='footer' style={{backgroundImage: 'url(/img/Footer.svg)'}}>
                <div className='redes'>
                    <a href=''>
                        <img src='/img/redes-sociales/facebook.png' alt='Facebook'/>
                    </a>
                    <a href=''>
                        <img src='/img/redes-sociales/twitter.png' alt='Twitter'/>
                    </a>
                    <a href=''>
                        <img src='/img/redes-sociales/instagram.png' alt='Instagram'/>
                    </a>
                </div>
                <img src='/img/Logo.svg' alt='org' />
                <strong>Desarrollado por Lenny Loor</strong>
            </footer>
}

export default Footer