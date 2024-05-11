import React from 'react'

const SelectOption = ({placeHoler,data}) => {
    return (
        <>
            <select className=" w-full border border-black outline-none cursor-pointer py-2">
                <option disabled selected>{placeHoler?placeHoler:'select'}</option>
                {
                    data ? data?.map((item,index)=><option className='cursor-pointer' key={index}>{item}</option>): <option>select option</option>
                }
            </select>
        </>
    )
}

export default SelectOption