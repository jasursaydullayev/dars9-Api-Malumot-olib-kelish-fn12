import { useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from './layout/RootLayout'
import {Cards} from "./components/Cards"
import Card from './pages/Card'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Cards />
        },
        {
          path: '/:id',
          element: <Card />
        }
      ]
    }
  ])
return(
<RouterProvider router={routes}></RouterProvider>
)
}

export default App