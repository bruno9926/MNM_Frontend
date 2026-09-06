import { Link } from 'react-router'
import { routes } from '../app/routes/routes'

function NotFound() {
  return (
    <div className="page-padding py-10 flex flex-col items-start">
      <h1 className="text-6xl sm:text-8xl heroic-font pb-6 pt-4 text-primary">404</h1>
      <p className="text-muted-foreground pb-6">No encontramos esta pagina.</p>
      <Link to={routes.HOME} className="underline">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
