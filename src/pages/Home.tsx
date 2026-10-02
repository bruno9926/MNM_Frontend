import { routes } from '../app/routes/routes'
import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import NavigationButton from '../shared/ui/atoms/NavigationButton'

function Home() {
  return (
    <div>
      <Hero />
      <NearMusicEvents />
      <div className='relative isolate h-110 overflow-hidden'>
        <img src="/hero.jpg" alt="" className='w-full h-full object-cover object-bottom grayscale' />
        <div className='absolute inset-0 bg-brand-gradient mix-blend-color' aria-hidden='true' />
        <div className='absolute inset-0 bg-linear-to-br from-transparent from-30% to-background-deep' aria-hidden='true' />
        <div className='absolute inset-0 page-padding py-10 flex flex-wrap content-center items-end justify-between'>
          <h2 className="text-8xl w-min font-semibold text-brand-gradient-strong heroic-font">CALI SUENA DURO</h2>
          <div className='flex flex-col gap-4'>
            <p className='max-w-75'>Un recorrido por la escena musical de Cali, sus espacios, su gente, y todo lo que la hace vibrar.</p>
            <NavigationButton to={routes.EVENTS} className='text-foreground border-secondary hover:text-secondary'>Leer Historia</NavigationButton>
          </div>
        </div>
      </div>
      <NearMusicEvents />
    </div>
  )
}

function Hero() {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 p-4 pb-10 overflow-hidden page-padding">
        <h1 className="text-5xl sm:text-8xl lg:text-gigantic w-fit font-semibold text-brand-gradient-strong heroic-font">MUSIC NEAR ME</h1>
        <p className="text-sm sm:text-base uppercase tracking-[0.3em] font-medium text-secondary mb-4">La musica que esta sonando cerca de ti</p>
      </div>
      <div className="relative bg-secondary text-secondary-foreground p-6 pt-8 md:p-10 md:pt-15 flex flex-col gap-4 justify-between">
        <div>
          <p className="pb-8 border-b-3 text-secondary-foreground text-xl md:text-2xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
          <div className='flex flex-col items-start gap-4 pt-4'>
            <NavigationButton to={routes.EVENTS}>Explorar Eventos</NavigationButton>
            <NavigationButton to={routes.PUBLISH_EVENT}>Publicar un Evento</NavigationButton>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <span>CONCIERTOS</span>
          <span>FESTIVALES</span>
          <span>FIESTAS</span>
          <span>ESCENA LOCAL</span>
        </div>
        <div className='duotone w-55 aspect-square absolute right-0 bottom-0'>
          <img src="/blue_hands.png" alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Home
