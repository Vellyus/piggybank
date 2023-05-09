import { useEffect, useState } from "react"
import { getData } from "../apiService"
import { dbUrl } from "../constant"
import { useLoaderData } from "react-router-dom"

export function ExpenseItems() {
  const [data, setData] = useState(null)
  const loaderData = useLoaderData()

  useEffect(() => {
    setData(loaderData)
  }, [loaderData])

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Dátum</th>
            <th>Tétel</th>
            <th>Összeg</th>
            <th></th>
          </tr>
          { data && Object.keys(data).map(e => {
            return (<>
              <tr key={ e } >
                <td>{ data[e].date }</td>
                <td>{ data[e].item } </td>
                <td>{ data[e].amount }</td>
                <td className="bold">Törlés | Módosítás</td>
              </tr>
            </>
            )
          }) }
        </tbody>
      </table>
    </>
  )
}

export function loader() {
  return getData(dbUrl + ".json")
}