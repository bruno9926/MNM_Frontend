import { useNavigate } from 'react-router'
import { routes } from '../../../app/routes/routes'
import type { MusicEvent as MusicEventType } from '../model/musicEvent'

type MusicEventProps = {
  event: MusicEventType
}

function MusicEvent({ event }: MusicEventProps) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`${routes.EVENTS}/${event.id}`)}
      className="group relative bg-muted overflow-hidden shrink-0 w-80 h-100 cursor-pointer transition-transform motion-safe:hover:scale-105 motion-safe:hover:-rotate-1"
    >
      <img src={event.imageUrl} alt={event.id} className='absolute inset-0 w-full h-full object-center object-cover'/>
      {/* Scrim: at least ~80% opaque behind the text, so it stays readable on any photo (even pure white) */}
      <div className="absolute inset-0 bg-linear-to-t from-background-deep via-background-deep/80 via-35% to-transparent to-70%" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2">
        <p className="text-sm">{event.date}</p>
        <h3 className="text-xl font-semibold">{event.name}</h3>
        <p className="text-sm">
          {event.venue}, {event.city}
        </p>
      </div>
    </div>
  )
}

export default MusicEvent
