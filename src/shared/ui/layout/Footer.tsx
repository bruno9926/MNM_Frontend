import { icon } from "../icons"

function Footer() {
  return (
    <footer className='w-full bg-secondary text-secondary-foreground flex flex-col md:flex-row'>
      <div className="flex flex-1 flex-col xl:flex-row items-start xl:items-center gap-4 p-3 pt-8 sm:p-6 xl:p-0 xl:pr-6">

        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <div className='duotone w-20 sm:w-30 lg:w-50 aspect-square'>
            <img src="/blue_hands.png" alt="" className='w-full h-full object-cover object-bottom' />
          </div>
          <h2 className="heroic-font text-lg sm:text-2xl lg:text-4xl w-min xl:mr-20">MANTENTE CONECTADO</h2>
        </div>

        <div className="flex flex-col gap-4 text-base md:text-lg items-start w-full">
          <p className="max-w-75">Recibe recomendaciones, eventos y novedades de la escena local</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-2 border-secondary-foreground flex w-full max-w-120">
            <input
              required
              type="email"
              aria-label="Correo electrónico"
              placeholder="tu correo electrónico"
              className="flex-1 px-2 min-w-0 md:px-6 placeholder:text-secondary-foreground/80" />
            <button
              type="submit"
              aria-label="Suscribirme"
              className="h-12 w-14 flex items-center justify-center bg-secondary-foreground text-secondary cursor-pointer">
              <icon.arrowRight size={20} />
            </button>
          </form>
        </div>

      </div>

      <div className="p-3 sm:p-6 md:p-8 border-t md:border-l-2 md:border-t-0 flex flex-col justify-center">
        <img src="/mnm.png" alt="" className='w-40' />
        <span className="font-bold heroic-font tracking-[0.3em]">MNM</span>
        <span>MUSIC NEAR ME</span>
      </div>
    </footer>
  )
}

export default Footer
