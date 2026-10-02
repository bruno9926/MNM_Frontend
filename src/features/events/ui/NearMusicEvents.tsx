import { routes } from '../../../app/routes/routes'
import SectionHeader from '../../../shared/ui/components/SectionHeader'
import { mockEvents } from '../model/mockEvents'
import MusicEvent from './MusicEvent'

function NearMusicEvents() {
  return (
    <section className="page-padding py-20">
      <SectionHeader
        title="Eventos cercanos"
        label="Lo que suena esta semana"
        link={{ to: routes.EVENTS, label: 'Ver todos' }}
        className="mb-4"
      />
      <div className="flex gap-4 overflow-auto py-6 pl-4 scrollbar-thin">
        {mockEvents.map((event) => (
          <MusicEvent key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default NearMusicEvents
