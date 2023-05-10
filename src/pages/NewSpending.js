import { addNewSpending } from "../apiService"

export function NewSpending() {
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const product = e.target.elements.product.value
      const date = e.target.elements.date.value
      const amount = e.target.elements.amount.value

      addNewSpending(crypto.randomUUID(), product, date, amount)
      document.querySelector("#newSpendingForm").reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <h2>Új költés</h2>

      <form onSubmit={ (e) => handleSubmit(e) } id="newSpendingForm" action="submit-form.php" method="post">
        <label htmlFor="product">Tétel:
          <input type="text" id="product" name="product" placeholder="Piros zsiráf kerekeken" /></label>


        <label htmlFor="date">Dátum:
          <input type="date" id="date" name="date" placeholder="Dátum" /></label>

        <label htmlFor="amount">Összeg:
          <input type="number" id="amount" name="amount" placeholder="HUF" /></label>


        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}