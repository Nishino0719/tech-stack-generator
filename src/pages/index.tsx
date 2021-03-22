import { useContext, useState } from 'react'
import Draggable from 'react-draggable'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SaveButton } from '../components/saveButton'
import { TechLogoSearch } from '../components/techlogosearch'
import { SelectedContext } from '../hooks/selected'
import {
  backends,
  frontends,
  games,
  mobiles,
  others,
  tasks,
  TechnologyInfo
} from '../lib/tech'

export default function Home() {
  const [title, setTitle] = useState('タイトル')
  const [darkMode, setDarkMode] = useState(false)
  const [isDisplayName, setIsDisplayName] = useState(true)
  const { selectedItems } = useContext(SelectedContext)
  const selectedTechItems: TechnologyInfo[] = selectedItems
  const [isBadge, setIsBadge] = useState(false)

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <p className="absolute text-xl font-bold top-10"></p>
          <div className="order-2 mx-1 mt-5 overflow-scroll border-4 shadow-lg lg:overflow-hidden lg:order-1 lg:h-h-144 h-52 lg:my-5 w-xs-figure lg:mr-5 rounded-3xl lg:w-96">
            <div className="flex flex-wrap my-5 ml-10">
              <div className="mt-4 mr-5">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      id="toogleA"
                      type="checkbox"
                      className="hidden"
                      onChange={() => setIsDisplayName(!isDisplayName)}
                    />
                    <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                    <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                  </div>
                  <div className="ml-3 font-medium text-gray-700">名前</div>
                </label>
              </div>
              <div className="mt-4 mr-5">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      id="toogleA"
                      type="checkbox"
                      className="hidden"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                    <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                  </div>
                  <div className="ml-3 font-medium text-gray-700">
                    {!darkMode ? '🌝' : '🌚'}
                  </div>
                </label>
              </div>
              <div className="mt-4 mr-5">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      id="toogleA"
                      type="checkbox"
                      className="hidden"
                      onChange={() => setIsBadge(!isBadge)}
                    />
                    <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                    <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                  </div>
                  <div className="ml-3 font-medium text-gray-700">バッジ</div>
                </label>
              </div>
            </div>
            <p className="py-1 mx-10 text-sm font-medium text-gray-700">
              タイトル
            </p>
            <textarea
              name="title"
              id="title"
              cols={30}
              rows={1}
              placeholder={title}
              value={title}
              className="p-3 mx-10 border rounded-lg"
              onChange={(e) => setTitle(e.target.value.toString())}
            ></textarea>
            <div className="flex mt-6 ml-8 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 ml-2 stroke-current opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="技術スタックを検索"
                className="py-1 pl-2 pr-10 text-gray-700 w-72 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="lg:h-64 lg:mt-2 lg:overflow-scroll">
              <TechLogoSearch
                category={'Frontend'}
                techs={frontends}
                isDisplayName={true}
                darkMode={false}
              />
              <TechLogoSearch
                category={'Backend'}
                techs={backends}
                isDisplayName={true}
                darkMode={false}
              />
              <TechLogoSearch
                category={'Mobile'}
                techs={mobiles}
                isDisplayName={true}
                darkMode={false}
              />
              <TechLogoSearch
                category={'Game'}
                techs={games}
                isDisplayName={true}
                darkMode={false}
              />
              <TechLogoSearch
                category={'Tasks'}
                techs={tasks}
                isDisplayName={true}
                darkMode={false}
              />
              <TechLogoSearch
                category={'Others'}
                techs={others}
                isDisplayName={true}
                darkMode={false}
              />
            </div>
          </div>
          <div className="order-1 mt-5 lg:order-2">
            <div className={`mx-1 md:ml-5 ${darkMode ? 'dark' : ''}`}>
              <div
                className={`border-4 shadow-lg rounded-3xl h-xs-figure w-xs-figure sm:w-sm-figure sm:h-sm-figure lg:w-lg-figure lg:h-lg-figure xl:w-w-figure xl:h-h-figure dark:border-gray-500 dark:bg-gray-700 overflow-hidden`}
                id="tech-stack"
              >
                <div className="text-center ">
                  <p className="h-5 p-2 text-base font-bold text-black xl:h-10 lg:h-7 md:text-2xl md:mt-5 dark:text-gray-100">
                    {title}
                  </p>

                  <div className="flex flex-wrap p-1">
                    {selectedTechItems.map(({ name, url }, index) => {
                      return (
                        <div key={url + name + index}>
                          <Draggable>
                            <div className="cursor-move">
                              <div
                                className={
                                  isBadge
                                    ? `  ${
                                        darkMode
                                          ? 'p-1 border border-white rounded-full mx-4 mt-4'
                                          : 'border rounded-full mx-4 mt-4 shadow-xl p-1'
                                      }`
                                    : `mx-4 mt-3 p-1`
                                }
                              >
                                <div
                                  className={
                                    isBadge
                                      ? ` 
                            ${
                              darkMode
                                ? `p-3 h-16 w-16 rounded-full bg-white`
                                : 'p-3 h-16 w-16 rounded-full border'
                            }`
                                      : ``
                                  }
                                >
                                  <img
                                    src={url}
                                    alt={name}
                                    className={` pointer-events-none ${
                                      isBadge
                                        ? `${darkMode ? '' : ''}`
                                        : `w-auto h-16`
                                    }`}
                                  />
                                </div>
                              </div>
                              <p
                                className={
                                  isBadge
                                    ? 'h-4 pt-1 text-xs font-bold dark:text-gray-200'
                                    : 'p-1 text-xs font-bold dark:text-gray-200'
                                }
                              >
                                {isDisplayName ? name : ''}
                              </p>
                            </div>
                          </Draggable>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto my-10 w-80">
              <SaveButton title={title} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
