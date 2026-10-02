function NavBar() {
  return (
    <nav className='w-full px-4 py-6 flex justify-between sticky inset-0 z-10 bg-background'>
      <img src="/mnm.png" alt="music near me logo" className='w-25' />
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
