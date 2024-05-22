import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Mainpage from '../Mainpage';

const RouterLayout = () => {
    const user = useSelector((state) => state.auth);

    return (
        <div className=''>

            {user.isAuth ? <Outlet /> : <Mainpage />}


        </div>
    )
}

export default RouterLayout
