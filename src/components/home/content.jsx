import '../home/content.css'
import CielEspace from '../ciel-espace/ciel-espace'

function HomeContent (){
    return(
        <div>
            <div id='home-title'>
                <h1>SPACE RACE</h1>
                <p>Course <br/> à l'espace</p>
            </div>
            <p id='home-txt'> Informez-vous sur le nombre de
                missions effectuées par acteurs.
            </p>
            <CielEspace/>
        </div>
    )
}
export default HomeContent