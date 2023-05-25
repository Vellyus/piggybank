import { addOrEditSpending } from "../apiService"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function EditSpending() {
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(location.state)

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      addOrEditSpending(
        formData.id,
        formData.product,
        formData.date,
        formData.amount
      ).then((response) => { navigate("/expenses", { replace: true }) })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <h2>Költés módosítása</h2>
      <form
        onSubmit={ handleSubmit }
        id="newSpendingForm"
        action="submit-form.php"
        method="post"
      >
        <label htmlFor="product">
          Tétel:
          <input
            onChange={ handleInputChange }
            type="text"
            id="product"
            name="product"
            defaultValue={ formData?.product }
            placeholder="Piros zsiráf kerekeken"
          />
        </label>

        <label htmlFor="date">
          Dátum:
          <input
            onChange={ handleInputChange }
            type="date"
            id="date"
            name="date"
            placeholder="Dátum"
            defaultValue={ formData?.date }
          />
        </label>

        <label htmlFor="amount">
          Összeg:
          <input
            onChange={ handleInputChange }
            type="number"
            id="amount"
            name="amount"
            placeholder="HUF"
            defaultValue={ formData?.amount }
          />
        </label>

        <button type="submit" value="Submit">
          Mentés
        </button>
      </form>
    </main>
  )
}