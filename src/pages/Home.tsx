import { routes } from '../app/routes/routes'
import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import FeaturedStory from '../shared/ui/components/FeaturedStory'
import NavigationButton from '../shared/ui/atoms/NavigationButton'

function Home() {
  return (
    <div>
      <Hero />
      <NearMusicEvents />
      <FeaturedStory
        title="CALI SUENA DURO"
        description="Un recorrido por la escena musical de Cali, sus espacios, su gente, y todo lo que la hace vibrar."
        imageUrl="/hero.jpg"
        to={routes.EVENTS}
      />
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
      <div className="bg-secondary text-secondary-foreground flex flex-col gap-4 justify-between">
        <div className='p-6 pt-8 md:p-10 md:pt-15'>
          <p className="pb-8 border-b-3 text-secondary-foreground text-xl md:text-2xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
          <div className='flex flex-col items-start gap-4 pt-4'>
            <NavigationButton to={routes.EVENTS}>Explorar Eventos</NavigationButton>
            <NavigationButton to={routes.PUBLISH_EVENT}>Publicar un Evento</NavigationButton>
          </div>
        </div>
        <div className='flex justify-between items-end'>
          <div className='flex flex-col p-6 md:p-10'>
            <span>CONCIERTOS</span>
            <span>FESTIVALES</span>
            <span>FIESTAS</span>
            <span>ESCENA LOCAL</span>
          </div>
          <div className='duotone w-55 aspect-square'>
            <img src="/blue_hands.png" alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
