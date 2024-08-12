import React from 'react'

const Input = (props) => {
    return (
        <label >
            {props?.label}
            <input type="text" {...props} className='bg-transparent outline-none border border-[#000] dark:border-[#fff] rounded-[10px] min-h-[50px] w-full px-[15px]' />
        </label>
    )
}

export default Input