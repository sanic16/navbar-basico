import { FaBars, FaReact, FaTimes } from 'react-icons/fa'
import './navbar.css'
import { MenuData } from '../utils/data'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)  
  return (
    <nav className='navbarItems'>
        <h1 className='logo'>
            React <FaReact />
        </h1>
        <div className='menu-icons'>
            <button
                onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
        <ul className={`nav-menu ${isOpen ? 'show' : 'hide'}`}>
            {
                MenuData.map(item => (
                    <li key={item.id}>
                        <a href={item.url} className={item.class}>
                            { item.icon && <item.icon /> }
                            { item.title }
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar