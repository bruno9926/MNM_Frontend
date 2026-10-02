import type { ReactNode } from 'react'
import type { LineUpArtistData } from '../features/events/ui/LineUp'
import EventInfoGrid from '../features/events/ui/EventInfoGrid'
import LineUp from '../features/events/ui/LineUp'
import Publisher from '../features/events/ui/Publisher'
import Button from '../shared/ui/atoms/Button'
import { cn } from '../shared/lib/cn'

const lineUpArtists: LineUpArtistData[] = [
  {
    name: "Bandalos Chinos",
    desc: "Show principal · banda completa",
    coverImage: "/bandalos.jpeg",
    time: '22:30'
  },
  {
    name: "Ainda",
    desc: "Invitada · set acústico",
    coverImage: '/Ainda.jpg',
    time: '21:40'
  },
  {
    name: "DJ Mora",
    desc: "Apertura",
    time: '21:00'
  }
]

function EventDetail() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 border '>
      {/** Event Images */}
      <CoverImage src="/bandalos-concierto.jpg" alt="Bandalos Chinos en concierto" />
      {/** Event Info */}
      <Panel className='md:pt-20 md:border-l'>
        <span className='text-secondary'>Vie 12 Sep · 21:00</span>
        <h1 className="text-3xl sm:text-6xl lg:text-[60px] heroic-font pb-6 pt-4 text-primary wrap-break-word">Bandalos Chinos</h1>
        <p>Presentación de Vándalos en vivo, con banda completa y set acústico de apertura. Una noche de la escena local en el corazón de Palermo.</p>

        <EventInfoGrid>
          <EventInfoGrid.Item label='LUGAR' value='Niceto Club' detail='Niceto Vega 5510, CABA' />
          <EventInfoGrid.Item label='ENTRADAS' value='Desde $18.000' detail='Últimas 40 disponibles' />
          <EventInfoGrid.Item label='EDAD' value='+ 18' />
          <EventInfoGrid.Item label='DURACIÓN' value='~2 h 30 min' />
        </EventInfoGrid>

        <div className='pt-10 flex gap-4'>
          <Button className='w-full min-w-0'>Comprar entradas</Button>
          <Button variant='secondary' className='shrink-0'>Voy a ir</Button>
        </div>
      </Panel>
      {/** LineUp and Publisher */}
      <Panel className='border flex flex-col gap-4'>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl heroic-font pb-6 pt-4 uppercase">Line Up</h2>
          <LineUp artists={lineUpArtists} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl heroic-font pb-6 pt-4 uppercase">Publicado por</h2>
          <Publisher publisher={{ name: "Bandalos Chinos", profileImage: "/bandalos.jpeg" }} />
        </div>
      </Panel>

      <CoverImage src="/bandalos-cosquin-rock.jpg" alt="Bandalos Chinos en Cosquín Rock" />
    </div>
  )
}

function CoverImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className='relative overflow-hidden h-64 md:h-auto'>
      <img src={src} alt={alt} className='absolute inset-0 h-full w-full object-center object-cover' />
    </div>
  )
}

function Panel({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <div className={cn('min-w-0 p-5 md:p-10', className)}>
      {children}
    </div>
  )
}

export default EventDetail
