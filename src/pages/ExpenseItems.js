import { useEffect, useState } from "react"
import { getData } from "../apiService"
import { dbUrl } from "../constant"

export function ExpenseItems() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await getData(dbUrl + ".json")
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <>
      { data && Object.keys(data).map((e, i) => {
        return (
          <li key={ i }>{ data[e].date } | { data[e].item } | { data[e].amount } </li>
        )
      }) }
    </>
  )
}