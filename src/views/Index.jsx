import { Navigate, Outlet } from "react-router-dom";

function Index() {
    if(!localStorage.getItem('acd')) {
        return <Navigate to='/login' />
    }
    return (<div>
        Index
        <Outlet/>
        </div>
    )
}

export default Index