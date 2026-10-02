import { routes } from '../../../app/routes/routes'
import SectionHeader from '../../../shared/ui/components/SectionHeader'
import { mockArtists } from '../model/mockArtists'
import ArtistCard from './ArtistCard'

function EmergingArtists() {
  return (
    <section className="page-padding py-20">
      <SectionHeader
        title="Artistas emergentes"
        label="Quienes la están rompiendo"
        link={{ to: routes.ARTISTS, label: 'Ver todos' }}
        className="mb-4"
      />
      <div className="flex gap-4 overflow-auto py-6 pl-4 scrollbar-thin">
        {mockArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  )
}

export default EmergingArtists
