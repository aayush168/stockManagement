import LayoutMain from 'layouts/LayoutMain'
import Login from 'pages/Login'
import Home from 'pages/Home'
import SignUp from 'pages/SignUp'
import Clients from 'pages/Clients'
import Reports from 'pages/Reports'
import AddInvoice from 'pages/AddInvoice'

export default [
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/signup',
    component: SignUp,
    name: 'SignUp'
  },
  {
    path: '/',
    component: LayoutMain,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: Home,
        name: 'Home',
      },
      {
        path: '/clients',
        component: Clients,
        name: 'Clients'
      },
      {
        path: '/addInvoice',
        component: AddInvoice,
        name: 'AddInvoice',
      },
      {
        path: '/reports',
        component: Reports,
        name: 'Reports',
      }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]



