import React from 'react'
import ControlPanel from '../assests/Control Panel.png'
import MyInputs from '../assests/Inputs.png'
import SelectDates from '../assests/• Select Dates.png'
import SelectPoundes from '../assests/• Select Ponds.png'
import SelectToggle from '../assests/Toggle 1.png'
import SelectTabs from '../assests/tab_Pond.png'

import DatePicker from './DatePicker'

import './Inputs.css'

const Inputs = () => {
    return (
        <div className='myInputs mx-5'>
            <img className='my-3' src={MyInputs} alt='inputs' />
            <section className='text-white p-3 rounded'>
                <img src={SelectDates} className='d-block' alt='control-panel-img' />
                <div className="date_picker_icons position-relative">
                    <label htmlFor="date" className='ms-3'>From</label>
                    <DatePicker />
                </div>
                <div className="date_picker_icons position-relative my-3">
                    <label htmlFor="till" className='ms-3'>Till</label>
                    <DatePicker />
                </div>
                <img src={SelectPoundes} className='d-block my-3' alt='control-panel-img' />
                <img src={SelectToggle} className='d-block w-100 objectFill mb-3' alt='SelectToggle' />
                <img src={SelectTabs} className='d-block w-100 select_Tabs' alt='SelectTabs' />

            </section>
        </div>
    )
}

export default Inputs
