import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className='text-white text-[18px] flex items-center gap-2 
        cursor-pointer font-semibold hover:underline underline-offset-8 mb-3'>
            <Icon/>
            <span className=''>{name}</span>
        </div>
    )
}

export default HeaderItem
