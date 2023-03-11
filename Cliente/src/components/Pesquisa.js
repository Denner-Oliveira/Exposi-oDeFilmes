import { FiArrowRightCircle,FiArrowLeftCircle } from 'react-icons/fi';
import { useState } from 'react';
import './Pesquisa.css'

export default function Pesquisa({props}){

    const [margin,setMargin] = useState(0)
    function esquerda(){
        if (margin > -((props.length-1) *220)) setMargin(margin - 220);
    }

    function direita(){
        if (margin !== 0) setMargin(margin + 220)
    }

    return(
        <>
        <h1 className='titulo'>RESULTADOS</h1>
        <div className='pesquisa-row' style={{width:props.length*220,marginLeft:margin}}>
            <FiArrowLeftCircle onClick={esquerda} className='esquerda'/>
            {props.map((element,key)=>(
                <li key={key} className="filme-container">
                        <img src={element.poster} alt={element.nome} />
                        <span>{element.nome}</span>                  
                </li>
            ))}
            <FiArrowRightCircle onClick={direita} className='direita'/>
        </div>
        </>
    )
}