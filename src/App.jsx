import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from "./router/router.jsx"

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
