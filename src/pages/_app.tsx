import { useState } from 'react'
import { SelectedContext } from '../hooks/selected'
import '../styles/globals.css'
import '../styles/toggle.css'

function MyApp({ Component, pageProps }) {
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <SelectedContext.Provider value={{ selectedItem, setSelectedItem }}>
      <Component {...pageProps} />
    </SelectedContext.Provider>
  )
}

export default MyApp
