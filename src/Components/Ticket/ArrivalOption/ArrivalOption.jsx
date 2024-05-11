import React, { useEffect, useState } from 'react'
import SelectOption from '../../ui/SelectOption/SelectOption'

const ArrivalOption = () => {
    const [arrivalData, setarrivalData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/arrival')
            .then((res) => res.json())
            .then((data) => setarrivalData(data[0]))
    }, [])
    return (
        <div>
            <SelectOption data={arrivalData} placeHoler={'arrival'} />
        </div>
    )
}

export default ArrivalOption