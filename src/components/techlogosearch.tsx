import { TechnologyInfo } from '../lib/tech'
import { useContext, useState } from 'react'
import { SelectedContext } from '../hooks/selected'

type Props = {
  category: string
  techs: TechnologyInfo[]
  darkMode: boolean
  isDisplayName: boolean
}

export const TechLogoSearch: React.FC<Props> = (props) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedContext)
  const [count, setCount] = useState(0)
  const [arrayLength] = useState(props.techs.length)

  if (count >= arrayLength) {
    return null
  } else {
    return (
      <div className="border-b">
        <div className="">
          <p className="mt-4 ml-8 text-lg font-medium text-gray-500">
            ~{props.category}~
          </p>
          <div className="flex flex-wrap justify-center pb-5">
            {props.techs.map(
              ({ name, url, hasDarkmode, darkmodeUrl }, index) => {
                return (
                  <div className={' select-none'} key={url + name}>
                    <div className="mx-3">
                      <button
                        className="mx-4 mt-4 duration-300 transform cursor-pointer hover:scale-150"
                        onClick={() => {
                          let alreadyExsit = false
                          selectedItems.forEach((technology) => {
                            if (name === technology.name) {
                              alreadyExsit = true
                            }
                          })

                          if (alreadyExsit) {
                            const tempItems: TechnologyInfo[] = [
                              ...selectedItems
                            ]
                            props.techs.splice(index, 1)
                            setSelectedItems(tempItems)
                          } else {
                            const tempItems: TechnologyInfo[] = [
                              ...selectedItems,
                              {
                                url: url,
                                name: name,
                                hasDarkmode: hasDarkmode,
                                darkmodeUrl: darkmodeUrl
                              }
                            ]
                            props.techs.splice(index, 1)
                            setCount(count + 1)
                            setSelectedItems(tempItems)
                          }
                        }}
                      >
                        <img
                          src={url}
                          alt={name}
                          height={24}
                          width={24}
                          className={`w-6 h-6 pointer-events-none mx-1 mt-1`}
                        />
                      </button>
                    </div>
                    <p className="h-3 pt-1 text-xs font-light text-center">
                      {props.isDisplayName ? name : ''}
                    </p>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    )
  }
}
