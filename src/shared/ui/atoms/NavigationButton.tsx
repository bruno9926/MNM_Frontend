import { Link, type LinkProps } from 'react-router'
import { cn } from '../../lib/cn'
import { icon } from '../icons'

function NavigationButton({ className, children, ...props }: LinkProps) {
  return (
    <Link
      className={cn(
        'flex items-center gap-2 p-3 px-4 sm:p-4 sm:px-6 w-fit border-2 border-background text-secondary-foreground font-bold hover:text-accent-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0',
        className,
      )}
      {...props}
    >
      {children}
      <icon.arrowRight size={20} />
    </Link>
  )
}

export default NavigationButton
