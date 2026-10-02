import { mockEvents } from '../model/mockEvents'
import MusicEvent from './MusicEvent'

function NearMusicEvents() {
  return (
    <section className="page-padding py-25">
      <h2 className="text-4xl mb-4 heroic-font">Eventos cercanos</h2>
      <div className="flex gap-4 overflow-auto py-6 pl-4 scrollbar-thin">
        {mockEvents.map((event) => (
          <MusicEvent key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default NearMusicEvents
