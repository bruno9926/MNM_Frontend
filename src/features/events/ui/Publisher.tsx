import Avatar from "../../../shared/ui/atoms/Avatar";
import Button from "../../../shared/ui/atoms/Button";

type PublisherData = {
  name: string,
  profileImage?: string
}

const Publisher = ({ publisher }: { publisher: PublisherData }) => {
  return (
    <div className='bg-card border-b flex p-4 md:p-6 justify-between items-center'>
      <div className='flex flex-col items-start gap-2 md:gap-4 md:flex-row md:items-center'>
        <Avatar src={publisher.profileImage} alt={publisher.name} />
        <div className='flex flex-col'>
          <span className='font-bold uppercase text-lg'>{publisher.name}</span>
        </div>
      </div>
      <Button variant="secondary">Seguir</Button>
    </div>
  )
}

export default Publisher;