import React, { useState } from 'react'
import Navbar from './Tabs'
import Toggle from '../assests/Toggle 1.png'
import Pond1 from '../assests/Pond 1.png'
import Pond2 from '../assests/Pond 2.png'
import Line1 from '../assests/Line 631.png'
import Line2 from '../assests/Line 632.png'
import Button from '../assests/button-export.png'
import './Content.css'
import WaterCheck from './pages/WaterCheck'
import Feeding from './pages/Feeding'
import CheckShrimp from './pages/CheckShrimp'
import Custom from './pages/Custom'
import Tabs from '../components/Tabs'

const Content = () => {
    const [waterCheck, setWaterCheck] = useState('water check')

    return (
        <div className='w-100 ponds_wrapper'>
            <Tabs
                setWaterCheck={setWaterCheck}
                waterCheck={waterCheck}
            />
            <section className='bg_light_gray ponds border d-flex justify-content-between align-items-center px-3 -mt-3'>
                <div className='ponds_childs d-flex'>
                    <div>
                        <img src={Pond1} alt='pond-1' />
                        <img src={Line1} className='mx-3' alt='Line-1' />
                    </div>
                    <div>
                        <img src={Pond2} alt='pond-2' />
                        <img src={Line2} className='mx-3' alt='Line-2' />
                    </div>
                </div>
                <div className='ponds_icons'>
                    <img className='me-3' src={Toggle} alt='toggle' />
                    <img src={Button} alt='button' />
                </div>
            </section>

            {waterCheck == 'water check' && <WaterCheck />}
            {waterCheck == 'check shrimp' && <CheckShrimp />}
            {waterCheck == 'feeding' && <Feeding />}
            {waterCheck == 'custom' && <Custom />}

        </div>
    )
}

export default Content
