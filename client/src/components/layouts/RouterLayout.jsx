import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Mainpage from '../Mainpage';

const RouterLayout = () => {
    const user = useSelector((state) => state.auth);
    return (
        <div className=''>
<<<<<<< HEAD

            {/* {success ? <Outlet /> : <Mainpage />} */}
        <Outlet />

=======
            {/* {user.isAuth ? <Outlet /> : <Mainpage />} */}
            <Outlet />
>>>>>>> fa449187cfb58e91a8f6776dc48eed683faea2dc
        </div>
    )
}

export default RouterLayout
