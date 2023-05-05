import { Navigation } from "./Navigation"
import { Outlet } from "react-router-dom"

export function RootLayout() {
  return (
    <>
      <h1>Malacka házipénztár</h1>
      <div className="wrapper">
        <Navigation />
        <Outlet />
      </div>
    </>
  )
}