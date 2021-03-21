import { createContext } from 'react'
import { TechnologyInfo } from '../lib/tech'

export const SelectedContext = createContext(
  {} as {
    selectedItems: TechnologyInfo[]
    setSelectedItems: React.Dispatch<React.SetStateAction<TechnologyInfo[]>>
  }
)
