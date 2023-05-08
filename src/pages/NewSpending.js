export function NewSpending() {
  return (
    <main>
      <h2>Új költés</h2>

      <form id="newSpendingForm" action="submit-form.php" method="post">
        <label htmlFor="item">Tétel:
          <input type="text" id="item" name="item" placeholder="Piros zsiráf kerekeken"></input></label>

        <label htmlFor="date">Dátum:
          <input type="date" id="date" name="date" placeholder="Dátum"></input></label>

        <label htmlFor="amount">Összeg:
          <input type="number" id="amount" name="amount" placeholder="HUF"></input></label>


        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}