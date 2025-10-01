import { Link } from 'react-router-dom'
import {navLinks} from '../../config/navLinks'
import style from './NavBar.module.css'

export default function NavBar() {

    return (
        
        <nav className={style.header_nav}>
            {
                navLinks.map((item)=>(
                    <Link 
                        to={item.path}
                        key={item.name}
                        className={`${style[item.name]} ${style.navLink}`}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </nav>
    )
}
