import { useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SaveButton } from '../components/saveButton'

export default function Home() {
  const [title, setTitle] = useState('タイトル')
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="my-5 border-4 shadow-lg rounded-3xl w-96">
          <div className="flex m-10">
            <p className="">作業場</p>
            <div className="ml-20">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    id="toogleA"
                    type="checkbox"
                    className="hidden"
                    onChange={() => setIsDark(!isDark)}
                  />
                  <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                  <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                </div>
                <div className="ml-3 font-medium text-gray-700">
                  {!isDark ? '🌝' : '🌚'}
                </div>
              </label>
            </div>
          </div>
          <textarea
            name="title"
            id="title"
            cols={30}
            rows={1}
            placeholder={title}
            value={title}
            className="p-3 m-10 border rounded-lg"
            onChange={(e) => setTitle(e.target.value.toString())}
          ></textarea>
        </div>
        <div className="mt-5">
          <div className="mx-10">
            <div
              className="border-4 shadow-lg rounded-3xl w-w-figure h-h-figure"
              id="tech-stack"
            >
              <div className="text-center ">
                <p className="h-10 p-2 mt-5 text-2xl font-bold">{title}</p>
                <p>dark theme is {isDark.toString()}</p>
                <div className="flex justify-center">
                  <img
                    src="./tech/front/typescript.svg"
                    alt="html"
                    className="w-10 m-10 bg-white"
                  />
                  <img
                    src="./tech/front/nextjs-logo.svg"
                    alt="html"
                    className="w-12 h-12 p-2 m-10 bg-white rounded-full "
                  />
                  <img
                    src="./tech/front/nextjs-icon.svg"
                    alt="html"
                    className="w-10 m-10 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 w-80">
            <SaveButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
