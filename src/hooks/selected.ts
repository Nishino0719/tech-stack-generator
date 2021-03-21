import { createContext } from 'react'
import { TechnologyInfo } from '../lib/tech'

export const SelectedContext = createContext(
  {} as {
    selectedItem: TechnologyInfo
    setSelectedItem: React.Dispatch<React.SetStateAction<TechnologyInfo>>
  }
)
