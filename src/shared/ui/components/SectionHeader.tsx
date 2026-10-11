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
// Below lg the title takes its own row and the label + link sit underneath; from lg it's a single row with the rule.
function SectionHeader({ title, label, link, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-6 gap-y-3', className)}>
      <h2 className='heroic-font text-[clamp(1rem,6vw,1.5rem)] sm:text-3xl lg:text-4xl leading-tight break-words w-full lg:w-auto'>{title}</h2>
      <span className='hidden lg:block flex-1 border-t border-current/30' aria-hidden='true' />
      {label && (
        <span className='flex-1 lg:flex-none max-w-50 text-xs uppercase tracking-[0.3em] opacity-80'>{label}</span>
      )}
      {link && (
        <Link to={link.to} className='ml-auto flex items-center gap-2 text-sm uppercase tracking-widest whitespace-nowrap'>
          {link.label}
          <icon.arrowRight size={16} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeader
