import html2canvas from 'html2canvas'

export const SaveButton = () => {
  const getElement = () => {
    html2canvas(document.querySelector('#tech-stack'), { scale: 3 }).then(
      (canvas) => {
        let a = document.createElement('a')
        a.href = canvas.toDataURL('image/jpeg', 1.0)
        a.download = 'my-tech-stack.jpg'
        a.click()
      }
    )
  }
  return (
    <div>
      <button onClick={getElement}>save</button>
    </div>
  )
}
