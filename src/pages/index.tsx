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
  const [isDisplayName, setIsDisplayName] = useState(false)
  const { selectedItems, setSelectedItems } = useContext(SelectedContext)
  const [isBadge, setIsBadge] = useState(false)
  const [isDebug, setIsDebug] = useState(false)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className="order-2 mx-1 mt-5 overflow-scroll border-4 shadow-lg lg:overflow-hidden lg:order-1 lg:h-h-144 h-52 lg:my-5 w-xs-figure lg:mr-5 rounded-3xl lg:w-96">
            <div className="flex flex-wrap mt-5 ml-10">
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
            <p className="py-1 mx-8 text-sm font-medium text-gray-700">
              タイトル
            </p>
            <textarea
              name="title"
              id="title"
              cols={30}
              rows={1}
              placeholder={'タイトル'}
              value={title}
              className="p-2 mx-8 text-xs border rounded-lg resize-none"
              onChange={(e) => setTitle(e.target.value.toString())}
            ></textarea>
            <p className="pt-1 mx-8 text-sm font-medium text-gray-700">
              テキスト(3つまで)
            </p>
            <div className="flex flex-wrap">
              <textarea
                name="title"
                id="title"
                cols={12}
                rows={1}
                placeholder={'テキスト1'}
                value={text1}
                className="p-2 mx-1 ml-8 text-xs border rounded-lg resize-none"
                onChange={(e) => setText1(e.target.value.toString())}
              ></textarea>
              <textarea
                name="title"
                id="title"
                cols={12}
                rows={1}
                placeholder={'テキスト2'}
                value={text2}
                className="p-2 mx-1 text-xs border rounded-lg resize-none"
                onChange={(e) => setText2(e.target.value.toString())}
              ></textarea>
              <textarea
                name="title"
                id="title"
                cols={12}
                rows={1}
                placeholder={'テキスト3'}
                value={text3}
                className="p-2 mx-1 text-xs border rounded-lg resize-none"
                onChange={(e) => setText3(e.target.value.toString())}
              ></textarea>
            </div>
            <div className="mt-4 ml-8">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    id="toogleA"
                    type="checkbox"
                    className="hidden"
                    onChange={() => setIsDebug(!isDebug)}
                  />
                  <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                  <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                </div>
                <div className="pt-1 ml-3 text-sm font-medium text-gray-700">
                  Debug
                </div>
              </label>
            </div>
            <div className="flex mt-3 ml-8 mr-3">
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
                className={` border-4 shadow-lg rounded-3xl h-xs-figure w-xs-figure sm:w-sm-figure sm:h-sm-figure lg:w-lg-figure lg:h-lg-figure xl:w-w-figure xl:h-h-figure dark:border-gray-500 dark:bg-gray-700 overflow-hidden`}
                id="tech-stack"
              >
                <div className="text-center ">
                  <p className="h-5 p-2 text-xl font-bold text-black xl:h-10 lg:h-7 md:text-4xl md:mt-5 dark:text-gray-100">
                    {title}
                  </p>
                  <Draggable grid={[5, 5]}>
                    <p
                      className={`h-8 m-0 text-xl font-extrabold text-black cursor-move ${
                        isDebug && text1 != ''
                          ? darkMode
                            ? ' outline-white'
                            : ' outline-black'
                          : ''
                      } w-36 dark:text-gray-100`}
                    >
                      {text1}
                    </p>
                  </Draggable>
                  <Draggable grid={[5, 5]}>
                    <p
                      className={`h-8 text-xl font-extrabold text-black cursor-move ${
                        isDebug && text2 != ''
                          ? darkMode
                            ? ' outline-white'
                            : ' outline-black'
                          : ''
                      } w-36 dark:text-gray-100`}
                    >
                      {text2}
                    </p>
                  </Draggable>
                  <Draggable grid={[5, 5]}>
                    <p
                      className={`h-8 text-xl font-extrabold text-black cursor-move ${
                        isDebug && text3 != ''
                          ? darkMode
                            ? ' outline-white'
                            : ' outline-black'
                          : ''
                      } w-36 dark:text-gray-100`}
                    >
                      {text3}
                    </p>
                  </Draggable>

                  <div className="flex flex-wrap p-1 ml-4">
                    {selectedItems.map(({ name, url }, index) => {
                      return (
                        <div key={url + name + index}>
                          <Draggable grid={[2, 2]}>
                            <div
                              className={`cursor-move ${
                                isDebug && isDisplayName
                                  ? darkMode
                                    ? ' outline-white'
                                    : ' outline-black'
                                  : ''
                              }`}
                            >
                              <div
                                className={`
                                  
                                  ${
                                    isBadge
                                      ? `  ${
                                          darkMode
                                            ? 'p-1 border border-white rounded-full mx-4 mt-4'
                                            : 'border rounded-full mx-4 mt-4 shadow-xl p-1'
                                        }`
                                      : `mx-4 mt-3 p-1`
                                  }
                                    ${
                                      isDebug && !isDisplayName
                                        ? darkMode
                                          ? ' outline-white'
                                          : ' outline-black'
                                        : ''
                                    }
                                    `}
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
                                    : 'h-4 pt-1 text-xs font-bold dark:text-gray-200'
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
