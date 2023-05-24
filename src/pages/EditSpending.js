import { addNewSpending } from "../apiService"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function EditSpending() {
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(location.state)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const productInputRef = useRef("productInput")
  const dateInputRef = useRef("date")
  const amountInputRef = useRef("amount")

  useEffect(() => {
    productInputRef.current.value = formData.product
    dateInputRef.current.value = formData.date
    amountInputRef.current.value = formData.amount
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

      <form onSubmit={ handleSubmit } id="newSpendingForm" action="submit-form.php" method="post">
        <label htmlFor="product">Tétel:
          <input onChange={ handleInputChange } type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken" ref={ productInputRef } /></label>

        <label htmlFor="date">Dátum:
          <input onChange={ handleInputChange } type="date" id="date" name="date" placeholder="Dátum" ref={ dateInputRef } /></label>

        <label htmlFor="amount">Összeg:
          <input onChange={ handleInputChange } type="number" id="amount" name="amount" placeholder="HUF" ref={ amountInputRef } /></label>

        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}