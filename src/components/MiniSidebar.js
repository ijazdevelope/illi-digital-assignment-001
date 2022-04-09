import React from 'react'
import './MiniSidebar.css'
import Profile from '../assests/Group 6571.png'

const MiniSidebar = ({ miniSideBar, setMiniSideBar }) => {
    return (
        <>
            {miniSideBar &&
                <main className='position-absolute'>
                    <aside className='miniSide_bar'>
                        <ul className={`nav flex-column mb-auto text-white overflow-hidden`}>
                            <li className="nav-item position-relative">
                                <a href="#" className="nav-link position-relative">
                                    x
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link d-flex align-items-center fw-bold">
                                    Track
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link d-flex align-items-center color">
                                    <img className='me-3 filterOpacity ' src={Profile} alt='Profile-icon' />
                                    Assignments
                                </a>
                            </li>
                            <li className='nav-item my-4 background_Gray' onClick={() => setMiniSideBar(false)}>
                                <a href="#" className="nav-link d-flex align-items-center text-white">
                                    <img className='me-3' src={Profile} alt='Profile-icon' />
                                    Inputs
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className="nav-link d-flex align-items-center color">
                                    <img className='me-3 filterOpacity ' src={Profile} alt='Profile-icon' />
                                    Photos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link d-flex align-items-center fw-bold">
                                    Set Up
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className="nav-link d-flex align-items-center color">
                                    <img className='me-3 filterOpacity ' src={Profile} alt='Profile-icon' />
                                    Parameters
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className="nav-link d-flex align-items-center color">
                                    <img className='me-3 filterOpacity ' src={Profile} alt='Profile-icon' />
                                    Nurser/Ponds
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <div className="overlay"></div>
                </main>
            }
        </>
    )
}

export default MiniSidebar
