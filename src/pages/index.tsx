import { useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SaveButton } from '../components/saveButton'
import { frontends, frontendsURL } from '../lib/tech'

export default function Home() {
  const [title, setTitle] = useState('タイトル')
  const [darkMode, setDarkMode] = useState(false)
  const [isDisplayName, setIsDisplayName] = useState(false)
  return (
    <>
      <div className="h-screen overflow-hidden ">
        <Header />
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className="mx-1 mt-5 border-4 shadow-lg lg:my-5 w-xs-figure lg:mr-5 rounded-3xl lg:w-96">
            <div className="flex m-10">
              <p className="">作業場</p>
              <div className="ml-20">
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
            </div>
            <p className="mx-10 text-sm text-gray-800">タイトル</p>
            <textarea
              name="title"
              id="title"
              cols={25}
              rows={1}
              placeholder={title}
              value={title}
              className="p-3 mx-10 border rounded-lg"
              onChange={(e) => setTitle(e.target.value.toString())}
            ></textarea>
            <div className="mt-4 ml-10">
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
                <div className="ml-3 font-medium text-gray-700">
                  名前を表示{isDisplayName ? 'する' : 'しない'}
                </div>
              </label>
            </div>
            <div className="flex my-6 ml-10 mr-3">
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
                className="py-2 pl-2 pr-10 text-gray-700 w-72 focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className={`mx-1 md:ml-5 ${darkMode ? 'dark' : ''}`}>
              <div
                className={`border-4 shadow-lg rounded-3xl h-xs-figure w-xs-figure sm:w-sm-figure sm:h-sm-figure lg:w-lg-figure lg:h-lg-figure xl:w-w-figure xl:h-h-figure dark:border-gray-500 dark:bg-gray-700 overflow-hidden`}
                id="tech-stack"
              >
                <div className="text-center ">
                  <p className="h-5 p-2 text-base font-bold text-black xl:h-10 lg:h-7 md:text-2xl md:mt-5 dark:text-gray-100">
                    {title}
                  </p>

                  <div className="flex flex-wrap justify-center">
                    {frontends.map(({ name, url }) => {
                      return (
                        <div className="" key={url + name}>
                          <div
                            className={` ${
                              darkMode
                                ? 'border border-white rounded-full mx-4 mt-4'
                                : 'border rounded-full mx-4 mt-4 shadow-xl p-1'
                            }`}
                          >
                            <div
                              className={` 
                            ${
                              darkMode
                                ? `m-1 pt-4 px-4 w-14 h-14 rounded-full bg-white`
                                : 'w-14 h-14 rounded-full border'
                            }`}
                            >
                              <img
                                src={url}
                                alt={name}
                                className={`w-auto h-6 ${
                                  darkMode ? '' : 'mx-4 mt-4'
                                }`}
                              />
                            </div>
                          </div>
                          <p className="h-4 pt-1 text-xs font-bold dark:text-gray-200">
                            {isDisplayName ? name : ''}
                          </p>
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
