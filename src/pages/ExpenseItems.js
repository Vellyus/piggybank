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
      { data && Object.keys(data).map((e, i) => {
        return (
          <li key={ i }>{ data[e].date } | { data[e].item } | { data[e].amount } </li>
        )
      }) }
    </>
  )
}

export function loader() {
  return getData(dbUrl + ".json")
}