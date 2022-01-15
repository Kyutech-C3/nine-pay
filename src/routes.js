import Index from './pages/Index'
import About from './pages/About'
import Login from './pages/Login'
import BarcodeTest from './pages/BarcodeTest'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/barcode_test',
    name: 'barcode_test',
    component: BarcodeTest
  }
]