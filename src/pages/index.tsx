import { useContext, useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { Footer } from '../components/footer'
import { SaveButton } from '../components/saveButton'
import { TechLogoSearch } from '../components/techlogosearch'
import { SelectedContext } from '../hooks/selected'
import {
  backends,
  frontends,
  games,
  mobiles,
  others,
  SearchTable,
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
  const [searchWord, setSearchWord] = useState('')
  const [hitElement, setHitElement] = useState<SearchTable[]>([])

  const [searchTable, setSearchTable] = useState<SearchTable[]>([])

  function setTable() {
    let lowerCaseTable: SearchTable[] = []
    frontends.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    backends.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    mobiles.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    games.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    tasks.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    others.map((tech) => {
      lowerCaseTable.push({
        lowerCaseName: tech.name.toLowerCase(),
        technologyInfo: tech
      })
    })
    setSearchTable(lowerCaseTable)
  }

  function searchTechnology(word: string) {
    setSearchWord(word)
    word = word.toLowerCase()
    const hitTechnology: SearchTable[] = []
    searchTable.forEach((element) => {
      if (element.lowerCaseName.indexOf(word) !== -1) {
        hitTechnology.push({
          lowerCaseName: element.lowerCaseName,
          technologyInfo: element.technologyInfo
        })
      }
    })
    if (hitTechnology.length !== searchTable.length) {
      setHitElement(hitTechnology)
    } else {
      setHitElement([])
    }
  }

  useEffect(() => {
    setTable()
  }, [])

  return (
    <>
      <div className="sm:h-screen sm:overflow-hidden">
        <div className="block px-5 mx-auto my-10 sm:hidden">
          <p className="m-5 font-semibold">
            技術スタックジェネレーターでは、様々な技術スタックの図を簡単に作ることができます。
          </p>
          <p className="m-5">こんなものが作れます</p>
          <div className="py-2 my-10">
            <img
              src="./example1.jpg"
              alt=""
              className="py-2 mx-auto text-center w-72"
            />
            <img
              src="./example2.jpg"
              alt=""
              className="py-2 mx-auto text-center w-72"
            />
            <img
              src="./example3.jpg"
              alt=""
              className="py-2 mx-auto text-center w-72"
            />
            <img
              src="./example4.jpg"
              alt=""
              className="py-2 mx-auto text-center w-72"
            />
          </div>
          <p className="my-3 text-sm font-semibold text-center opacity-60">
            申し訳ございません..こちらの端末サイズは現在制作中です。
            <br />
            もしよろしければPCからご利用ください！
          </p>
          <img
            src="./comingsoon.jpg"
            width={600}
            height={315}
            alt=""
            className="mx-auto my-5 text-center w-72"
          />
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-center lg:flex-nowrap">
            <div className="order-2 mx-1 mt-0 overflow-scroll border-4 shadow-lg lg:mt-5 lg:overflow-hidden lg:order-1 lg:h-h-160 h-52 lg:my-5 w-xs-figure lg:mr-5 rounded-3xl lg:w-96">
              <div className="flex flex-wrap mb-2 ml-10 lg:mt-5">
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
              <div className="flex flex-wrap ml-8">
                <textarea
                  name="text1"
                  id="text1"
                  cols={12}
                  rows={1}
                  placeholder={'テキスト1'}
                  value={text1}
                  className="p-2 mr-1 text-xs border rounded-lg resize-none"
                  onChange={(e) => setText1(e.target.value.toString())}
                ></textarea>
                <textarea
                  name="text2"
                  id="text2"
                  cols={12}
                  rows={1}
                  placeholder={'テキスト2'}
                  value={text2}
                  className="p-2 mx-1 text-xs border rounded-lg resize-none"
                  onChange={(e) => setText2(e.target.value.toString())}
                ></textarea>
                <textarea
                  name="text3"
                  id="text3"
                  cols={12}
                  rows={1}
                  placeholder={'テキスト3'}
                  value={text3}
                  className="p-2 mx-1 text-xs border rounded-lg resize-none"
                  onChange={(e) => setText3(e.target.value.toString())}
                ></textarea>
              </div>
              <div className="mt-4 ml-10">
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
                    デバッグ
                  </div>
                </label>
              </div>
              <div className="flex mt-1 ml-8 mr-3">
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
                  type="textarea"
                  value={searchWord}
                  onChange={(e) => searchTechnology(e.target.value)}
                  placeholder="技術スタックを検索"
                  className="py-1 pl-2 pr-10 text-gray-700 w-72 focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="h-20 p-2 mx-8 mb-3 overflow-scroll shadow-inner bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 ">
                  {hitElement.length !== 0
                    ? `候補:${hitElement.length}件`
                    : '候補なし'}
                </p>

                <div className="flex flex-wrap ">
                  {hitElement.map((element: SearchTable, index: number) => {
                    return (
                      <div
                        className={' select-none mx-5'}
                        key={element.technologyInfo.url}
                      >
                        <div className="text-center">
                          <button
                            className="duration-300 transform cursor-pointer hover:scale-125"
                            onClick={() => {
                              let alreadyExsit: boolean = false
                              selectedItems.forEach((technology) => {
                                if (
                                  element.technologyInfo.name ===
                                  technology.name
                                ) {
                                  alreadyExsit = true
                                }
                              })
                              if (alreadyExsit) {
                                const tempItems: TechnologyInfo[] = [
                                  ...selectedItems
                                ]
                                hitElement.splice(index, 1)
                                setSearchWord('')
                                setSelectedItems(tempItems)
                              } else {
                                const tempItems: TechnologyInfo[] = [
                                  ...selectedItems,
                                  {
                                    url: element.technologyInfo.url,
                                    name: element.technologyInfo.name,
                                    hasDarkmode:
                                      element.technologyInfo.hasDarkmode,
                                    darkmodeUrl:
                                      element.technologyInfo.darkmodeUrl
                                  }
                                ]
                                hitElement.splice(index, 1)
                                setSearchWord('')
                                setSelectedItems(tempItems)
                              }
                            }}
                          >
                            <img
                              src={element.technologyInfo.url}
                              alt={element.technologyInfo.name}
                              height={28}
                              width={28}
                              className={` h-7 w-7 pointer-events-none`}
                            />
                          </button>
                        </div>
                        <p className="w-12 h-2 pb-5 text-xs text-center ">
                          {element.technologyInfo.name}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="lg:h-64 lg:mt-1 lg:overflow-scroll">
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
            <div className="order-1 mt-2 lg:mt-5 lg:order-2">
              <div className={`mx-1 md:ml-5 ${darkMode ? 'dark' : ''}`}>
                <div
                  className={` border-4 shadow-lg rounded-3xl h-xs-figure w-xs-figure sm:w-sm-figure sm:h-sm-figure lg:w-lg-figure lg:h-lg-figure xl:w-w-figure xl:h-h-figure dark:border-gray-500 dark:bg-gray-800 overflow-hidden`}
                  id="tech-stack"
                >
                  <div
                    className={`text-center mx-8 ${
                      isDisplayName ? 'h-name-debug' : 'h-debug'
                    }${
                      isDebug
                        ? darkMode
                          ? ' outline-white'
                          : ' outline-black'
                        : ''
                    }`}
                  >
                    <p className="p-2 text-lg font-bold text-black lg:h-5 md:h-4 sm:h-3 xl:h-10 md:text-xl lg:text-2xl xl:text-4xl md:mt-5 dark:text-gray-100">
                      {title}
                    </p>
                    <Draggable grid={[5, 5]}>
                      <p
                        className={`lg:h-5 md:h-4 sm:h-3 my-2 xl:text-xl lg:text-lg md:text-base text-sm font-extrabold text-black cursor-move ${
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
                        className={`lg:h-5 md:h-4 sm:h-3 my-2 xl:text-xl lg:text-lg md:text-base text-sm font-extrabold text-black cursor-move ${
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
                        className={`lg:h-5 md:h-4 sm:h-3 my-2 xl:text-xl lg:text-lg md:text-base text-sm font-extrabold text-black cursor-move ${
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

                    <div
                      className={`flex flex-wrap py-1 ${
                        isDebug
                          ? darkMode
                            ? ' border-t-2 border-gray-100'
                            : ' border-t-2 border-black'
                          : 'border-t-2  border-white dark:border-gray-800'
                      }`}
                    >
                      {selectedItems.map(
                        ({ name, url, hasDarkmode, darkmodeUrl }, index) => {
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
                                            ? 'p-1 border border-white rounded-full mx-2 mt-2'
                                            : 'border rounded-full mx-2 mt-2 shadow-lg p-1'
                                        }`
                                      : `mx-2 mt-2 p-1`
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
                                ? `md:p-3 p-2 md:w-12 md:h-12 w-10 h-10  xl:h-16 xl:w-16 lg:w-14 lg:h-14 rounded-full bg-white`
                                : 'md:p-3 p-2 md:w-12 md:h-12  w-10 h-10  xl:h-16 xl:w-16 lg:w-14 lg:h-14 rounded-full border'
                            }`
                                          : ``
                                      }
                                    >
                                      <img
                                        src={
                                          hasDarkmode
                                            ? darkMode
                                              ? isBadge
                                                ? url
                                                : darkmodeUrl
                                              : url
                                            : url
                                        }
                                        alt={name}
                                        className={` pointer-events-none ${
                                          isBadge
                                            ? `${darkMode ? '' : ''}`
                                            : `xl:w-16 xl:h-16 lg:w-14 lg:h-14  md:w-12 md:h-12 w-10 h-10`
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  <p
                                    className={
                                      isBadge
                                        ? 'h-4 text-xs lg:text-sm font-normal lg:font-bold dark:text-gray-200'
                                        : 'h-4 text-xs lg:text-sm font-normal lg:font-bold dark:text-gray-200'
                                    }
                                  >
                                    {isDisplayName ? name : ''}
                                  </p>
                                </div>
                              </Draggable>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto my-5 lg:my-10 w-80">
                <SaveButton title={title} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
