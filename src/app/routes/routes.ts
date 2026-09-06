export const routes = {
  HOME: '/',
  EVENTS: '/events',
  ARTISTS: '/artist',
} as const

export type RouteToken = keyof typeof routes
