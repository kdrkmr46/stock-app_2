import {Navigate, Outlet} from "react-router-dom"

const privateRouter = () => {
    const currentUser = true

    return currentUser ? <Outlet/> :
    <Navigate to="/"  />
} 

export default PrivateRouter 