import type { MusicEvent as MusicEventType } from '../model/musicEvent'
import MusicEvent from './MusicEvent'

const mockEvents: MusicEventType[] = [
  {
    id: '1',
    name: 'Bandalos Chinos',
    date: 'Vie 12 Sep · 21:00',
    venue: 'Niceto Club',
    city: 'Buenos Aires',
    imageUrl: "/bandalos.jpeg"
  },
  {
    id: '2',
    name: 'Usted Señálemelo',
    date: 'Sáb 13 Sep · 20:00',
    venue: 'Teatro Vorterix',
    city: 'Buenos Aires',
    imageUrl: '/usted-senalemelo.webp'
  },
  {
    id: '3',
    name: 'Marilina Bertoldi',
    date: 'Jue 18 Sep · 21:30',
    venue: 'Complejo Art Media',
    city: 'Buenos Aires',
    imageUrl: '/marilina.jpg'
  },
  {
    id: '4',
    name: 'Conociendo Rusia',
    date: 'Vie 19 Sep · 22:00',
    venue: 'Groove',
    city: 'Buenos Aires',
    imageUrl: '/conociendo-rusia.jpg'
  },
  {
    id: '5',
    name: 'Wos',
    date: 'Sáb 20 Sep · 21:00',
    venue: 'Movistar Arena',
    city: 'Buenos Aires',
    imageUrl: '/wos.jpeg'
  },
]

function NearMusicEvents() {
  return (
    <section className="page-padding py-10">
      <h2 className="text-2xl mb-4 heroic-font">Eventos cercanos</h2>
      <div className="flex gap-4 overflow-auto py-6 pl-4 scrollbar-thin">
        {mockEvents.map((event) => (
          <MusicEvent key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default NearMusicEvents
