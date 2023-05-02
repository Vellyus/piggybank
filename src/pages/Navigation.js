import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { NewSpending } from "./NewSpending"
import { Expenses } from "./Expenses"
import { Spending } from "./Spending"
import { NotFound } from "./NotFound"


export function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Főoldal</NavLink></li>
          <li><NavLink to="/new-spending">Új költés</NavLink></li>
          <li><NavLink to="/expenses">Költések</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/new-spending" element={ <NewSpending /> } />
        <Route path="/expenses" element={ <Expenses /> } />
        <Route path="/expenses/:id" element={ <Spending /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}