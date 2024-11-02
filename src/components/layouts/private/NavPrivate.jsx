import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/img/default.png'

const NavPrivate = () => {
  return (
    <nav className="navbar__container-lists">

      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <a href='#' className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Inicio</span>
          </a>
        </li>

        <li className="menu-list__item">
          <NavLink to='feed' className="menu-list__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Timeline</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
          <NavLink to='gente' className="menu-list__link">
            <i className="fa-solid fa-users"></i>
            <span className="menu-list__title">Gente</span>
          </NavLink>
        </li>
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <div className="img-avatar-nav">
            <img src={avatar} className='list-end__img' alt="imagen de perfil" />
          </div>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <span className="list-end__name">nick</span>
          </a>
        </li>
        <li className="list-end__item">
          <NavLink to='ajustes' className="list-end__link">
            <i className="fa-solid fa-gear"></i>
            <span className="list-end__name">Ajustes</span>
          </NavLink>
        </li>
        <li className="list-end__item">
          <a href='#' className="list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Cerrar sesión</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default NavPrivate