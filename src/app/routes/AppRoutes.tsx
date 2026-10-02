import { BrowserRouter, Route, Routes } from 'react-router'
import Artist from '../../pages/Artist'
import EventDetail from '../../pages/EventDetail'
import Events from '../../pages/Events'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'
import PublishEvent from '../../pages/PublishEvent'
import MainLayout from '../../shared/ui/layout/MainLayout'
import { routes } from './routes'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.EVENTS} element={<Events />} />
          <Route path={routes.PUBLISH_EVENT} element={<PublishEvent />} />
          <Route path={`${routes.EVENTS}/:id`} element={<EventDetail />} />
          <Route path={routes.ARTISTS} element={<Artist />} />
          <Route path={`${routes.ARTISTS}/:id`} element={<Artist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
