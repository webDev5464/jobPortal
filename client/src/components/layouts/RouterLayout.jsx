import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const RouterLayout = () => {

    return (
        <div className=''>
            <div className="container flex items-center justify-between">
                <h1>Hello jassdev</h1>
                <NavLink to={'register'}>
                    <button>Register</button>
                </NavLink>

            </div>

            <Outlet />

        </div>
    )
}

export default RouterLayout
