import { Navigate, useRoutes } from 'react-router-dom'
import Recommend from '../views/recommend/Recommend'
import Singer from '../views/singer/Singer'
import TopList from '../views/TopList'
import Search from '../views/Search'
import Login from '../views/Login'
import NotFind from '../views/NotFind'
import SingerDetail from '../views/singer/SingerDetail'
function Router() {
    let elements = [
        { path: '/login', element: <Login pathname="/"/> },
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <Navigate to='/recommend' />
                },
                {
                    path: "/recommend",
                    element: <AuthEl el={ <Recommend /> } />
                },
                {
                    path: "/singer",
                    element: <AuthEl el={ <Singer /> } />,
                    children: [
                        {
                            path: ":id",
                            element: <AuthEl el={ <SingerDetail /> } />
                        },
                    ]
                },
                {
                    path: "/top-list",
                    element: <AuthEl el={ <TopList /> } />,
                },
                {
                    path: "/search",
                    element: <AuthEl el={ <Search /> } />,
                }
            ]
        },
        { path: '*', element: <NotFind/> }
    ]
    return useRoutes(elements)
}
function AuthEl({ el }) {
    // const isLogin = localStorage.getItem('acd')
    // return !isLogin ? el : <Navigate to='/login' />
    return el
}
export default Router