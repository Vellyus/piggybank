import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"


export function Spending() {
  const { id } = useParams()
  const dbUrl = "https://piggy-bank-7eaa5-default-rtdb.europe-west1.firebasedatabase.app/"

  return (
    <li> <NavLink to={ `${ dbUrl }${ id }.json` }>{ id }</NavLink></li>
  )
}