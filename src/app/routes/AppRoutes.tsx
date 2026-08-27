import { BrowserRouter, Route, Routes } from 'react-router'
import EventDetail from '../../pages/EventDetail'
import Events from '../../pages/Events'
import Home from '../../pages/Home'
import { routes } from './routes'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.EVENTS} element={<Events />} />
        <Route path={`${routes.EVENTS}/:id`} element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
