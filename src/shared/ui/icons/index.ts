import type { ComponentType } from 'react'
import { ArrowLeft, ArrowRight, Search } from 'lucide-react'

export type Icon = ComponentType<{ size?: number; className?: string }>

export const icon = {
  search: Search,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
} satisfies Record<string, Icon>
