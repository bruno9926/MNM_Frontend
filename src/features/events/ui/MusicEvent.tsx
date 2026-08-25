import type { MusicEvent as MusicEventType } from '../model/musicEvent'

type MusicEventProps = {
  event: MusicEventType
}

function MusicEvent({ event }: MusicEventProps) {
  return (
    <div className="group bg-card overflow-hidden flex flex-col shrink-0 w-80 cursor-pointer transition hover:bg-secondary hover:scale-105">
      <div className="h-70 bg-muted transition-colors group-hover:bg-secondary relative overflow-hidden">
        <img src={event.imageUrl} alt={event.id} className='w-full h-full object-center object-cover'/>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm transition-colors group-hover:text-secondary-foreground">{event.date}</p>
        <h3 className="text-xl font-semibold transition-colors group-hover:text-secondary-foreground">{event.name}</h3>
        <p className="text-sm transition-colors group-hover:text-secondary-foreground">
          {event.venue}, {event.city}
        </p>
      </div>
    </div>
  )
}

export default MusicEvent
