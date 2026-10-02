function NavBar() {
  return (
    <nav className='w-full px-4 py-6 flex justify-between sticky top-0 z-10 bg-background'>
      <div className="flex gap-2 items-center">
        <img src="/mnm.png" alt="" className='w-25' />
        <span className="text-secondary">MUSIC NEAR ME</span>
      </div>
      <div className='flex gap-8 pr-8'>
        <span>EVENTOS</span>
        <span>LUGARES</span>
        <span>ARTISTAS</span>
        <span>ACERCA</span>
      </div>
    </nav>
  )
}

export default NavBar
