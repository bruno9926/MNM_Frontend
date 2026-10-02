import { Link } from "react-router"
import { routes } from "../../../app/routes/routes"

function NavBar() {
  return (
    <nav className='w-full px-4 py-6 flex justify-between sticky top-0 z-10 bg-background'>
      <Link to={routes.HOME} className="flex gap-2 items-center">
        <img src="/mnm.png" alt="" className='w-25' />
        <span className="text-secondary">MUSIC NEAR ME</span>
      </Link>
      <div className='flex gap-8 pr-8'>
        <Link to={routes.EVENTS}>EVENTOS</Link>
        <span>LUGARES</span>
        <span>ARTISTAS</span>
        <span>ACERCA</span>
      </div>
    </nav>
  )
}

export default NavBar
