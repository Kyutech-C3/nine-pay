import Index from './pages/Index'
import Sleep from './pages/Sleep'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/sleep',
    name: 'sleep',
    component: Sleep
  },
]