import { Link } from 'react-router'
import { cn } from '../../lib/cn'
import { icon } from '../icons'

type SectionHeaderProps = {
  title: string
  label?: string
  link?: {
    to: string
    label: string
  }
  className?: string
}

// Colors are inherited (currentColor), so the header works on dark sections and on the periwinkle band.
function SectionHeader({ title, label, link, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      <h2 className='heroic-font text-4xl'>{title}</h2>
      <span className='flex-1 border-t border-current/30' aria-hidden='true' />
      {label && (
        <span className='max-w-50 text-xs uppercase tracking-[0.3em] opacity-80'>{label}</span>
      )}
      {link && (
        <Link to={link.to} className='flex items-center gap-2 text-sm uppercase tracking-widest'>
          {link.label}
          <icon.arrowRight size={16} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeader
