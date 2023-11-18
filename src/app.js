import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import ThemeProvider from 'src/theme'
import Router from 'src/routes/routes'

function App() {
  const router = Router()
  return (
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
