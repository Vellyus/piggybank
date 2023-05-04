import { NavLink, useParams } from "react-router-dom"
import { dbUrl } from "../constant"

export function Spending() {
  const { id } = useParams()

  return (
    <li> <NavLink to={ `${ dbUrl }${ id }.json` }>{ id }</NavLink></li>
  )
}