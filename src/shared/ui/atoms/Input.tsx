import type { InputHTMLAttributes } from 'react'
import type { Icon } from '../icons'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: Icon
}

function Input({ className = '', type = 'text', placeholder = '', icon: Icon, ...props }: InputProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {Icon && (
        <Icon
          size={20}
          className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-full border border-border bg-transparent p-4 px-6 text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors ${Icon ? 'pl-14' : ''}`}
        {...props}
      />
    </div>
  )
}

export default Input
