import Index from '../views/Index'
import About from '../views/About'
import Test from '../views/Test'
import Login from '../views/Login'
import Home from '../views/Home'
import { Navigate, useRoutes } from 'react-router-dom'
function Router(props) {

  let elements = [
      {
        path: '/login',
        element: <Login pathname={props.pathname}/>
      },
      {
        path: '/',
        element: <Index/>,
        children: [
          {
            path: '/',
            element: <Navigate to='/home' />
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/test",
            element: <Test />,
          },
          { 
            path: "/about", 
            element: <About /> 
          }
        ],
      }
  ]

  return useRoutes(elements)
}

export default Router