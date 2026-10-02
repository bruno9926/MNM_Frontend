import NavigationButton from '../atoms/NavigationButton'

type FeaturedStoryProps = {
  title: string
  description: string
  imageUrl: string
  to: string
}

function FeaturedStory({ title, description, imageUrl, to }: FeaturedStoryProps) {
  return (
    <section className='relative h-110 overflow-hidden'>
      <div className='duotone absolute inset-0'>
        <img src={imageUrl} alt="" className='w-full h-full object-cover object-bottom' />
      </div>
      <div className='absolute inset-0 bg-linear-to-br from-transparent from-30% to-background-deep' aria-hidden='true' />
      <div className='absolute inset-0 page-padding py-10 flex flex-wrap content-center items-end justify-between'>
        <h2 className="text-8xl w-min font-semibold text-brand-gradient-strong heroic-font">{title}</h2>
        <div className='flex flex-col gap-4'>
          <p className='max-w-75'>{description}</p>
          <NavigationButton to={to} className='text-foreground border-secondary hover:text-secondary'>Leer Historia</NavigationButton>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStory
