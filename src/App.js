import { RootLayout } from "./pages/RootLayout"
import { Home } from "./pages/Home"
import { NewSpending } from "./pages/NewSpending"
import { Expenses } from "./pages/Expenses"
import { EditSpending } from "./pages/EditSpending"
import { NotFound } from "./pages/NotFound"
import { loader as expensesLoader } from "./pages/ExpenseItems"
import { RouterProvider } from "react-router-dom"
import { createHashRouter } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new-spending", element: <NewSpending /> },
      { path: "/expenses", element: <Expenses />, loader: expensesLoader },
      { path: "/expenses/:id", element: <EditSpending /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={ router } />
}

export default App