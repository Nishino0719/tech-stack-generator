import html2canvas from 'html2canvas'

type Props = {
  title?: string
}

export const SaveButton: React.FC<Props> = (props) => {
  const getElement = () => {
    html2canvas(document.querySelector('#tech-stack'), { scale: 3 }).then(
      (canvas) => {
        let a = document.createElement('a')
        a.href = canvas.toDataURL('image/jpg', 1.0)
        a.download = `${props.title != '' ? props.title : 'my-tech-stack'}.jpg`
        a.click()
      }
    )
  }
  return (
    <div className="block text-center">
      <button
        className="flex w-56 p-2 text-sm font-semibold duration-200 transform border-4 shadow-lg justify-items-center lg:p-3 lg:text-xl lg:w-80 rounded-2xl hover:scale-105 "
        onClick={getElement}
      >
        画像をダウンロード
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-5 h-5 ml-3 stroke-current lg:w-7 lg:h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </div>
  )
}
