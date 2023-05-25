import { getDatabase, ref, set } from "firebase/database"
import { initializeApp } from "firebase/app"
import { dbUrl } from "./constant"

const firebaseConfig = {
  databaseURL: dbUrl
}

const app = initializeApp(firebaseConfig)
const db = getDatabase()

export function addOrEditSpending(id, item, date, amount) {
  const reference = ref(db, id)
  return set(reference, {
    item: item,
    date: date,
    amount: amount
  })
}

export function removeSpending(id) {
  const reference = ref(db, id)
  set(reference, null)
}

export async function getData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}