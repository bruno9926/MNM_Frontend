import { Link } from "react-router"
import { routes } from "../../../app/routes/routes"
import Avatar from "../../../shared/ui/atoms/Avatar"

export type LineUpArtistData = {
  name: string,
  desc?: string,
  coverImage?: string,
  time: string
}

const LineUp = ({ artists }: { artists: LineUpArtistData[] }) => {
  return (
    <div className='flex flex-col'>{
      artists.map((artist, i) => <LineUpArtist key={i} lineUpArtist={artist} />)
    }
    </div>
  )
}

const LineUpArtist = ({ lineUpArtist }: { lineUpArtist: LineUpArtistData }) => {
  return (
    <div className='bg-card border-b flex p-4 md:p-6 justify-between items-center'>
      <div className='flex flex-col items-start gap-2 md:gap-4 md:flex-row md:items-center'>
        <Avatar src={lineUpArtist.coverImage} alt={lineUpArtist.name} />
        <div className='flex flex-col'>
          <Link to={routes.ARTISTS}>
            <span className='font-bold uppercase text-lg hover:underline'>{lineUpArtist.name}</span>
          </Link>
          <span className='text-xs'>{lineUpArtist.desc}</span>
        </div>
      </div>
      <span className='text-secondary'>{lineUpArtist.time}</span>
    </div>
  )
}

export default LineUp;