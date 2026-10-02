import { icon } from "../icons"

function Footer() {
  return (
    <footer className='w-full bg-secondary text-secondary-foreground flex'>
      <div className="flex-1 flex items-center gap-4">

        <div className='duotone w-50 aspect-square'>
          <img src="/blue_hands.png" alt="" className='w-full h-full object-cover object-bottom' />
        </div>
        <h2 className="heroic-font text-4xl w-min mr-20">MANTENTE CONECTADO</h2>

        <div className="flex flex-col gap-4 text-lg">
          <p className="max-w-75">Recibe recomendaciones, eventos y novedades de la escena local</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-2 border-secondary-foreground flex w-120">
            <input
              required
              type="email"
              aria-label="Correo electrónico"
              placeholder="tu correo electrónico"
              className="flex-1 px-6 placeholder:text-secondary-foreground/80" />
            <button
              type="submit"
              aria-label="Suscribirme"
              className="h-12 w-14 flex items-center justify-center bg-secondary-foreground text-secondary cursor-pointer">
              <icon.arrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="p-8 border-l-2 flex flex-col justify-center">
        <img src="/mnm.png" alt="" className='w-40' />
        <span className="font-bold heroic-font tracking-[0.3em]">MNM</span>
        <span>MUSIC NEAR ME</span>
      </div>
    </footer>
  )
}

export default Footer
