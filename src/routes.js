import Index from './pages/Index'
import Sleep from './pages/Sleep'
import Login from './pages/Login'
import BarcodeTest from './pages/BarcodeTest'
import List from './pages/List'
import Add from './pages/Add'
import NFCTest from './pages/NFCTest'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/sleep',
    name: 'sleep',
    component: Sleep
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
    component: BarcodeTest
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/nfc_test',
    name: 'nfc_test',
    component: NFCTest
  }
]
