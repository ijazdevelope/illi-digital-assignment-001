import React from 'react'
import MyChart from '../MyChart'
import './chart.css'

const WaterCheck = () => {
    return (
        <div className='my-3 chart_wrapper'>
            <MyChart type='bar' />
            <MyChart type='area' className='my-3' />
            <MyChart type='line' />
            <MyChart type='area' />
            <MyChart type='line' />
        </div>
    )
}

export default WaterCheck
