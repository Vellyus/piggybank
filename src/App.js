import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewSpending } from "./pages/NewSpending"
import { Expenses } from "./pages/Expenses"
import { NotFound } from "./pages/NotFound"

function App() {
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
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App