import NearMusicEvents from '../features/events/ui/NearMusicEvents'
import Button from '../shared/ui/atoms/Button'

function Home() {
  return (
    <div>
      <Hero />
      <div className='relative h-110 overflow-hidden'>
        <img src="/hero.jpg" alt="mnm hero" className='w-full h-full object-cover object-bottom'/>
      </div>
      <NearMusicEvents />
    </div>
  )
}

function Hero() {
  return (
    <div className="border border-border grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 p-4 pb-10">
        <h1 className="text-5xl sm:text-8xl lg:text-gigantic font-semibold text-primary heroic-font">MUSIC NEAR ME</h1>
        <h2 className="text-xl sm:text-2xl font-extralight">La musica que esta sonando cerca de ti</h2>
      </div>
      <div className="bg-secondary p-6 pt-8 md:pt-15 flex flex-col gap-4">
        <p className="text-secondary-foreground text-2xl md:text-3xl font-medium">Descubre conciertos, artistas y eventos de la escena local.</p>
        <Button>Explorar Eventos</Button>
        <Button>Publicar un Evento</Button>
      </div>
    </div>
  )
}

export default Home
