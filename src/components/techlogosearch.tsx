import { TechnologyInfo } from '../lib/tech'
import { useContext } from 'react'
import { SelectedContext } from '../hooks/selected'

type Props = {
  category: string
  techs: TechnologyInfo[]
  darkMode: boolean
  isDisplayName: boolean
}

export const TechLogoSearch: React.FC<Props> = (props) => {
  const { selectedItem, setSelectedItem } = useContext(SelectedContext)

  return (
    <div className="border-b">
      <p className="mt-5 ml-5 text-xl font-medium">~{props.category}~</p>
      <div className="flex flex-wrap justify-center pb-5">
        {props.techs.map(({ name, url }) => {
          return (
            <div className="" key={url + name}>
              <div className="mx-3">
                <div className="duration-300 transform cursor-pointer hover:scale-150">
                  <img
                    onClick={() => setSelectedItem({ name, url })}
                    src={url}
                    alt={name}
                    className={`w-auto h-6 mx-5 mt-8`}
                  />
                </div>
              </div>
              <p className="h-3 pt-1 text-xs font-light text-center">
                {props.isDisplayName ? name : ''}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
