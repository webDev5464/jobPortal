import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Mainpage from '../Mainpage';

const RouterLayout = () => {
    const { success } = useSelector((state) => state.auth);

    return (
        <div className=''>

            {success ? <Outlet /> : <Mainpage />}


        </div>
    )
}

export default RouterLayout
