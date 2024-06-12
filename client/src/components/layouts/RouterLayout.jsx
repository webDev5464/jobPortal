import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Mainpage from '../Mainpage';

const RouterLayout = () => {
    const user = useSelector((state) => state.auth);
    const success = true
    return (
        <div className=''>

            {success ? <Outlet /> : <Mainpage />}
            {/* <Outlet /> */}

        </div>
    )
}

export default RouterLayout
