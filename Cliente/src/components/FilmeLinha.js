import './FilmeLinha.css'
import { FiArrowRightCircle,FiArrowLeftCircle } from 'react-icons/fi';
import { useState } from 'react';

export default function FilmeLinha({prop}){

    const [margin,setMargin] = useState(0);
    
    function esquerda(){
        if (margin > -((prop.length-1) *220)) setMargin(margin - 220);
    }

    function direita(){
        if (margin !== 0) setMargin(margin + 220)
    }

    return(
        <div className='filmes'>
            <h1 className="titulo">{prop[0].genero} </h1>
            <div className="filmes-linha" style={{width:prop.length * 220,marginLeft:margin}}>
                <FiArrowLeftCircle onClick={esquerda} className='esquerda'/>
                {prop.map((element,key)=>(
                    <li key={key} className="filme-container">
                        <img src={element.poster} alt={element.nome} />
                        <span>{element.nome}</span>
                    </li>
                ))}
                <FiArrowRightCircle onClick={direita} className='direita'/>
            </div>
        </div>
    )
}