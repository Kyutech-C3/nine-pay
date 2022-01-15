import Index from './pages/Index'
import Login from './pages/Login'
import BarcodeTest from './pages/BarcodeTest'
import List from './pages/List'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/barcode_test',
    name: 'barcode_test',
    component: BarcodeTest,
  },
]
