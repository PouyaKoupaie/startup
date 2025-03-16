import React from 'react'
import Navbar from '../components/Navbar'
function Layout({children}: Readonly<{children: React.ReactNode}>) {

    return (
        <main className='font-work-sans bg-amber-50 h-[100vh]'>
            <Navbar/>
            {children}
        </main>
    )
}

export default Layout
