import { useEffect, useState } from "react"
import { getData } from "../apiService"
import { dbUrl } from "../constant"
import { useLoaderData } from "react-router-dom"
import { removeSpending } from "../apiService"

export function ExpenseItems() {
  const [data, setData] = useState(null)
  let loaderData = useLoaderData()

  useEffect(() => {
    setData(loaderData)
  }, [loaderData, data])

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
                <td className="bold"><span className="removeItem" onClick={ () => {
                  console.log(data)
                  removeSpending(e)
                  // update state to rerender
                  setData(prevData => {
                    const temp = prevData
                    delete temp[`${ e }`]
                    console.log(temp)
                    return temp
                  })
                }
                }>Törlés</span> | Módosítás</td>
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