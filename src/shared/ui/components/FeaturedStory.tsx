import NavigationButton from '../atoms/NavigationButton'

type FeaturedStoryProps = {
  title: string
  description: string
  imageUrl: string
  to: string
}

function FeaturedStory({ title, description, imageUrl, to }: FeaturedStoryProps) {
  return (
    <section className='relative overflow-hidden'>
      <div className='duotone absolute inset-0'>
        <img src={imageUrl} alt="" className='w-full h-full object-cover object-bottom' />
      </div>
      {/* Scrim follows the text: downwards while the copy is stacked under the title, diagonal once it sits to the right */}
      <div className='absolute inset-0 bg-linear-to-b lg:bg-linear-to-br from-transparent from-30% to-background-deep' aria-hidden='true' />
      {/* In flow (not absolute) so the section grows with its content instead of clipping it */}
      <div className='relative min-h-110 page-padding py-10 flex flex-wrap content-center items-end justify-between gap-x-10 gap-y-8'>
        <h2 className="text-[clamp(36px,14vw,96px)] leading-none w-min max-w-full font-semibold text-brand-gradient-strong heroic-font">{title}</h2>
        <div className='flex flex-col gap-4'>
          <p className='max-w-75'>{description}</p>
          <NavigationButton to={to} className='text-foreground border-secondary hover:text-secondary'>Leer Historia</NavigationButton>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStory
