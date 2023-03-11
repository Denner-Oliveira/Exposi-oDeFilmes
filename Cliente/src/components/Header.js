import './Header.css'
import { BiSearchAlt } from 'react-icons/bi';

export default function Header(){

    return(
        <header className='header'>
            <img className='logo' src="http://via.placeholder.com/40" alt="logo" />
            <nav id='superior_nav'>
                <input type="text" placeholder='Pesquisar' />
                <button id='button'><BiSearchAlt id='search'/></button>
            </nav>
        </header>
    )
}