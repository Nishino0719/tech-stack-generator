import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SaveButton } from '../components/saveButton'

export default function Home() {
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
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner toggle__line"></div>
                  <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
                </div>
                <div className="ml-3 font-medium text-gray-700">テーマ</div>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="mx-10">
            <div
              className="border-4 shadow-lg rounded-3xl w-w-figure h-h-figure"
              id="tech-stack"
            >
              <div className="text-center ">
                <p className="p-2 text-2xl font-bold">hello boy</p>
                <p className="p-10 text-3xl font-semibold text-gray-300">
                  Start
                </p>
                <div className="w-10 mx-auto my-0">
                  <img
                    src="./tech/front/typescript.svg"
                    alt="html"
                    className=""
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
