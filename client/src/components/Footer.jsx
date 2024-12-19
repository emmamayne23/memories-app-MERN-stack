
const Footer = () => {
  return (
    <>
        <div className="">
            <div className="pl-10 py-5 border-t border-t-gray-700">
                <h1 className="font-bold text-3xl">MEMORIES</h1>
                <p className="text-xs">Formerly EMs Communications</p>
            </div>
            <div className="flex justify-center items-center gap-x-10 text-gray-300 text-xl py-5 border-t border-t-gray-700">
                <a href="" className="flex items-center gap-1"><span className="hidden lg:flex">linkedIn</span><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/emmamayne23" className="flex items-center gap-1"><span className="hidden lg:flex">github</span><i className="fa-brands fa-github"></i></a>
                <a href="" className="flex items-center gap-1"><span className="hidden lg:flex">twitter</span><i className="fa-brands fa-twitter"></i></a>
                <a href="https://emmamayne23@gmail.com" className="flex items-center gap-1"><span className="hidden lg:flex">email</span><i className="fa-solid fa-envelope"></i></a>
                <a href="" className="flex items-center gap-1"><span className="hidden lg:flex">instagram</span><i className="fa-brands fa-instagram"></i></a>
                <a href="https://telegram.org/midorima_san" className="flex items-center gap-1"><span className="hidden lg:flex">telegram</span><i className="fa-brands fa-telegram"></i></a>
            </div>
            <div className="text-xs pl-10 py-5 border-t border-t-gray-700">
                Copyright &copy; {new Date().getFullYear()} EMs Communications, Inc.
            </div>
        </div>
    </>
  )
}

export default Footer