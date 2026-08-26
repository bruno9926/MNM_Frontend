export const routes = {
  HOME: '/',
  EVENTS: '/events',
} as const

export type RouteToken = keyof typeof routes
