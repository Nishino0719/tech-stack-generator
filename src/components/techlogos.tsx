import { TechnologyInfo } from '../lib/tech'

type Props = {
  techs: TechnologyInfo[]
  darkMode: boolean
  isDisplayName: boolean
}

export const TechLogos: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {props.techs.map(({ name, url }) => {
        return (
          <div className="" key={url + name}>
            <div
              className={` ${
                props.darkMode
                  ? 'border border-white rounded-full mx-4 mt-4'
                  : 'border rounded-full mx-4 mt-4 shadow-xl p-1'
              }`}
            >
              <div
                className={` 
            ${
              props.darkMode
                ? `m-1 pt-4 px-4 w-14 h-14 rounded-full bg-white`
                : 'w-14 h-14 rounded-full border'
            }`}
              >
                <img
                  src={url}
                  alt={name}
                  className={`w-auto h-6 ${props.darkMode ? '' : 'mx-4 mt-4'}`}
                />
              </div>
            </div>
            <p className="h-4 pt-1 text-xs font-bold dark:text-gray-200">
              {props.isDisplayName ? name : ''}
            </p>
          </div>
        )
      })}
    </div>
  )
}
