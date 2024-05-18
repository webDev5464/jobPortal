import React from 'react'
import { Outlet } from 'react-router-dom'

const RouterLayout = () => {

    return (
        <div>
            <h1>Hello jassdev</h1>
            <Outlet />
        </div>
    )
}

export default RouterLayout
