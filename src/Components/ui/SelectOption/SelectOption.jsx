import React from 'react'

const SelectOption = ({placeHoler,data,name}) => {
    return (
        <>
            <select name={name?name:''} className=" w-full border border-black outline-none cursor-pointer py-2">
                <option disabled defaultValue={``} selected>{placeHoler?placeHoler:'select'}</option>
                {
                    data ? data?.map((item,index)=><option defaultValue={item} className='cursor-pointer' key={index}>{item}</option>): <option>select option</option>
                }
            </select>
        </>
    )
}

export default SelectOption