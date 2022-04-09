import React from 'react'
import './Tabs.css'


const Tabs = ({ setWaterCheck, waterCheck }) => {
    const items = ['water check', 'feeding', 'check shrimp', 'custom']

    return (
        <div>
            <ul className='d-flex p-1 text-white px-0'>
                {/* <li className='px-3 py-2 roundedTop' onClick={() => setWaterCheck('water check')} >Water Check</li>
                <li className='px-3 py-2 roundedTop' onClick={() => setWaterCheck('feeding')}>Feeding</li>
                <li className='px-3 py-2 roundedTop' onClick={() => setWaterCheck('check shrimp')}>Check Shrimp</li>
                <li className='px-3 py-2 roundedTop' onClick={() => setWaterCheck('custom')}>Custom</li> */}
                {items.map((tabs, index) => (
                    <li key={index} className={`px-3 py-2 roundedTop ${waterCheck === tabs && 'active'}`} onClick={() => setWaterCheck(tabs)}> {tabs} </li>
                ))}
            </ul>
        </div>
    )
}

export default Tabs
