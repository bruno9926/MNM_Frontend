import type { ReactNode } from 'react'

type EventInfoGridProps = {
  children: ReactNode
}

function EventInfoGrid({ children }: EventInfoGridProps) {
  return (
    <div className='bg-card w-full mt-10 grid grid-cols-2 border-t border-l'>
      {children}
    </div>
  )
}

type EventInfoGridItemProps = {
  label: string
  value: string
  detail?: string
}

function EventInfoGridItem({ label, value, detail }: EventInfoGridItemProps) {
  return (
    <div className='p-4 flex flex-col items-start border-r border-b '>
      <span className='text-xs text-muted-foreground'>{label}</span>
      <b className='text-foreground font-semibold'>{value}</b>
      {detail && <span className='text-muted-foreground'>{detail}</span>}
    </div>
  )
}

EventInfoGrid.Item = EventInfoGridItem

export default EventInfoGrid
