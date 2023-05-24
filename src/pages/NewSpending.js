import { addNewSpending } from "../apiService"
import { useState, useRef } from "react"

export function NewSpending() {
  const [formData, setFormData] = useState(null)
  const [submit, setSubmit] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      addNewSpending(crypto.randomUUID(), formData.product, formData.date, formData.amount)
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
        <form onSubmit={ handleSubmit } id="newSpendingForm" action="submit-form.php" method="post">
          <label htmlFor="product">Tétel:
            <input onChange={ handleInputChange } type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken" /></label>

          <label htmlFor="date">Dátum:
            <input onChange={ handleInputChange } type="date" id="date" name="date" placeholder="Dátum" /></label>

          <label htmlFor="amount">Összeg:
            <input onChange={ handleInputChange } type="number" id="amount" name="amount" placeholder="HUF" /></label>

          <button type="submit" value="Submit">Mentés</button>
        </form>
      ) : (<div className="submitted">
        <h3>Sikeresen mentve!</h3>
        <button onClick={ handleFormReset }>Új költés</button>
      </div>) }
    </main>
  )
}