import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import HeaderItem from './HeaderItem';

function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus,
        }
    ]
    return (
        <div className='flex items-center justify-between p-5 px-10'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="logo" />
                
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={''} Icon={item.icon} />
                    ))}
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            className='w-[40px] rounded-full border-2 border-transparent hover:border-gray-400 cursor-pointer transition-all' />
        </div>
    )
}
export default Header