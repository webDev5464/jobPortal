import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Mainpage from '../Mainpage';

const RouterLayout = () => {
    const user = useSelector((state) => state.auth);

    return (
        <div className=''>

<<<<<<< HEAD
    {/* {success ? <Outlet /> : <Mainpage />} */}
=======
            {user.isAuth ? <Outlet /> : <Mainpage />}

>>>>>>> b1caa0ad82f40a5050c7bf1a824b49796554acd4

           <Outlet />
        </div>
    )
}

export default RouterLayout
