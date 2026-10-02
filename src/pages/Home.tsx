import { routes } from '../app/routes/routes'
import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import NavigationButton from '../shared/ui/atoms/NavigationButton'

function Home() {
  return (
    <div>
      <Hero />
      <div className='relative isolate h-110 overflow-hidden'>
        <img src="/hero.jpg" alt="mnm hero" className='w-full h-full object-cover object-bottom grayscale' />
        <div className='absolute inset-0 bg-brand-gradient mix-blend-color' aria-hidden='true' />
      </div>
      <NearMusicEvents />
    </div>
  )
}

function Hero() {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 p-4 pb-10 overflow-hidden">
        <h2 className="text-sm sm:text-base uppercase tracking-[0.3em] font-medium text-secondary mb-4">La musica que esta sonando cerca de ti</h2>
        <h1 className="text-5xl sm:text-8xl lg:text-gigantic w-fit font-semibold text-brand-gradient-strong heroic-font">MUSIC NEAR ME</h1>
      </div>
      <div className="bg-secondary p-6 pt-8 md:pt-15 flex flex-col gap-4">
        <div className='pb-8 border-b-3'>
          <p className="text-secondary-foreground text-xl md:text-2xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
        </div>
        <div className='flex flex-col items-start gap-4 pt-4'>
          <NavigationButton to={routes.EVENTS}>Explorar Eventos</NavigationButton>
          <NavigationButton to={routes.PUBLISH_EVENT}>Publicar un Evento</NavigationButton>
        </div>
      </div>
    </div>
  )
}

export default Home
