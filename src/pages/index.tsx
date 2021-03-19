import { useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SaveButton } from '../components/saveButton'
import { frontends, frontendsURL } from '../lib/tech'

export default function Home() {
  const [title, setTitle] = useState('タイトル')
  const [darkMord, setDarkMord] = useState(false)
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="my-5 mr-5 border-4 shadow-lg rounded-3xl w-96">
          <div className="flex m-10">
            <p className="">作業場</p>
            <div className="ml-20">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    id="toogleA"
                    type="checkbox"
                    className="hidden"
                    onChange={() => setDarkMord(!darkMord)}
                  />
                  <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                  <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                </div>
                <div className="ml-3 font-medium text-gray-700">
                  {!darkMord ? '🌝' : '🌚'}
                </div>
              </label>
            </div>
          </div>
          <p className="mx-10 text-sm text-gray-800">タイトル</p>
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
        </div>
        <div className="mt-5">
          <div className={`ml-5 ${darkMord ? 'dark' : ''}`}>
            <div
              className={`border-4 shadow-lg rounded-3xl w-w-figure h-h-figure dark:border-gray-500 dark:bg-gray-700`}
              id="tech-stack"
            >
              <div className="text-center ">
                <p className="h-10 p-2 mt-5 text-2xl font-bold text-black dark:text-gray-100">
                  {title}
                </p>

                <div className="flex flex-wrap justify-center">
                  {frontends.map(({ name, url }) => {
                    ;<div
                      className={`${
                        darkMord ? 'border border-white rounded-full m-4' : ''
                      }`}
                    >
                      <div
                        className={` 
                                        ${
                                          darkMord
                                            ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                                            : ''
                                        }
                                      `}
                      >
                        <img
                          src={url}
                          alt={name}
                          className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                        />
                      </div>
                    </div>
                  })}
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.html}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.css3}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.nextjs}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.tailwindcss}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.element}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      darkMord ? 'border border-white rounded-full m-4' : ''
                    }`}
                  >
                    <div
                      className={` 
                      ${
                        darkMord
                          ? `m-1 pt-5 px-5 w-20 h-20 rounded-full bg-white`
                          : ''
                      }
                    `}
                    >
                      <img
                        src={frontendsURL.typescript}
                        alt=""
                        className={`w-auto h-10 ${darkMord ? '' : 'm-10'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 w-80">
            <SaveButton title={title} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
