import { useState } from 'react'
import { SelectedContext } from '../hooks/selected'
import { TechnologyInfo } from '../lib/tech'
import '../styles/globals.css'
import '../styles/toggle.css'

function MyApp({ Component, pageProps }) {
  const mock: TechnologyInfo[] = []
  const [selectedItems, setSelectedItems] = useState(mock)
  return (
    <SelectedContext.Provider value={{ selectedItems, setSelectedItems }}>
      <Component {...pageProps} />
    </SelectedContext.Provider>
  )
}

export default MyApp
