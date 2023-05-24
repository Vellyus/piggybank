import { useEffect, useState } from "react"
import { getData } from "../apiService"
import { dbUrl } from "../constant"
import { useLoaderData, NavLink } from "react-router-dom"
import { removeSpending } from "../apiService"

export function ExpenseItems() {
  const [data, setData] = useState(null)
  const loaderData = useLoaderData()

  useEffect(() => {
    setData(loaderData)
  }, [loaderData])

  const handleRemoveItem = (id) => {
    removeSpending(id)

    setData(prevData => {
      const temp = { ...prevData }
      delete temp[id]
      return temp
    })
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Dátum</th>
          <th>Tétel</th>
          <th>Összeg</th>
          <th></th>
        </tr>
        { data && Object.keys(data).map(e => {
          return (
            <tr key={ e } >
              <td>{ data[e].date }</td>
              <td>{ data[e].item } </td>
              <td>{ data[e].amount }</td>
              <td className="bold"><span className="removeItem" onClick={ () => handleRemoveItem(e) }>Törlés</span> | <NavLink to={ `/expenses/${ e }` } state={ {
                id: e,
                date: data[e].date,
                product: data[e].item,
                amount: data[e].amount
              } }
                className={ "editSpendingLink" }>Módosítás</NavLink></td>
            </tr>
          )
        }) }
      </tbody>
    </table>
  )
}

export function loader() {
  return getData(dbUrl + ".json")
}