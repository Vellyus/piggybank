import { addNewSpending } from "../apiService"
import { useState } from "react"

export function NewSpending() {
  const [formData, setFormData] = useState(null)
  const [submit, setSubmit] = useState(false)

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      addNewSpending(crypto.randomUUID(), formData.product, formData.date, formData.amount)
      document.querySelector("#newSpendingForm").reset()
      setSubmit(!submit)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormReset = () => {
    setSubmit(!submit)
  }

  return (
    <main>
      <h2>Új költés</h2>

      { !submit ? (
        <form onSubmit={ e => handleSubmit(e) } id="newSpendingForm" action="submit-form.php" method="post">
          <label htmlFor="product">Tétel:
            <input onChange={ (e, key) => handleInputChange(e, key = "product") } type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken" /></label>

          <label htmlFor="date">Dátum:
            <input onChange={ (e, key) => handleInputChange(e, key = "date") } type="date" id="date" name="date" placeholder="Dátum" /></label>

          <label htmlFor="amount">Összeg:
            <input onChange={ (e, key) => handleInputChange(e, key = "amount") } type="number" id="amount" name="amount" placeholder="HUF" /></label>

          <button type="submit" value="Submit">Mentés</button>
        </form>
      ) : (<div className="submitted">
        <h3>Sikeresen mentve!</h3>
        <button onClick={ () => handleFormReset() }>Új költés</button>
      </div>) }
    </main>
  )
}