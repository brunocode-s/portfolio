const Footer = () => {
  return (
    <footer className="bg-black text-gray-500">
      <div className="container-max-width section-padding">
        <div className="py-8 border-t border-white/10 flex flex-col items-center gap-2 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Alain Bruno</p>
          <p className="break-all sm:break-normal">alainbrunoofficial@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
