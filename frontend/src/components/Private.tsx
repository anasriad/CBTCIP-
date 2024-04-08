import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../states/authSlice/auth";

export default function Private() {
    const User = useSelector(getCurrentUser)
    return (
        User
            ? <Outlet />
            : <Navigate to='/login' />
    )
}