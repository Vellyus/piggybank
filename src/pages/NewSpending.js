export function NewSpending() {
  return (
    <main>
      <h2>Új költés</h2>

      <form id="newSpendingForm" action="submit-form.php" method="post">
        <label for="item">Tétel:
          <input type="text" id="item" name="item"></input></label>

        <label for="date">Dátum:
          <input type="date" id="date" name="date"></input></label>

        <label for="amount">Összeg:
          <input type="number" id="amount" name="amount"></input></label>


        <button type="submit" value="Submit">Mentés</button>
      </form>
    </main>
  )
}