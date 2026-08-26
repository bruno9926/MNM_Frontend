import { useNavigate } from 'react-router'
import { icon } from '../icons'

function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 cursor-pointer text-foreground transition-colors hover:text-muted-foreground"
    >
      <icon.arrowLeft size={28} />
      Volver
    </button>
  )
}

export default BackButton
