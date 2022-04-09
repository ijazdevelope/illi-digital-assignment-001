import React, { useState } from 'react'
import DatePickerCalender from 'react-date-picker';

const DatePicker = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='text-white'>
            <DatePickerCalender className='text-white' onChange={onChange} value={value} />
        </div>
    )
}

export default DatePicker
