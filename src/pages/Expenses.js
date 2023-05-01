import { FetchData } from "./FetchData"

export function Expenses() {
  return (
    <>
      <h1>Költések</h1>
      <ul>
        <FetchData />
      </ul>
    </>
  )
}