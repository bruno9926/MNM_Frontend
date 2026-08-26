import type { ComponentType } from 'react'
import { ArrowLeft, Search } from 'lucide-react'

export type Icon = ComponentType<{ size?: number; className?: string }>

export const icon = {
  search: Search,
  arrowLeft: ArrowLeft,
} satisfies Record<string, Icon>
