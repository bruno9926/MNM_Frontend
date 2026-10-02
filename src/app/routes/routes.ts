export const routes = {
  HOME: '/',
  EVENTS: '/events',
  PUBLISH_EVENT: '/events/new',
  ARTISTS: '/artist',
} as const

export type RouteToken = keyof typeof routes
