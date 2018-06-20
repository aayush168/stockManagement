import LayoutMain from 'layouts/LayoutMain';
import Login from 'pages/Login'
import Home from 'pages/Home'
import SignUp from 'pages/SignUp'

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
    children: [
      {
        path: '',
        component: Home,
        name: 'Home',
        meta: { requiresAuth: true }
      },
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]



