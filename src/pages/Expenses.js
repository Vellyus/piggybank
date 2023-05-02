import { FetchData } from "./FetchData"

export function Expenses() {
  return (
    <>
      <main>
        <h2>Költések</h2>
        <ul>
          <FetchData />
        </ul>
      </main>
    </>
  )
}

