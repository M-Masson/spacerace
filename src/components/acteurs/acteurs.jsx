import esa from '../../assets/img/fusee-esa.png'
import ispace from '../../assets/img/satellite-ispace.png'
import spacex from '../../assets/img/capsule-spacex.png'
import gama from '../../assets/img/satellite-gama.png'
import blue from '../../assets/img/fusee-blue.png'
import promethee from '../../assets/img/planete_promethee.png'
import nasa from '../../assets/img/fusee-nasa.png'
import moon from '../../assets/img/satellite-moon.png'
import fondBlanc from '../../assets/img/fond-carre-blanc.png'
import fondJaune from '../../assets/img/fond-carre-jaune.png'

import '../acteurs/acteurs.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const actors = [
    {title:'ESA' ,img: esa, path:""},
    {title:'I Space' ,img: ispace, path:""},
    {title:'Space X' ,img: spacex, path:""},
    {title:'Gama' ,img: gama, path:""},
    {title:'Blue Origin' ,img: blue, path:""},
    {title:'Prométhée' ,img: promethee, path:""},
    {title:'NASA' ,img: nasa, path:""},
    {title:'Moon Express' ,img: moon, path:""}
]

function Acteurs(){
    const [hoveredActor, setHoveredActor] = useState(null);
    return(
        <section id="acteurs">
            <h2>ACTEURS</h2>
            <div id='all-block'>
                {actors.map((item, index)=>(
                    <Link 
                        key={index} className='acteur-block'
                        to={item.path}
                        onMouseEnter={() => setHoveredActor(index)}
                        onMouseLeave={() => setHoveredActor(null)}
                        style={{backgroundImage: `url(${hoveredActor === index ? fondJaune : fondBlanc})`}}
                    >
                        <img src={item.img} alt={item.title} id={`block-img-${index}`}/>
                        <p>{item.title}</p>
                        
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Acteurs