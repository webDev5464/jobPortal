import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'


const RouterLayout = () => {
    const user = useSelector((state) => state.auth);
    return (
        <Outlet />
    )
}

export default RouterLayout
