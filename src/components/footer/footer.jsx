import logoTypo from '../../assets/svg/logo_typo.svg'
import logoCiel from '../../assets/svg/logo-ciel-espace.svg'
import { Link } from 'react-router-dom'
import '../footer/footer.css'
import faceBook from '../../assets/svg/facebook.svg'
import logoX from '../../assets/svg/x.svg'
import instagram from '../../assets/svg/instagram.svg'

const column1 = [
    {title: "ESA", path: ""},
    {title: "I Space", path:""},
    {title: "Space X", path:""},
    {title: "Gama", path:""}
]
const column2 = [
    {title: "Blue Origin", path:""},
    {title: "Prométhée", path:""},
    {title: "Nasa", path:""},
    {title: "Moon Express", path:""}
]

function Footer(){
    return(
        <footer>
            <div id='footer'>
                <div id='footer-p1'>
                    <img src={logoTypo} alt="logo typo" id='logo-space-race-footer' />
                    <p id='footer-txt'> Ce site internet vous permet de vous
                        informer sur les dernières actualités de
                        la course à l'espace.
                    </p>
                    <div id='cielEspace'>
                        <p>Site satellite de</p>
                        <a href=""><img src={logoCiel} alt="ciel & espace" id='logo-ciel-espace' /></a>
                    </div>

                </div>
                <div id='footer-p2'>
                    <p>Acteurs</p>
                    <div id='footer-list'>
                        <div id='list-part1'>
                            {column1.map((item, index)=>
                                <Link key={index} to="">
                                    {item.title}
                                </Link>
                            )}
                        </div>
                        <div id='list-part2'>
                            {column2.map((item, index)=>
                                <Link key={index} to="">
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    
                    </div>
                </div>
                <div id='footer-social'>
                    <a href=""><img src= {faceBook} alt="facebook" /></a>
                    <a href=""><img src={logoX} alt="logo X" /></a>
                    <a href=""><img src={instagram} alt="instagram" /></a>
                </div>
            </div>
            <p id="auteur">© MASSON M</p>
        </footer>
    )
}
export default Footer
