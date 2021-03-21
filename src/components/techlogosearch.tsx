import { TechnologyInfo } from '../lib/tech'

type Props = {
  category: string
  techs: TechnologyInfo[]
  darkMode: boolean
  isDisplayName: boolean
}

export const TechLogoSearch: React.FC<Props> = (props) => {
  return (
    <div className="pt-5 pb-5 border-b">
      <p className="ml-5 text-xl font-medium">~{props.category}~</p>
      <div className="flex flex-wrap justify-center">
        {props.techs.map(({ name, url }) => {
          return (
            <div className="" key={url + name}>
              <div className="mx-3">
                <div className="duration-300 transform cursor-pointer hover:scale-150">
                  <img
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
