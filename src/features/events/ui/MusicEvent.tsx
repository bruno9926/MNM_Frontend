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
      className="group bg-card overflow-hidden flex flex-col shrink-0 w-80 cursor-pointer transition-transform hover:bg-brand-gradient motion-safe:hover:scale-105 motion-safe:hover:-rotate-1"
    >
      <div className="h-70 bg-muted relative overflow-hidden">
        <img src={event.imageUrl} alt={event.id} className='w-full h-full object-center object-cover'/>
      </div>
      <div className="p-4 flex flex-col gap-2 group-hover:text-secondary-foreground">
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
