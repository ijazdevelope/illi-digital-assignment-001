import React from 'react'
import './Aside.css'
import Dashboard from '../assests/Path 11933.png'
import MyFarm from '../assests/Path 11852.png'
import Tools from '../assests/Subtraction 136.png'
import Profile from '../assests/Group 6571.png'

const Aside = ({ sideBarWidth, setSideBarWidth, miniSideBar, setMiniSideBar }) => {

    return (
        <>
            <main>
                <aside className='aside_wrapper'>
                    <ul className={`nav flex-column mb-auto text-white overflow-hidden border-3 border-end position-absolute ${sideBarWidth && 'sidebar-width'}`}>
                        <li className="nav-item">
                            <a href="/" className="nav-link d-flex align-items-center text-white">
                                <img onClick={() => setSideBarWidth(!sideBarWidth)} className='me-3' src={Dashboard} alt='dashboard-icon' />
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item list-items" onClick={() => setMiniSideBar(!miniSideBar)}>
                            <a href="/" className="nav-link d-flex align-items-center text-white" aria-current="page">
                                <img className='me-3' src={MyFarm} alt='myfarm-icon' />
                                My Farm
                            </a>
                        </li>
                        <li className='nav-item my-4'>
                            <a href="/" className="nav-link d-flex align-items-center text-white">
                                <img className='me-3' src={Tools} alt='tools-icon' />
                                Tools
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/" className="nav-link d-flex align-items-center text-white">
                                <img className='me-3' src={Profile} alt='Profile-icon' />
                                Profile
                            </a>
                        </li>

                    </ul>
                </aside>
            </main>
        </>
    )
}

export default Aside
