import { addNewSpending } from "../apiService"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function EditSpending() {
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(location.state)

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value })
  }

  useEffect(() => {
    const productInput = document.querySelector("#product")
    const dateInput = document.querySelector("#date")
    const amountInput = document.querySelector("#amount")

    productInput.value = formData.product
    dateInput.value = formData.date
    amountInput.value = formData.amount
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      addNewSpending(formData.id, formData.product, formData.date, formData.amount)
      navigate("/expenses")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <h2>Költés módosítása</h2>

      <form onSubmit={ e => handleSubmit(e) } id="newSpendingForm" action="submit-form.php" method="post">
        <label htmlFor="product">Tétel:
          <input onChange={ (e, key) => handleInputChange(e, key = "product") } type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken" /></label>

        <label htmlFor="date">Dátum:
          <input onChange={ (e, key) => handleInputChange(e, key = "date") } type="date" id="date" name="date" placeholder="Dátum" /></label>

        <label htmlFor="amount">Összeg:
          <input onChange={ (e, key) => handleInputChange(e, key = "amount") } type="number" id="amount" name="amount" placeholder="HUF" /></label>

        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}