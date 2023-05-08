import { useState } from "react"

export function NewSpending() {
  const [formData, setFormData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      product: e.target.elements.product.value,
      date: e.target.elements.date.value,
      amount: e.target.elements.amount.value,
    })
  }

  return (
    <main>
      <h2>Új költés</h2>

      <form onSubmit={ (e) => handleSubmit(e) } id="newSpendingForm" action="submit-form.php" method="post">
        <label htmlFor="product">Tétel:
          <input type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken"></input></label>


        <label htmlFor="date">Dátum:
          <input type="date" id="date" name="date" placeholder="Dátum"></input></label>

        <label htmlFor="amount">Összeg:
          <input type="number" id="amount" name="amount" placeholder="HUF"></input></label>


        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}