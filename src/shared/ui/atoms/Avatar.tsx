type AvatarProps = {
  src?: string
  alt: string
}

function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className='rounded-full bg-background w-10 md:w-20 aspect-square overflow-hidden'>
      {src && <img src={src} alt={alt} className="h-full w-full object-center object-cover" />}
    </div>
  )
}

export default Avatar
