import React, { useEffect, useState } from 'react'
import SelectOption from '../../ui/SelectOption/SelectOption'

const ArrivalOption = () => {
    const [arrivalData, setarrivalData] = useState([])
    useEffect(() => {
        fetch('https://popular-travels-developmen-task.vercel.app/arrival')
            .then((res) => res.json())
            .then((data) => setarrivalData(data[0]))
    }, [])
    return (
        <div>
            <SelectOption name='arrival' data={arrivalData} placeHoler={'arrival'} />
        </div>
    )
}

export default ArrivalOption