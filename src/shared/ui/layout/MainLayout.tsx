import { Outlet } from 'react-router'
import Footer from './Footer'
import NavBar from './NavBar'

function MainLayout() {
  return (
    <div className='min-h-dvh flex flex-col'>
      <NavBar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
