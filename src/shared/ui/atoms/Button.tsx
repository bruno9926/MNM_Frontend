import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const buttonVariants = cva(
  'p-3 px-4 sm:p-4 sm:px-6 rounded-4xl w-fit cursor-pointer transition hover:bg-accent hover:text-accent-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0',
  {
    variants: {
      variant: {
        primary: 'border border-background text-secondary-foreground bg-secondary',
        secondary: 'border border-secondary text-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

function Button({ className, type = 'button', variant, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
}

export default Button
