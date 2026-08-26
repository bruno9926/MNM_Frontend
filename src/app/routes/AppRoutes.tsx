import { BrowserRouter, Route, Routes } from 'react-router'
import Events from '../../pages/Events'
import Home from '../../pages/Home'
import { routes } from './routes'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.EVENTS} element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
