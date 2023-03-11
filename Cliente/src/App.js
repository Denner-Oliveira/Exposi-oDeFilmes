import './App.css';
import { useEffect, useState } from 'react';
import FilmeLinha from './components/FilmeLinha';
import Header from './components/Header';
import Loading from './components/Loading';
import Pesquisa from './components/Pesquisa';
import Valores from './Filmes';

export default function App() {

  const [data,setData] = useState([]);
  const [pesquisa,setPesquisa] = useState([]);
  const arr = [];

  useEffect(()=>{
    setTimeout(()=>{ 
      Valores().then(res=>setData(res));
      const search = document.querySelector('#button');
      search.addEventListener('click',click);
    },1000)
  },[])

   function click(){
    arr.length = 0;
    const filtro = document.querySelector('#superior_nav input').value.toLowerCase();
    setPesquisa(filtro)
  }

  return (
    <div className="App">
      <Header/>

      {pesquisa.length >0 && 
        data.map((genero) =>{
          return genero.map((filme) => {if(filme.nome.toLowerCase().includes(pesquisa)) arr.push(filme)})
        })
      }

      {arr.length > 0 && 
        <Pesquisa props={arr}/>
      }

      {arr.length === 0 && 
        <section className='container'>
          {data.length > 0 ? data.map((element,key)=>(
            <FilmeLinha prop={element} key={key}/>
          )):
            <Loading/>
          }
        </section>
      }
      
      <footer className='footer'>
        <span></span>
      </footer>
    </div>
  )
}
