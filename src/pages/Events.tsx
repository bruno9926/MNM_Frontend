import { mockEvents } from '../features/events/model/mockEvents'
import MusicEvent from '../features/events/ui/MusicEvent'
import BackButton from '../shared/ui/atoms/BackButton'
import Input from '../shared/ui/atoms/Input'
import { icon } from '../shared/ui/icons'

function Events() {
  return (
    <div className="page-padding py-10">
      <BackButton />
      <h1 className="text-primary text-4xl sm:text-6xl lg:text-[70px] heroic-font pb-6 pt-4">Eventos</h1>
      <Input icon={icon.search} placeholder="Busca un evento, artista o lugar" className="mb-8" />
      <div className="flex flex-wrap gap-6">
        {mockEvents.map((event) => (
          <MusicEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Events
