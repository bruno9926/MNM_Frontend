import { useNavigate } from 'react-router'
import { routes } from '../app/routes/routes'
import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import Button from '../shared/ui/atoms/Button'

function Home() {
  return (
    <div>
      <Hero />
      <div className='relative isolate h-110 overflow-hidden'>
        <img src="/hero.jpg" alt="mnm hero" className='w-full h-full object-cover object-bottom grayscale'/>
        <div className='absolute inset-0 bg-brand-gradient mix-blend-color' aria-hidden='true' />
      </div>
      <NearMusicEvents />
    </div>
  )
}

function Hero() {
  const navigate = useNavigate()

  return (
    <div className="border grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 p-4 pb-10 overflow-hidden">
        <h2 className="text-sm sm:text-base uppercase tracking-[0.3em] font-medium text-secondary mb-4">La musica que esta sonando cerca de ti</h2>
        <h1 className="text-5xl sm:text-8xl lg:text-gigantic w-fit font-semibold text-brand-gradient-strong heroic-font">MUSIC NEAR ME</h1>
      </div>
      <div className="bg-secondary p-6 pt-8 md:pt-15 flex flex-col gap-4">
        <p className="text-secondary-foreground text-xl md:text-2xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
        <Button onClick={() => navigate(routes.EVENTS)}>Explorar Eventos</Button>
        <Button>Publicar un Evento</Button>
      </div>
    </div>
  )
}

export default Home
