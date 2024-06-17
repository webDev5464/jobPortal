import React from 'react'
import Navbar from './Navbar'
import Footer from '../user/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    )
}

export default UserLayout
