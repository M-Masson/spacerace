import logoCiel from '../../assets/svg/logo-ciel-espace.svg'
import '../ciel-espace/ciel-espace.css'

function CielEspace(){
    return(
        <div id='cielEspace'>
            <p>Site satellite de</p>
            <a href=""><img src={logoCiel} alt="ciel & espace" id='logo-ciel-espace' /></a>
        </div>
    )
}
export default CielEspace