import { NavLink } from "react-router-dom"

export function Navigation() {
  return (
    <nav>
      <h2>Menü</h2>
      <ul>
        <li><NavLink to="/">Főoldal</NavLink></li>
        <li><NavLink to="/new-spending">Új költés</NavLink></li>
        <li><NavLink to="/expenses">Költések</NavLink></li>
      </ul>
    </nav>
  )
}