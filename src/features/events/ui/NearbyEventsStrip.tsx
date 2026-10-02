import { Link } from 'react-router'
import { routes } from '../../../app/routes/routes'
import { icon } from '../../../shared/ui/icons'

type NearbyEvent = {
  id: string
  month: string
  day: string
  name: string
  genre: string
  venue: string
}

const nearbyEvents: NearbyEvent[] = [
  { id: '1', month: 'OCT', day: '10', name: 'VERA', genre: 'Indie Pop', venue: 'La Pascasia' },
  { id: '2', month: 'OCT', day: '11', name: 'CLUB 404', genre: 'Electrónica', venue: 'Zoológico Club' },
  { id: '3', month: 'OCT', day: '13', name: 'MAREA', genre: 'Rock Alternativo', venue: 'El Taller' },
  { id: '4', month: 'OCT', day: '16', name: 'NOCHE DE VINILOS', genre: 'Indie / Alternativo', venue: 'Casa Sonora' },
]

function NearbyEventsStrip() {
  return (
    <section className='bg-secondary page-padding py-8 text-secondary-foreground'>
      <div className='flex gap-4 items-center'>
        <h2 className='heroic-font text-5xl'>CERCA TUYO</h2>
        <span className='border-t flex-1 mx-5' />
        <Link to={routes.EVENTS} className='flex gap-4'>
          MAS EVENTOS CERCA TUYO
          <icon.arrowRight size={20} />
        </Link>
      </div>
      <ul className='flex mt-8 gap-10 divide-secondary-foreground divide-x'>
        {nearbyEvents.map((event) => (
          <NearbyEventItem key={event.id} event={event} />
        ))}
      </ul>
    </section>
  )
}

type NearbyEventItemProps = {
  event: NearbyEvent
}

function NearbyEventItem({ event }: NearbyEventItemProps) {
  return (
    <li className='flex gap-6 flex-1 motion-safe:hover:flex-3 transition-[flex-grow] cursor-pointer justify-center'>
      <div className='flex flex-col'>
        <span className='font-light'>{event.month}</span>
        <span className='font-bold text-2xl'>{event.day}</span>
      </div>
      <div className='flex flex-col'>
        <span className='font-bold text-xl'>{event.name}</span>
        <span className='font-light text-sm'>{event.genre}</span>
        <span className='font-light text-sm'>{event.venue}</span>
      </div>
    </li>
  )
}

export default NearbyEventsStrip
