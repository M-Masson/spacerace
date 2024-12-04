import faceBook from '../../assets/svg/facebook.svg'
import logoX from '../../assets/svg/x.svg'
import instagram from '../../assets/svg/instagram.svg'

import logoFusee from '../../assets/svg/logo_fusee.svg' 
import logoTypo from '../../assets/svg/logo_typo.svg'

import './header.css'


function Header(){
    return(
        <header>
            <a href="" id='btn-home'>
                <img src={logoFusee} alt="fusée" id='home-fusee'/>
                <img src={logoTypo} alt="typo" id='home-typo'/>
            </a>
            <div id='social'>
                <a href=""><img src= {faceBook} alt="facebook" /></a>
                <a href=""><img src={logoX} alt="logo X" /></a>
                <a href=""><img src={instagram} alt="instagram" /></a>
            </div>
        </header>
    )
}
export default Header