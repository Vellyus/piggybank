import { useEffect, useState } from "react"

export function FetchData() {
  const [data, setData] = useState(null)

  const dbUrl = "https://piggy-bank-7eaa5-default-rtdb.europe-west1.firebasedatabase.app/.json"

  useEffect(() => {
    async function getData(url) {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getData(dbUrl)
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