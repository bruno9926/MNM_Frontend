import { routes } from '../app/routes/routes'
import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import NearbyEventsStrip from '../features/events/ui/NearbyEventsStrip'
import FeaturedStory from '../shared/ui/components/FeaturedStory'
import NavigationButton from '../shared/ui/atoms/NavigationButton'
import EmergingArtists from '../features/artists/ui/EmergingArtists'

function Home() {
  return (
    <>
      <Hero />
      <NearMusicEvents />
      <NearbyEventsStrip />
      
      <FeaturedStory
        title="CALI SUENA DURO"
        description="Un recorrido por la escena musical de Cali, sus espacios, su gente, y todo lo que la hace vibrar."
        imageUrl="/hero.jpg"
        to={routes.EVENTS}
      />
     
      <EmergingArtists /> 
    </>
  )
}

function Hero() {
  return (
    <div className="border grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 p-4 pb-10 lg:pb-4 xl:p-6  overflow-hidden">
        <h1 className="text-[clamp(36px,14vw,96px)] leading-none xl:text-gigantic w-min font-semibold text-brand-gradient-strong heroic-font">MUSIC NEAR ME</h1>
        <p className="text-sm sm:text-base uppercase tracking-[0.3em] font-medium text-secondary mb-4">La música que está sonando cerca de vos</p>
      </div>
      <div className="bg-secondary text-secondary-foreground flex flex-col gap-4 justify-between">
        <div className='p-6 pt-10 xl:p-10 xl:pt-15'>
          <p className="pb-8 border-b-3 text-secondary-foreground text-xl md:text-2xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
          <div className='flex flex-col items-start gap-4 pt-4'>
            <NavigationButton to={routes.EVENTS}>Explorar Eventos</NavigationButton>
            <NavigationButton to={routes.PUBLISH_EVENT}>Publicar un Evento</NavigationButton>
          </div>
        </div>
        <div className='flex justify-between items-end'>
          <div className='flex flex-col p-6 xl:p-10'>
            <span>CONCIERTOS</span>
            <span>FESTIVALES</span>
            <span>FIESTAS</span>
            <span>ESCENA LOCAL</span>
          </div>
          <div className='duotone w-35 xl:w-55 aspect-square'>
            <img src="/blue_hands.png" alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
