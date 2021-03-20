export const Header = () => {
  return (
    <div className="h-12 border-b lg:h-16">
      <div className="relative">
        <div className="absolute left-0 p-4 font-bold text-md lg:text-2xl lg:left-10">
          技術スタックジェネレーター
        </div>
        <div className="absolute right-0 flex p-4 text-base lg:right-10">
          <p className="px-3">About</p>
          <p className="px-3">Issue</p>
        </div>
      </div>
    </div>
  )
}
