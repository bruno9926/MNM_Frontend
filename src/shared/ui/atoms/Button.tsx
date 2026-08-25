import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ className = '', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`border border-background p-4 px-6 text-secondary-foreground rounded-4xl w-fit cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${className}`}
      {...props}
    />
  )
}

export default Button
