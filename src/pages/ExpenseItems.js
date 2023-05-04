import { useEffect, useState } from "react"
import { getData } from "../apiService"

export function ExpenseItems() {
  const [data, setData] = useState(null)

  const dbUrl = "https://piggy-bank-7eaa5-default-rtdb.europe-west1.firebasedatabase.app/.json"

  useEffect(() => {
    async function fetchData() {
      const data = await getData(dbUrl)
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